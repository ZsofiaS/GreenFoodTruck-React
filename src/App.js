import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'firebase/auth';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import store from './store/store';
// import firebase from '../firebase/firebaseConfig';
import Home from './components/Home.js';
import Main from './components/Main.js';
import Navbar from './components/Navbar.js';
import Ingredients from './components/Ingredients.js';
import Sales from './components/Sales.js';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <main>
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/sales" component={Sales} />
        <Route path="/stock" component={Ingredients} />
      </main>
    </Router>
  </Provider>
);
export default App;
