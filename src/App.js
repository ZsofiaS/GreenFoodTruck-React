import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home.js';

const About = () => (
  <div>
    <h2>About</h2>
    ...
  </div>
);

const App = () => (
  <Router>
    <div>
      <aside>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </aside>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    </div>
  </Router>
);

export default App;
