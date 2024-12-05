// import React from 'react';
import '../../public/css/about.css';
import jsonData from '../data/buildings.json';
import ProjectComponent from '../components/ProjectComponent.jsx';




const About = () => {
  return (
    <div className='about'>

      <div>
        {/* <h2>What Makes Us Unique</h2> */}
        <div className='bio_content'>
          <div className='overview'>
            <h3>Who We Are</h3>
            <p className='about_us_paragraph'>TBRAC LLC, founded in January 2019, is a distinguished firm specializing in Mechanical Engineering (MEP) services. With a focus on providing high-quality and innovative solutions, TBRAC LLC delivers comprehensive services across various stages of construction projects, from planning to execution. Our expertise encompasses a wide range of services including:</p>
            <ul>
              <li>Mechanical Engineering</li>
              <li>Construction Planning</li>
              <li>Cloud Point Scanning</li>
              <li>Field Survey</li>
              <li>Revit BIM Project Coordination (MEP)</li>
            </ul>
          </div>
          
          <div className='strengths'>
            <h3>Our Core Strengths</h3>
            <div className='strengths_display'> 
              <div>
                <h4>Mechanical Engineering (MEP)</h4>
                <p>Extensive experience in designing and implementing HVAC systems, plumbing systems, and process piping. Our MEP solutions are tailored to meet project requirements and ensure system efficiency</p>
              </div> 
              <div>
                <h4>Construction Planning</h4>
                <p>Expertise in developing detailed construction plans that align with project objectives, timelines, and budgets. Our approach optimizes project workflows to enhance efficiency and reduce potential delays</p>
              </div>
              <div>
                <h4>Cloud Point Scanning</h4>
                <p>Utilization of cloud point scanning technology for accurate field measurements. This technology provides highly detailed 3D data of existing conditions, crucial for accurate design and renovation work</p>
              </div>
              <div>
                <h4>Field Survey</h4>
                <p>Advanced field survey services to capture precise site conditions and inform project design. We employ state-of-the-art technology to ensure accurate measurements and comprehensive data collection</p>
              </div>
              <div>
                <h4>Revit BIM Project Coordination</h4>
                <p>Utilization of Revit BIM technology for effective project coordination, integrating mechanical, electrical, and plumbing systems into a cohesive model. This approach enhances collaboration, reduces conflicts, and improves project efficiency</p>
              </div>
              <div>
                <h4> BIM Coordinate Management</h4>
                <p> Expert management of BIM coordination to ensure seamless integration of all building systems. Our process facilitates collaboration among different disciplines and optimizes overall project design</p>          
              </div>
            </div>
          </div>

          <div className='experience'>
            <h3>Experience and Expertise</h3>
            <p>With over 30 years of professional experience in architecture and mechanical MEP design/layout, and more than 20 years of expertise in 3D/BIM modeling using the latest 3D CAD software, TBRAC LLC brings a wealth of knowledge to every project. Our work is developed entirely within a 3D virtual environment to ensure accuracy and adherence to state and local code compliance, project specifications, and manufacturer&apos;s equipment installation guidelines.</p>
          </div>

          <div className='commitment'>
            <h3>Commitment to Excellence</h3>
            <p>TBRAC LLC is dedicated to maintaining the highest standards of professionalism and integrity. Our team’s expertise, combined with our innovative approach and commitment to client satisfaction, positions us as a trusted partner in the construction industry.</p>
          </div>
        </div>


      </div>

      <h2>Notable Projects</h2>
      <div className='projects_overview_about'>
         <ProjectComponent p={jsonData.waldorf}/>
         <ProjectComponent p={jsonData.macys}/>
      </div>





    </div>
  )
}

export default About;