import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Hero />
      </div>
    </>
  );
}

export default App;
