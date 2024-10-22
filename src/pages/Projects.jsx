// import React from 'react';
import DisplayProjectsComponent from '../components/DisplayProjectsComponent.jsx'
import jsonData from '../data/buildings.json';

const About = () => {
  return (

    <div className='projects_overview_home'>
         <h2>Projects</h2>
         <DisplayProjectsComponent json={jsonData} numProjects={''}/>

      </div>
  )
}

export default About