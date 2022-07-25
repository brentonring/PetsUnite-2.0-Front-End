// import React from "react";

// function showPet() {
   
// }
import React, { useEffect, useState } from "react";

function showPet() {
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