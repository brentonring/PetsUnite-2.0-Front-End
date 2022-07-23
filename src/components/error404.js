const React = require('react');

function error404(){
    return(
        <div><h1>404: PAGE NOT FOUND</h1>
            <p>You seem lost...</p>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/16/16/teddy-bear-1835598__480.jpg" alt="Photo of a Teddy Bear"></img> 
                </div>
                    <a href="/"><button className="btn btn-primary">Home Page</button></a> 
        </div>
    )
}

export default error404

// EXAMPLE CODE FOR APP.JS --> SWITCH TAGS
// import React from "react";
// import {  Route, Switch, BrowserRouter } from 'react-router-dom'
// import Home from '.Home';
// import error404 from './components/error404';
  
// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route path="*" component={PageNotFound} />
//       </Switch>
//     </BrowserRouter>
//   );
// }
  
// export default App;