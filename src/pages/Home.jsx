// import React from 'react';
import BuildingIcon from '../components/BuildingIcon.jsx';
import '../../public/home.css';




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

    </div>
  )
}

export default Home;