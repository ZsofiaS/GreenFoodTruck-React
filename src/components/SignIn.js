import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { auth } from '../firebase/firebaseConfig';
import '../styles/SignIn.scss';

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const signIn = async () => {
    setError(null);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/home');
      })
      .then(() => {
        auth.currentUser.getIdToken().then((idToken) => {
          console.log(idToken);
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="signIn">
      <h1 className="signIn-title">Sign in to your account</h1>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="button" onClick={signIn}>
        Sign In
      </button>
      {error ? <Alert severity="error">An error occured. {error}</Alert> : ''}
    </div>
  );
};

export default SignIn;
