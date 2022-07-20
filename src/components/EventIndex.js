import React, { useState, useEffect} from 'react';
import { ReactDOM } from 'react';

function EventIndex() {
    let [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3500/events`)
        .then((response) => response.json())
        .then((responseJson) => {
            setEvents(responseJson.event_name)
            console.log(responseJson.event_name)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])  

    let eventsFormatted = events.map((event) => {
		return (
			<div className="col-sm-6" key={event._Id}>
				<h2>
					
						{event.event_name}
					
				</h2>
			
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