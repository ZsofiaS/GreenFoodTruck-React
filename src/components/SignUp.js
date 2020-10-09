import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { auth } from '../firebase/firebaseConfig';
import { Alert } from '@material-ui/lab';
import '../styles/SignUp.scss';
import * as authActions from '../store/actions/auth';

const SignUp = () => {
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const signUp = async () => {
    setError(null);
    try {
      await dispatch(authActions.signup(email, password));
    } catch (err) {
      setError(err.message);
    }
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((res) => {
    //     history.push('/main');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  // useEffect(() => {
  //   if (error) {

  //   }
  // }, [ error ]);

  return (
    <div className="signIn">
      <h1 className="signIn-title">Register your account</h1>
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
      <button type="button" onClick={signUp}>
        Sign Up
      </button>
      {error ? <Alert severity="error">An error occured. {error}</Alert> : ''}
    </div>
  );
};

export default SignUp;
