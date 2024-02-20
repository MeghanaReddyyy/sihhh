import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../components/Email.css';

const Form1 = () => {
  const { register, handleSubmit } = useForm();
  const [exceededDays, setExceededDays] = useState(false);
  const [mailStatus, setMailStatus] = useState("Invalid");

  const onSubmit = async (data) => {
    const arrestDate = new Date(data.caseOpeningDate);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - arrestDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    if (differenceInDays > 60) {
      setExceededDays(true);

      try {
        const response = await fetch('/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('Email sent successfully!');
        } else {
          console.error('Failed to send email.');
        }
      } catch (error) {
        console.error('Error sending the email:', error);
      }
    } else {
      setExceededDays(false);
    }
  };

  const handleMeg = () => {
    if (exceededDays) {
      setMailStatus("Days Exceeded 60, Mail Sent.");
    } else if (exceededDays === false) {
      setMailStatus("Days not exceeded 60. Email not sent.");
    } else {
      setMailStatus("Invalid");
    }
  };

  return (
    <form className="input-field container" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('name')} />
      <input type="email" placeholder="Email" {...register('email')} />
      <input type="text" placeholder="Name of arrested person" {...register('arrestedName')} />
      <input type="date" placeholder="Case opening date" {...register('caseOpeningDate')} />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleMeg}>Check Mail Status</button>
      <p>{mailStatus}</p>
    </form>
  );
};

export default Form1;
