import React from 'react';
import { Switch,Route } from 'react-router-dom'
import './css/App.css';

import Main from './pages/index.js'

function App() {
  return (
    
  <Switch>
  <Route path='/' component={Main}/>
  </Switch>
  );
}

export default App;
