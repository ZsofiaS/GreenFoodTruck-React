import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { auth } from '../firebase/firebaseConfig';

const Main = () => {
  const history = useHistory();
  const [authType, setAuthType] = useState('signIn');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) history.push('/home');
    });
  }, []);

  return (
    <div>
      {authType === 'signIn' ? (
        <div>
          <SignIn />
          <p>
            Don't have an account?{' '}
            <button type="button" onClick={() => setAuthType('signUp')}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div>
          <SignUp />
          <p>
            Do you have an account?{' '}
            <button type="button" onClick={() => setAuthType('signIn')}>
              Sign In
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
