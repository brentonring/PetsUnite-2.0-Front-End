import './App.css';
import NavBar from './components/Nav';
import Footer from './components/Footer';
// import AdoptionIndex from './components/adoption/AdoptionIndex';
// import EventIndex from './components/events/EventIndex';
// import ServiceIndex from './components/services/ServiceIndex';
// import error404 from './components/error404'

function App() {
  return (
    <div>
      <Nav />
      {/* <HomeBody /> */}
      <AdoptionIndex />
      <ServiceIndex />
      <EventIndex />
      <Footer />
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
