import React from 'react'
import "./Components/Navbar/NavBar";
import "./App.css";
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cursor from './Components/CustomCursor/Cursor';
import Home from './Pages/Home/Home';
import { AccountBox } from './Pages/accountBox';
import NavBar from './Components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ParticleBackground from './Components/ParticleBack/ParticleBackground';


const AppContainer = styled.div`
  width: 100%;
  height: 90%;
  margin-top: -1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return <>
    
    <Router>
      <Routes>
          <Route exact path = "/" element = {<><Cursor/><Home/></>}/>
          <Route exact path = "/login" element = {<><NavBar/><Cursor/><AppContainer><AccountBox></AccountBox></AppContainer></>}/>
      </Routes>
    </Router>
  </>;
}

export default App
