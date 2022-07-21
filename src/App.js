import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Nav from './components/Nav';
// import MainBody from './components/MainBody';
// import Footer from './components/Footer';
import Home from './components/Home';
// import AdoptionEdit from './components/adoption/edit_adoption'
// import AdoptionIndex from './components/adoption/index_adoption'
// import AdoptionNew from './components/adoption/new_adoption'
// import AdoptionShow from './components/adoption/show_adoption'

// import EventEdit from './components/adoption/edit_adoption';
// import EventIndex from './components/EventIndex';
import NavBar from './components/Nav';
// import EventNew from './components/adoption/new_adoption';
// import EventShow from './components/adoption/show_adoption';

// import ServiceEdit from './components/adoption/edit_adoption';
// import ServiceIndex from './components/adoption/index_adoption';
// import ServiceNew from './components/adoption/new_adoption';
// import ServiceShow from './components/adoption/show_adoption';
// import error404 from './components/error404'

function App() {
  return (
    // <div>
    //   {/* <NavBar />
    //   <MainBody />
    //   <Footer /> */}
    //   <EventIndex />
    // </div>
    <div>
      {/* <NavBar/> */}
      <Home/>
    </div>
    // <BrowserRouter>
    //   <Nav />
    //   <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/sign-up" component={SignUpForm} />
    //     <Route exact path="/login" component={LoginForm} />
    //     <Route exact path="/events" component={EventIndex} />
    //     <Route exact path="/places/new" component={NewPlaceForm} />
    //     <Route exact path="/places/:placeId" component={PlaceDetails} />
    //     <Route exact path="/places/:placeId/edit" component={EditPlaceForm} />
    //     <Route path="/" component={Error404} />
    //   </Routes>
    // </BrowserRouter>
  
  );
}

export default App;
