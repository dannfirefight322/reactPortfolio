/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route exact path ="/" component={Home} />
      <Route exact path ="/about" component={About} />
      <Route exact path ="/projects" component={Projects} />
      <Route exact path ="/certifications" component={Certifications} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
