import React from 'react';
// internal components
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
// styles
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default App;
