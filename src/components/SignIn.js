import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { auth } from '../firebase/firebaseConfig';
import { Alert } from '@material-ui/lab';
import * as authActions from '../store/actions/auth';
import '../styles/SignIn.scss';

const SignIn = () => {
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const signIn = async () => {
    setError(null);
    try {
      await dispatch(authActions.signin(email, password));
    } catch (err) {
      setError(err.message);
    }
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((res) => {
    //     history.push('/home');
    //     console.log(res.user);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
