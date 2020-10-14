import React from 'react';
// pages
import Home from './pages/home/home';
import Room from './pages/room/room';
// react-router-dom
import {Switch, Route} from 'react-router-dom';
// components
import Header from './components/header';
// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/room' component={Room} />
        </Switch>
    </div>
  );
}

export default App;
