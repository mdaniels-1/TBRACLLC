// import React from 'react';
import '../../public/css/home.css';




const Home = () => {
  return (
    <div className='home'>
      <div className='title_container'>
        {/* <video className='bg_home_vid'  loop='true' autoPlay='true' muted>
          <source src='../../public/videos/sample.mp4' type="video/mp4"/>
        </video> */}

        <div className='title_overlay'>
          {/* <img className='home_logo wallpoet_regular' src='./images/logo.jpeg' alt={'TBRAC LLC Logo'} /> */}
          <p className='home_logo wallpoet_regular'>Tbracllc </p>

          <p className='mini_title'>At TBRAC LLC, our mission is to deliver exceptional engineering and construction services by leveraging our extensive experience, innovative technologies, and commitment to quality. We strive to exceed client expectations and contribute to the successful completion of every project through meticulous planning, precise execution, and continuous collaboration.</p>
        </div>
      </div>

    </div>
  )
}

export default Home;
