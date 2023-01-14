import './App.css';
import Footer from './components/Footer';
// import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <main className='container'>
        <div className="App">
          <div className='main'>
            <Menu />
            {/* <Main /> */}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
