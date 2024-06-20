import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
