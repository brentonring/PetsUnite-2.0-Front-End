import React, { useState, useEffect} from 'react';
import { ReactDOM } from 'react';

function EventIndex() {
    let [events, setEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          // const response = await fetch(`${process.env.SERVER_URL}events/`)
          const response = await fetch(`http://localhost:3500/events`)
          const resData = await response.json()
          setEvents(resData)
        }
        fetchData()
    }, [])  

    let eventsFormatted = events.map((event) => {
		return (
			<div className="col-sm-6" key={event._Id}>
        <h1>Event Names</h1>
				<h2>{event.event_name}</h2>
			</div>
		)
	})

  return (
    <div>
        {eventsFormatted}
    </div>
  )
}


export default EventIndex