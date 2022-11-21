import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Sun from './Sun.js'
import Navbar from './Navbar.js'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Router>
    <Routes>
      <Route path="/Sun" element={<Sun/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
