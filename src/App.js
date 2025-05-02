import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section> 
        <section id="projects"><Projects /></section> 
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;