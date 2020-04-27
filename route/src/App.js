import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import One from './components/One';
import Two from './components/Two';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route path='/one' component={One} />
      <Route path='/two' component={Two} />
    </div>
  );
}

export default App;
