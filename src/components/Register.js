
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/nav');
  }

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Register;
