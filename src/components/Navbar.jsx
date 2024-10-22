import { NavLink } from 'react-router-dom'
import '../components/styles/Navbar.css'

//Styling has tailwindcss stuff needs to be altered to base css
const Navbar = () => {
  return (
    <div className='nav_container'>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>

  )
}

export default Navbar;