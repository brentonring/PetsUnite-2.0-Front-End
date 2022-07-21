import React, { useState, useEffect } from 'react';

function index_events() {
    let [events, setEvents] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3500/events`)
        .then((response) => response.json())
        .then((responseJson) => {
            setEvents(responseJson.data)
        })
        .catch(err => {
            console.log(err)
        })   
    })  

  return (
    <div>
        <ul>
            {
                events.map(events => <li key={events.id}>{events.event_name}</li>)
            }
        </ul>
    </div>
  )
}

export default index_events