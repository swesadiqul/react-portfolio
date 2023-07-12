import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import CSS from '../src/App.css'
import Slider from './component/Slider';
import About from './component/About';
import Resume from './component/Resume';
import Services from './component/Services';
import Skills from './component/Skills';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App
