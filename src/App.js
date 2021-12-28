import './App.css';
import NavBar from './components/Navbar/NavBar';
import Splash from './components/splash/Splash';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Splash />
      <Reviews />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
