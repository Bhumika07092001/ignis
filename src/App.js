import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import BrowseEvents from './components/BrowseEvents';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route exact path="/login" element={<LoginForm/>} />
          <Route exact path="/signup" element={<SignUpForm/>}/>
          <Route exact path="/" element={<BrowseEvents/>} /> 
          <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
