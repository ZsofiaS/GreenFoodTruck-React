/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div onClick={() => console.log('clicked!')} role="button" tabIndex={0}>
          Cappuccino
        </div>
        <div onClick={() => console.log('clicked!')} role="button">
          Coffee
        </div>
        <div onClick={() => console.log('clicked!')} role="button">
          Croissant
        </div>
        <div onClick={() => console.log('clicked!')} role="button">
          Pain au chocolat
        </div>
      </main>
    </div>
  );
}

export default App;
