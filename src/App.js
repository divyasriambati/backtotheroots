
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Collabrations from './components/Collabrations/Collabrations'
import Contact from './components/Contact/Contact'
import Accomplishments from './components/Accomplishments/Accomplishments'
import Mission from './components/Mission/Mission';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Donate from './components/Donate/Donate';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Footer" element={<Footer/>} />
            <Route exact path="/Navbar" element={<Navbar/>}/>
            <Route exact path="/About" element={<About/>}/>
            <Route exact path="/Mission" element={<Mission/>}/>
            <Route exact path="/Gallery" element={<Gallery/>}/>
            <Route exact path="/Collabrations" element={<Collabrations/>}/>
            <Route exact path="/Accomplishments" element={<Accomplishments/>}/>  
            <Route exact path="/Contact" element={<Contact/>}/> 
            <Route exact path="/Donate" element={<Donate/>}/> 
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );  
}

export default App;
