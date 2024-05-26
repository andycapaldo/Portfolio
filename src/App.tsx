import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
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
      </div>
    </>
  );
}

export default App;
