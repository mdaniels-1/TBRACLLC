import React from 'react';
import DisplayProjectsComponent from '../components/DisplayProjectsComponent.jsx'
import BuildingIcon from '../components/BuildingIcon.jsx';
import '../../public/home.css';
import jsonData from '../data/buildings.json';
import {Link} from 'react-router-dom';




const Home = () => {
  return (
    <div className='home'>
      <div className='title_container'>
        {/* <video className='bg_home_vid'  loop='true' autoPlay='true' muted>
          <source src='../../public/videos/sample.mp4' type="video/mp4"/>
        </video> */}
        
        <div className='icon'>
          <BuildingIcon />
        </div>

        <div className='title_overlay'>
          <h1 className='title'>TBRAC LLC.</h1>
          <p> need to adjust icon or the text so it's centered. have to check that</p>
          <p className='mini_title'>Insert mini intro here. like 'architecture, hvac, blah, and blah.'</p>
        </div>
      </div>

      <div className='bio_container'>
        <h2>About Us</h2>
        TBRAC LLC is a ____ company, owned and operated by Timothy Daniels. Founded in ___, TBRAC LLC has grown to become ____


        <h3>Who is Timothy Daniels? | A Brief Interview</h3>

        <h4>What inspired you to start this company?</h4>
        
        <h4>What are your qualifications or expertise?</h4>

        <h4>What is your approach or philosophy?</h4>

        <h4>What do you enjoy most about your work?</h4>

        <h4>How can clients get in touch with you?</h4>

      </div>

      <div className='projects_overview_home'>
         <h2>Projects</h2>
         <DisplayProjectsComponent json={jsonData} numProjects={2}/>
         
         <Link className='see_projects_button' to='/projects'>
            <button>View All Projects</button>
         </Link>
      </div>





    </div>
  )
}

export default Home;