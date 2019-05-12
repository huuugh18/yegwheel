import React from 'react';
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

// var myEventsList = [ {
//   title: 'Demo',
//   start: '2019-05-12 11:00',
//   end: '2019-05-12 12:00',
//   // allDay?: boolean
//   // resource?: any,
// }]


var myEventsList = [
  {
    title: 'Demo Day #20',
    start: new Date(2019, 3, 28, 11, 0, 0, 0),
    end:  new Date(2019,  3, 28, 13, 0, 0, 0),
    desc: 'Wheel demonstrations and test rides'
  },
  {
    title: 'Demo Day #21',
    start: new Date(2019, 4, 5, 11, 0, 0, 0),
    end:  new Date(2019,  4, 5, 13, 0, 0, 0),
    desc: 'Wheel demonstrations and test rides'
  },
  {
    title: 'Demo Day #22',
    start: new Date(2019, 4, 12, 11, 0, 0, 0),
    end:  new Date(2019,  4, 12, 13, 0, 0, 0),
    desc: 'Wheel demonstrations and test rides'
  },
  {
    title: 'Demo Day #23',
    start: new Date(2019, 4, 19, 11, 0, 0, 0),
    end:  new Date(2019,  4, 19, 13, 0, 0, 0),
    desc: 'Wheel demonstrations and test rides'
  },
  {
    title: 'Demo Day #24',
    start: new Date(2019, 4, 26, 11, 0, 0, 0),
    end:  new Date(2019,  4, 26, 13, 0, 0, 0),
    desc: 'Wheel demonstrations and test rides'
  },
]

const PageComponent = () => <div className="borxx">
<BigCalendar
      style={{minWidth:800}}
      localizer={localizer}
      events={myEventsList}
      views={['month','day','agenda']}
      startAccessor="start"
      endAccessor="end"
    />
</div>

export default PageComponent;