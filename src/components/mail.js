const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '707378861566-c85gq34tktdfp116g97vhh0cmmhap46s.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04T-A9z-iciqBCgYIARAAGAQSNwF-L9Ir7THld-CCr1Ngcdf5hSBiCb3PkcGoh3dvU0NJyP6B5VeV6AnnTZba5ZKCE5ZrkRdYA9A';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
  
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'meghanareddyy18@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'MEGHANA <meghanareddyy18@gmail.com>',
      to: 'meghanareddy936@gmail.com',
      subject: 'Hello SIH',
      text: 'Hello',
      html: '<h1>Hello</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));










