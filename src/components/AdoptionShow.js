import React, { useEffect, useState } from 'react';

function AdoptionShow() {
    let [shows, setShows] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch ('http://localhost:3500/adoption')
            const resData = await response.json()
            setShows(resData)
        }
        fetchData()
    },[])
 

    }
   