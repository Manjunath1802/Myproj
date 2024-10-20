import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Review from './Components/Review';
import Doctor from './Components/Doctor';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home />
     <Service />
     <About />
     <Review />
     <Doctor />
     <Footer />
    </div>
  );
}

export default App;
