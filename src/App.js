import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Projects from './components/Projects';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className='smooth-scroll'>
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="call-to-action">
        <CallToAction />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
