import './App.css';
import EventIndex from './components/EventIndex';
import Nav from './components/Nav'
import HomeBody from './components/HomeBody'
import Footer from './components/Footer'
import ServiceIndex from './components/ServiceIndex';
import AdoptionIndex from './components/AdoptionIndex';
import NewAdoption from './components/NewAdoption';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import error404 from './components/error404'

function App() {
  return (
    <div>
      <Nav />
<<<<<<< Updated upstream
      {/* <HomeBody /> */}
      <AdoptionIndex />
      {/* <ServiceIndex /> */}
      {/* <EventIndex /> */}
      <Footer />
=======
      <HomeBody />
      {/* <AdoptionIndex />
      <ServiceIndex />
      <EventIndex /> */}
      <NewAdoption />
      <Footer />
      
      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
