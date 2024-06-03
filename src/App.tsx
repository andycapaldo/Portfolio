import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
