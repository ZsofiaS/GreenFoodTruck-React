import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import '../styles/SignUp.scss';

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/main');
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
