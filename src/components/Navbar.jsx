import { NavLink } from 'react-router-dom'
import '../components/styles/Navbar.css'

//Styling has tailwindcss stuff needs to be altered to base css
const Navbar = () => {
  return (
    <div className='nav_container'>
      <nav>
        <NavLink className='wallpoet_regular brand disabled' to="none">TBRAC LLC</NavLink> {/* temp fix */}
        <NavLink className='wallpoet_regular' to="/" >HOME</NavLink>
        <NavLink className='wallpoet_regular' to="/about" >ABOUT</NavLink>
        <NavLink className='wallpoet_regular' to="/projects">PROJECTS</NavLink>
        <NavLink className='wallpoet_regular' to="/contact">CONTACT US</NavLink>
      </nav>
    </div>

  )
}

export default Navbar;
