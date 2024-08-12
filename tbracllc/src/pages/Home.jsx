import React from 'react';
import ProjectComponent from '../components/ProjectComponent.jsx';
import DisplayProjectsComponent from '../components/DisplayProjectsComponent.jsx'
import BuildingIcon from '../components/BuildingIcon.jsx';
import '../../public/home.css';
import jsonData from '../data/buildings.json';




// parameters for dynamic three image display below
// const DynamicThreeImageDisplayParams = {
//   img1_src: 'https://th.bing.com/th/id/OIP.dozEvAlhTqQRy_QO0M9H8AHaE8?rs=1&pid=ImgDetMain',
//   img1_text: 'This is a description for image1',
//   img2_src: 'https://th.bing.com/th/id/OIP.dozEvAlhTqQRy_QO0M9H8AHaE8?rs=1&pid=ImgDetMain',
//   img2_text: 'This is a description for image2',
//   img3_src: 'https://th.bing.com/th/id/OIP.dozEvAlhTqQRy_QO0M9H8AHaE8?rs=1&pid=ImgDetMain',
//   img3_text: 'This is a description for image3'
// }


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

      <div className='projects_overview_home'>
         <p>hello</p>
         <DisplayProjectsComponent json={jsonData} numProjects={2}/>
      </div>

      {/* <ProjectComponent p={jsonData.domino} /> */}


      



      {/* <DynamicThreeImageDisplay {...DynamicThreeImageDisplayParams}/> */}

    </div>
  )
}

export default Home;