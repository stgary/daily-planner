import React from 'react'
import { NavLink } from 'react-router-dom';

import Sign from './Sign';

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/calendar" className="link-home">Calendar</NavLink>
        </nav>
      </header>
      <Sign />
    </div>
  )
}
