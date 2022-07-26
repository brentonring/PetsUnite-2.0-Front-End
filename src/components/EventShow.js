import React, { useEffect, useState } from 'react';

function EventShow() {
    let [events, setEvents] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch ('http://localhost:3500/events')
            const resData = await response.json()
            setEvents(resData)
        }
        fetchData()
    },[])
  

    }
    
   
