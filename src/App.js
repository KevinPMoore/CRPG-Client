import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicRoute from './Utils/PublicRoute';
import PrivateRoute from './Utils/PrivateRoute';
import Header from './Components/Header/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Landing from './Routes/Landing';
import './App.css';

export default function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <main>
        <Switch>
          <Route
            exact
            path={'/'}
            component={Landing}
          />

          <Route
            path={'/login'}
            component={Login}
            setLoggedIn={setLoggedIn}
          />
          
          <Route
            path={'/register'}
            component={Register}
            setLoggedIn={setLoggedIn}
          />
          
        </Switch>
      </main>
    </div>
  );
};