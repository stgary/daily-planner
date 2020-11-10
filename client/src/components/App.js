import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Calendar from './Calendar'
// import PrivateRoute from './PrivateRoute';

function App() {
  const [user, setUser] = useState(false)
  console.log(user)
  return (
    <div className="app">
      <Route exact path='/'>
        <Home setUser={setUser} />
      </Route>
      <Route exact path='/calendar'>
        <Calendar user={user} setUser={setUser} />
      </Route> 
    </div>
  );
}

export default App;
