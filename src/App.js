import React from 'react';
// internal components
import Nav from './Components/Nav/Nav';
import Routes from './config/routes';
// styles
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
