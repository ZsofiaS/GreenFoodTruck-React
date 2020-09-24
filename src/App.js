import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Ingredients from './components/Ingredients.js';
import Sales from './components/Sales.js';

const App = () => (
  <Router>
    <div>
      <aside>
        <Link to="/">Home</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/stock">Stock</Link>
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
