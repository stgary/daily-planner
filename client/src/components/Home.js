import React from 'react'
import { useHistory } from 'react-router-dom';

import Sign from './Sign';

export default function Home() {
  const history = useHistory();

  return (
    <div className='home'>
      <header>
        <nav>
        <span className='cal'>Free Scheduler and Visualization</span>
        <button onClick={() => history.push('/calendar')}>
          <span>Calendar</span>
        </button>
        </nav>
      </header>
      <div className='simple'>
      </div>
      <div className='info-form-container'>
        <div className='info'>
          <p className='p4'>Simple and easy to use.</p>
          <p className='p1'>Multi-View Calendar and Agenda.</p>
          <p className='p7'>Interested? Create an account and start scheduling.</p>
        </div>
        <div className='wrapper'>
          <Sign />
        </div>
      </div>
    </div>
  )
}
