import './App.css';
import EventIndex from './components/EventIndex';
import Nav from './components/Nav'
import HomeBody from './components/HomeBody'
import Footer from './components/Footer'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import error404 from './components/error404'

function App() {
  return (
    <div >
      <Nav />
      <HomeBody />
      <Footer />
      <EventIndex />
    </div>
  );
}

export default App;
