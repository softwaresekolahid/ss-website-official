import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Orientation from './components/Orientation';
import Features from './components/Features';
import Footer from './components/Footer';
import Advantage from './components/Advantage';

function App() {

  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Orientation/>
      <Features/>
      <Advantage/>
      <Footer/>
    </div>
  );
  
}
export default App
