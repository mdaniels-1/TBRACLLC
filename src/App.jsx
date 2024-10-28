import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LogoBar from './components/LogoBar';

function App() {

  return (
    <Router>
      <LogoBar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
{/*         <Route path="/contact" element={<Contact />}/> */}
      </Routes>
      <Footer />
      <ScrollToTop /> {/*see ScrollToTop.js for details */}

    </Router>
  )
}

export default App;
