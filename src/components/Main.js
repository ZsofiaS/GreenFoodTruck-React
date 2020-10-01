import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { auth } from '../firebase/firebaseConfig';
import '../styles/Main.scss';

const Main = () => {
  const history = useHistory();
  const [authType, setAuthType] = useState('signIn');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) history.push('/home');
    });
  });

  return (
    <div className="main">
      {authType === 'signIn' ? (
        <div className="main-container">
          <SignIn />
          <p>
            Don't have an account?{' '}
            <button
              type="button"
              className="smallButton"
              onClick={() => setAuthType('signUp')}
            >
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div className="main-container">
          <SignUp />
          <p className="main-container-p">
            Do you have an account?{' '}
            <button
              type="button"
              className="smallButton"
              onClick={() => setAuthType('signIn')}
            >
              Sign In
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
