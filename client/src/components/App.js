import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Calendar from './Calendar'
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="app">
      <Route exact path='/' component={Home} />
      <Route exact path='/calendar' component={Calendar} />
    </div>
  );
}

export default App;
