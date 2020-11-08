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
      <div className='info-form-container'>
        <div className='info'>
          <p className='p3'>Keep track of all your daily activities in one place</p>
          <p className='p4'>Simple and easy to use</p>
          <p className='p8'>Drag and click to create edit and delete events</p>
          <p className='p1'>Use the Calendar and Agenda to review your schedule</p>
          <p className='p6'>Theres no adds or hidden fees</p>
          <p className='p7'>Interested? just create an account and then start scheduling</p>
        </div>
        <div className='wrapper'>
          <Sign />
        </div>
      </div>
    </div>
  )
}
