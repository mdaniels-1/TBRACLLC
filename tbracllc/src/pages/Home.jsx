// import React from 'react';
import DisplayProjectsComponent from '../components/DisplayProjectsComponent.jsx'
import BuildingIcon from '../components/BuildingIcon.jsx';
import '../../public/home.css';
import jsonData from '../data/buildings.json';
import {Link} from 'react-router-dom';
import ProjectComponent from '../components/ProjectComponent.jsx';




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
          <p> need to adjust icon or the text so it&apos;s centered. have to check that</p>
          <p className='mini_title'>Insert mini intro here. like &apos;architecture, hvac, blah, and blah.&apos;</p>
        </div>
      </div>

      <div>
        <h2>About Us</h2>
        <div className='bio_content'>
          <h3>Company Overview</h3>
          <p className='about_us_paragraph'>TBRAC LLC, founded in January 2019, is a distinguished firm specializing in Mechanical Engineering (MEP) services. With a focus on providing high-quality and innovative solutions, TBRAC LLC delivers comprehensive services across various stages of construction projects, from planning to execution. Our expertise encompasses a wide range of services including Mechanical Engineering, Construction Planning, Field Survey, Revit BIM Project Coordination and Management, and Cloud Point Scanning.</p>
          
          <h3>Core Strengths</h3>
          <ol> 
            <li><b>Mechanical Engineering (MEP):</b> Extensive experience in designing and implementing HVAC systems, plumbing systems, and process piping. Our MEP solutions are tailored to meet project requirements and ensure system efficiency.</li>
            <li><b>Construction Planning:</b> Expertise in developing detailed construction plans that align with project objectives, timelines, and budgets. Our approach optimizes project workflows to enhance efficiency and reduce potential delays.</li>
            <li><b>Cloud Point Scanning:</b> Utilization of cloud point scanning technology for accurate field measurements. This technology provides highly detailed 3D data of existing conditions, crucial for accurate design and renovation work.</li>
            <li><b>Field Survey:</b> Advanced field survey services to capture precise site conditions and inform project design. We employ state-of-the-art technology to ensure accurate measurements and comprehensive data collection.</li>
            <li><b>Revit BIM Project Coordination (MEP):</b> Utilization of Revit BIM technology for effective project coordination, integrating mechanical, electrical, and plumbing systems into a cohesive model. This approach enhances collaboration, reduces conflicts, and improves project efficiency.</li>
            <li><b>BIM Coordinate Management:</b> Expert management of BIM coordination to ensure seamless integration of all building systems. Our process facilitates collaboration among different disciplines and optimizes overall project design.</li>          </ol>
        
          <h3>Experience and Expertise</h3>
          <p>With over 30 years of professional experience in architecture and mechanical MEP design/layout, and more than 20 years of expertise in 3D/BIM modeling using the latest 3D CAD software, TBRAC LLC brings a wealth of knowledge to every project. Our work is developed entirely within a 3D virtual environment to ensure accuracy and adherence to state and local code compliance, project specifications, and manufacturer&apos;s equipment installation guidelines.</p>

        </div>


      </div>

      <div className='projects_overview_home'>
         <h2>Notable Projects</h2>
         <ProjectComponent p={jsonData.waldorf}/>
         <ProjectComponent p={jsonData.macys}/>

         <Link className='see_projects_button' to='/projects'>
            <button>View All Projects</button>
         </Link>
      </div>





    </div>
  )
}

export default Home;