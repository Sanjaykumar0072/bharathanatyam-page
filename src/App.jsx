import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/assets/style/css/style.css';
import Home from './components/home';
import Playlist from './components/playlist';
import ContactUs from './components/contact';
import About from './components/about';
import Awards from './components/gallery/awards';
import Events from "./components/gallery/events";
import Photoshoot from "./components/gallery/photoshoot";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/playlist' element={<Playlist />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/awards' element={<Awards />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/photoshoot' element={<Photoshoot />}/>     
        </Routes>
      </Router>
    </>
  )
}

export default App;
