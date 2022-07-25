import React, { useEffect, useState } from 'react';

function ServiceShow() {
    let [services, setServices] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch ('http://localhost:3500/services')
            const resData = await response.json()
            setServices(resData)
        }
        fetchData()
    },[])
   

    }
   
