import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Landing from './Routes/Landing';
import './App.css';

export default function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Landing/>
    </div>
  );
};