
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>

    //     <Route exact path="/" element={<Home/>}/>
    //     {/* <Route exact path="/Navbar" element={<Navbar/>}/> */}

    //     {/* <Route exact path="/Home" element={<Home/>}/>
    //     <Route exact path="/About" element={<About/>}/>
    //     <Route exact path="/Mission" element={<Mission/>}/>
    //     <Route exact path="/Gallery" element={<Gallery/>}/>
    //     <Route exact path="/Collabrations" element={<Collabrations/>}/>
    //     <Route exact path="/Accomplishments" element={<Accomplishments/>}/>   */}
    // </Routes>
    // </BrowserRouter>
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
