import React from 'react';
import './AuthPage.css';

export default function AuthPage() {
  return (
    <form id="authForm">
      <h2>authorization</h2>
      <input placeholder='Username' type='text' id='username' />
      <input placeholder='Password' type='text' id='password' />
      <div>
        <button type='submit'>Sign In</button>
        <button type='submit'>Sign up</button>
      </div>
    </form>
  );
}
