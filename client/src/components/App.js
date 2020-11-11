import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Calendar from './Calendar'

function App() {
  const [user, setUser] = useState(false)
  const id = window.localStorage.getItem('id')
  const name = window.localStorage.getItem('name')

  if(!user) {
    if(id && name) {
      setUser({ id: id, name: name })
    }
  }

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
