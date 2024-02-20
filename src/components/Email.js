import React, { useState } from 'react';
import '../components/Email.css';

function EmailSender() {
  const [userEmail, setUserEmail] = useState('');

  const sendEmail = async () => {
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }), // Pass the user's email to the backend
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending the email:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div className="email-sender"> {/* Apply className for styling */}
      <h1>Email Sender</h1>
      <div className="input-field">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="input-field" 
        />
        <button
          type="submit"
          className="submit-button" 
        >
          Send Email
        </button>
      </form>
      </div>
    </div>
  );
}

export default EmailSender;

