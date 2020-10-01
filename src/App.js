import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'firebase/auth';

import Home from './components/Home.js';
import Main from './components/Main.js';
import Ingredients from './components/Ingredients.js';
import Sales from './components/Sales.js';
import './App.scss';

const App = () => (
  <Router>
    <div>
      <main>
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Home} />
        <Route path="/sales" component={Sales} />
        <Route path="/stock" component={Ingredients} />
      </main>
    </div>
  </Router>
);

export default App;
