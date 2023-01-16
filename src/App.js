import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
// import Main from './components/Main';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import SiteHead from './components/SiteHead';

function App() {
  return (
    <>
      <main className='container'>
        <div className="App">
          <div className='menu'>
            <Menu />
            {/* <Main /> */}
          </div>
          <div className='siteHead'>
            <SiteHead />
          </div>
          <Features />
          <Services />
          <Portfolio />

          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
