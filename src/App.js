import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
// import Main from './components/Main';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import SiteHead from './components/SiteHead';
import Scroll from 'react-scroll';
var Element = Scroll.Element;

function App() {
  return (
    <>
      <main className='container'>
        <div className="App">
          <div className='menu'>
            <Menu  />
          </div>
          <Element name="section0" >
            <SiteHead  />
          </Element>
          
          <Element name="section1" >
            <Features  />
          </Element>

          <Element name="section2" >
            <Services />
          </Element>
          
          <Element name="section3" >
            <Portfolio />
          </Element>
          
          <Element name="section4" >
            <Footer  />
          </Element>
          

        </div>
      </main>
    </>
  );
}

export default App;
