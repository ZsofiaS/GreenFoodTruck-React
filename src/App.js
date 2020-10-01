import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingBasket,
  faPoundSign,
} from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home.js';
import Main from './components/Main.js';
import Ingredients from './components/Ingredients.js';
import Sales from './components/Sales.js';
import './App.scss';

const App = () => (
  <Router>
    <div>
      <aside className="navbar">
        <Link className="navbar-link" to="/">
          <FontAwesomeIcon
            className="icon"
            icon={faHome}
            size="sm"
            color="white"
          />
          Home
        </Link>
        <Link className="navbar-link" to="/sales">
          <FontAwesomeIcon
            className="icon"
            icon={faPoundSign}
            size="sm"
            color="white"
          />
          Sales
        </Link>
        <Link className="navbar-link" to="/stock">
          <FontAwesomeIcon
            className="icon"
            icon={faShoppingBasket}
            size="sm"
            color="white"
          />
          Stock
        </Link>
      </aside>

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
