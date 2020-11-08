import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from 'axios';
import { GET_EVENTS, POST_EVENT } from '../config';

const localizer = momentLocalizer(moment);
const views = {month: true, week: true, agenda: true}

export default function Cal() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(GET_EVENTS)
      .then(res => {
        res.data.forEach(evt => {
          evt.start = new Date(evt.start);
          evt.end = new Date(evt.end);
        })
        setEvents(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [events]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('please enter a name');

    if(title) {
      
      axios
        .post(POST_EVENT, { start, end, title })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.message);
        })

      setEvents([...events, { start, end, title }]);
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

  return (
    <div className='cal'>
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