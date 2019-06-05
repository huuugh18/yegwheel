import React, {useState} from 'react';
import moment from 'moment'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'

const WithDuration = (start, title, desc, minutes) => toEvent(title, start, moment(start).add(minutes,'minutes'), desc )

const NinetyMinutes = (title, start, desc) => WithDuration(title, start,  90, desc)
const ThreeHours    = (title, start, desc) => WithDuration(title, start, 180, desc)

const T11AM = (date) => moment(date).add(11, 'hours')
const TwoHours = (start) => ({start:moment(start), end:moment(start).add(2,'hours')})

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const toEvent = (title, start, end, desc) => ({title, start, end, desc})
const toOnehourEvent = (title, start, desc) => toEvent(title, start, )


const ToEvent = (title, date) => {
  const {start, end} = TwoHours(T11AM(date))
  const desc = ""
  return toEvent(title, start, end, desc)
}


const ToWeekendEvent = (title, desc, date) => {
  var start = moment(`${date}`)
  var end = moment(start).add(2, "days")
  return {title, start, end, desc, allDay:true }
}

const demoday = (date) => {
  let tod = moment(date+'T11:00')
  let tod1 = moment(date+'T12:30')
  const result = [
    NinetyMinutes(tod, 'Demo Session','Demonstrations, test rides, training'),
    ThreeHours(tod1, 'Group ride','Ride out into the city, river valley etc.')
  ]  
  console.log(result)
  return result
}

const e23 = ToEvent('Demo Day #23','2019-05-19')
console.log(e23)


var myEventsList = [
  ...demoday('2019-05-05'),
  ...demoday('2019-05-12'),
  ...demoday('2019-05-19'),
  ...demoday('2019-05-26'),
  ...demoday('2019-06-02'),
  ...demoday('2019-06-09'),
  ...demoday('2019-06-16'),
  ToWeekendEvent('Drumheller Field Trip', 'Day trip to Drumheller to run the 48km Dinosaur soop' ,'2019-06-22'),
  ...demoday('2019-06-30'),
  ...demoday('2019-07-07'),
  ...demoday('2019-07-14'),
  ...demoday('2019-07-21'),
  ...demoday('2019-07-28'),
  ...demoday('2019-08-04'),
  ...demoday('2019-08-11'),
  ...demoday('2019-08-18'),
  ...demoday('2019-08-25')
]

console.log(myEventsList)

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