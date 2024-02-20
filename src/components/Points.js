import React,{useEffect} from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import tEn from '../locales/de/translation.json'
import tDe from '../locales/en/translation.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation:tEn 
      },
      de: {
        translation: tDe
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  const changeLang = (l)=>{
    //alert('OK');
  return ()=>{
    //alert('ok '+l);
    //Now change the language
    //object.member();
    i18n.changeLanguage(l);

    //Now set the current language in local storage
    localStorage.setItem('lang',l);

  }
}
function Points(){ // My App component is a functional component
  const { t } = useTranslation();

  useEffect(() => {
    //alert('Page is loaded successfully');
    //get the current language stored in the local storage
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);

  }, [])
  return (
    <>
    <h1 style={{textAlign:'center'}}>Things to know Before it's too late!</h1>
      <p>{ t('welcome_to_react') }</p>
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <button onClick={ changeLang('en') }>English</button>
      <button onClick={ changeLang('de') }>Dutch</button>
      </div>
    </>
  );
}
export default Points;









{/*import React from 'react';

const Points = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#444',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const headerFooterStyle = {
    backgroundColor: '#555',
    padding: '10px',
    textAlign: 'center',
  };

  const h1h2Style = {
    color: '#ffcc00',
  };

  const listStyle = {
    marginBottom: '20px',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <header style={headerFooterStyle}>
        <h1 style={h1h2Style}>Know these before it's too late!</h1>
      </header>

      <h2 style={h1h2Style}>Code of Criminal Procedure (Amendment) Bill, 2006</h2>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          The Bill makes it mandatory for a witness to sign statements made to the police.
          Material witnesses in heinous offences are to be produced before a magistrate
          for recording of the statement.
        </li>
        <li style={listItemStyle}>
          A police officer has to specify in writing the reasons for making an arrest,
          in cases of offences punishable with imprisonment up to seven years. In certain
          cases, the police can also issue a “notice of arrest” rather than arresting a person.
        </li>
      </ol>

      <h2 style={h1h2Style}>Section 436 Cr.P.C.</h2>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          For bailable offences, if the accused is unable to obtain bail within one week
          of his arrest, the police officer and the court may presume that the person is
          indigent or poor and may grant bail to such an accused without surety.
        </li>
        <li style={listItemStyle}>
          Section 436A - The purpose of this Section is to establish that if an under-trial
          prisoner has been detained for a period lasting up to one-half of the maximum
          period of imprisonment provided for the alleged crime, he should be discharged
          on his personal bond, with or without sureties.
        </li>
      </ol>

      <h2 style={h1h2Style}>Section 437</h2>
      <p style={listItemStyle}>
        Even if the case is non-bailable, the accused may be discharged on bail, if he
        is below the age of sixteen, a woman, or is sick or not physically or mentally
        strong, especially through age or illness.
      </p>

      <footer style={headerFooterStyle}>
        <p>&copy; 2023 Justice System Initiative</p>
      </footer>
    </div>
  );
};

export default Points;*/}
