import React, { useState, useEffect} from 'react';
import NewService from './NewService';
import ServiceShow from './ShowService';
import {useHistory} from 'react-router-dom';


function ServiceIndex() {
    const history = useHistory()
    let [services, setServices] = useState([])

    useEffect(() => {
          const fetchData = async () => {
            //   const response = await fetch(`http://localhost:3500/services`)
              const response = await fetch(`${process.env.REACT_APP_SERVER_URL}services/`)
              const resData = await response.json()
              setServices(resData)
          }
          fetchData()
      }, [])
  
      let servicesFormatted = services.map((service) => {
        return(
            <div className='col-sm-4 g-4 mt-0 mb-4'>
                <div id="card">
                <div id="card-content" className='row align-items-center p-4 py-0 mt-4' key={service._id}>
                        <h2 className="text-center">
                            <a className= "text-decoration-none text-capitalize" href={`/services/${service._id}`} onClick={ServiceShow}> {service.service} </a>
                        </h2>
                        <a className= "text-decoration-none mt-3" href={`/services/${service._id}`}><img className="rounded mx-auto d-block" src={service.pic} alt={service.name}></img></a>
                            <ul className='row mx-auto d-block mt-4'>
                                <li className='list-group-item text-capitalize rounded'>
                                    <img id="icons" src="/images/icons/icon_bread32.png"></img>{service.breed}
                                </li>
                                <li className='list-group-item text-capitalize rounded'>
                                    <img id="icons" src="/images/icons/icon_gender32.png"></img>{service.gender}
                                </li>
                                <li className='list-group-item text-capitalize rounded'>
                                    <img id="icons" src="/images/icons/icon_bday32.png"></img>{service.age} {service.age_unit}
                                </li>
                            </ul>
                    </div>
                    <div id="card-content-buttons" className='text-center mx-auto d-block'>
                        {/* future development- functional like button counting total button presses on index pages*/} 
                        <button type="submit" className="love-custom-btn mx-2 my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }} className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg> 0 
                        </button> 
                        {/* future development- functional edit comment button counting total comments on show pages*/} 
                        <button type="submit" className="comment-custom-btn mx-2 my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }} className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg> 0
                        </button>
                    </div>
                </div>
            </div>
            
        )
    })
    return(        
        <main className="index-main m-5">
            <h1 className="index-header pt-4" style={{fontSize:40}}>Pet Services Needed</h1>
            <div id="main-container">
                <div className='text-center m-4'>
                    <form method="GET" action="/services/new">
                        <input onClick={NewService} className='custom-btn' type="submit" value="Add a Service"></input>
                    </form> 
                </div>
                <div className='container px-5'>
                    <div className="row gx-5">
                        {servicesFormatted}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default ServiceIndex;