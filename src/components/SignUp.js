import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';

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
    <div>
      <h1>Register your account</h1>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
