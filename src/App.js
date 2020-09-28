import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingBasket,
  faPoundSign,
} from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home.js';
import Ingredients from './components/Ingredients.js';
import Sales from './components/Sales.js';

const App = () => (
  <Router>
    <div>
      <aside className="App-navbar">
        <Link className="App-link" to="/">
          <FontAwesomeIcon
            className="icon"
            icon={faHome}
            size="md"
            color="white"
          />
          Home
        </Link>
        <Link className="App-link" to="/sales">
          <FontAwesomeIcon
            className="icon"
            icon={faPoundSign}
            size="md"
            color="white"
          />
          Sales
        </Link>
        <Link className="App-link" to="/stock">
          <FontAwesomeIcon
            className="icon"
            icon={faShoppingBasket}
            size="md"
            color="white"
          />
          Stock
        </Link>
      </aside>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/sales" component={Sales} />
        <Route path="/stock" component={Ingredients} />
      </main>
    </div>
  </Router>
);

export default App;
