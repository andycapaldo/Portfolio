import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Hero />
        <Skills />
      </div>
    </>
  );
}

export default App;
