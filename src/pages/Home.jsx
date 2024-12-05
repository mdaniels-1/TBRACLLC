import {Link } from "react-router-dom";
import '../../public/css/home.css';
import Certifications from '../components/Certifications';




const Home = () => {
  return (
    <div className='home'>
      <div className='title_container'>
        {/* <video className='bg_home_vid'  loop='true' autoPlay='true' muted>
          <source src='../../public/videos/sample.mp4' type="video/mp4"/>
        </video> */}

        <div className='title_overlay'>
          <p className='home_logo wallpoet_regular'>TBRAC LLC</p>
          <p className='mini_title'>Planning for Today, Tomorrow—Where Vision and Precision Converge  </p>
        </div>
      </div>
      {/* <hr/> */}

      <div className='mission_container'>
        <h2>Our Mission</h2>
        <p>At TBRAC LLC, we redefine excellence in architectural and engineering services by integrating fabrication detailing into each design approach. It empowers us to bridge the gap between conceptual ideas and real-world application, delivering innovative solutions with unmatched precision and efficiency. Guided by decades of experience and powered by cutting-edge technology, we transform ambitious ideas into extraordinary realities.</p>
      </div>

      <div className='cert_div'>
        <Certifications />
      </div>

      <div className='chat_container'>
        <h2>Let&apos;s Chat</h2>
        <p>We&apos;re always looking for new opportunities. Please reach out to one of our employees to begin the consultation process.</p>
        <Link to="/contact">
          <button onClick=''>Contact Us</button>
        </Link>

      </div>


    </div>
  )
}

export default Home;
