import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from 'axios';

const localizer = momentLocalizer(moment);
const views = {month: true, week: true, agenda: true}

export default function Cal({ user, setUser }) {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  const POST_EVENT = 'https://dayplans.herokuapp.com/events';
  const GET_EVENTS = `https://dayplans.herokuapp.com/events/${user.id}`;

  useEffect(() => {
      axios
        .get(GET_EVENTS)
        .then(res => {
          console.log('from GET', res.data)
          res.data.forEach(evt => {
            evt.start = new Date(evt.start);
            evt.end = new Date(evt.end);
          })
          setEvents(res.data);
        })
        .catch(error => {
          console.log(error.message);
        });
  }, []);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('please enter a name');
    const user_id = user.id;

    if(title && user_id) {  
      axios
        .post(POST_EVENT, { user_id, start, end, title })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.message);
        })

      setEvents([...events, { start, end, title }]);
    } else {
      window.alert('To continue you must register or sign in!')
    }
  }

  const onSelectEvent = e => {
    const remove = window.confirm('confirm delete?');
    console.log(e);

    if(remove === true) {
      axios 
        .delete(`http://localhost:5000/events/${e.id}`)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.message);
        })

      const index = events.indexOf(e);
      events.splice(index, 1);

      return events;
    }
  }

  const signOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('name');
    setUser(false);
    history.push('/');
  }

  return (
    <div className='calendar'>
      <header>
        <nav>
        {user && 
          <div className="isUser">
            <span>Hello! { user.name } here is you itinerary!</span>
            <button onClick={signOut}>Log Out</button>
          </div>
        }
        {!user &&
          <div className='isUser'>
            <span>You have to sign in to view your itinerary!</span>
            <button onClick={()=> history.push('/')}>Sign In</button>
          </div>
        }
        </nav>
      </header>
      <div className='cal-outer-container'>
        <div className='cal-inner-container'>
          <Calendar
            defaultDate={moment().toDate()}
            defaultView="month"
            views={views}
            events={events}
            localizer={localizer}
            selectable
            onSelectEvent={(e) => onSelectEvent(e)}
            onSelectSlot={(e) => handleSelect(e)}
            startAccessor='start'
            endAccessor='end'
          />
        </div>
      </div>
    </div>
  )
}