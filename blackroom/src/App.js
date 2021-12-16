import './sass/main.sass';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Exhibitions from './Components/Exhibitions';
import Rooms from './Components/Rooms';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Exhibitions />
      <Rooms />
      <Contact />
    </div>
  );
}

export default App;
