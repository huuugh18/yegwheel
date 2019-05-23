import React, {useState} from 'react';
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


const ToEvent = (title, date) => {
  var start = moment(`${date}T11:01`)
  var end = moment(`${date}T14:02`)
  return {
    title: title,
    start: start,
    end:  end,
    desc: 'Wheel demonstrations and test rides'
  }
}

var myEventsList = [
  ToEvent('Demo Day #20','2019-03-28'),
  ToEvent('Demo Day #21','2019-05-05'),
  ToEvent('Demo Day #22','2019-05-12'),
  ToEvent('Demo Day #23','2019-05-19'),
  ToEvent('Demo Day #24','2019-05-26'),
  ToEvent('Demo Day #25','2019-06-02'),
  ToEvent('Demo Day #26','2019-06-09'),
  ToEvent('Demo Day #27','2019-06-16'),
  ToEvent('Demo Day #28','2019-06-23'),
]

const PageComponent = () => {
  const [asof, setAsof] = useState(new Date())
  const [view, setView] = useState('month')

  const pickEvent = evt => {
    setAsof(evt.start)
    setView('agenda')
  }

  return <div className="borxx">
    <BigCalendar
      style={{minWidth:1100}}
      localizer={localizer}
      events={myEventsList}
      views={['month','agenda']}
      startAccessor="start"
      endAccessor="end"
      date={asof}
      view={view}
      onView={vw => setView(vw)}
      onSelectEvent={pickEvent}
      onNavigate={date => setAsof(date)}
    />
    </div>
}

export default PageComponent;