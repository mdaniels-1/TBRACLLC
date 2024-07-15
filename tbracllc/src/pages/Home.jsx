import React from 'react';
import DynamicThreeImageDisplay from '../components/DynamicThreeImageDisplay.jsx';
import '../../public/home.css';
import '../components/styles/DynamicThreeImageDisplay.css';


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
        <video className='bg_home_vid'  loop='true' autoPlay='true' muted>
          <source src='../../public/videos/sample.mp4' type="video/mp4"/>
        </video>
        <div className='title_overlay'>
          <h1 className='title'>TBRAC  LLC.</h1>
          <p className='mini_title'>Insert mini intro here. like 'architecture, hvac, blah, and blah.'</p>
        </div>
      </div>

      <div>
        <h1>3rd Think about site</h1>
        <p>The position: sticky property tells the browser to let an element scroll with the rest of the document until it reaches the top of the page. Once it does, it should stick there and let the rest of the elements on the page scroll behind it</p>
      </div>

      <div>
        <h1>3rd Think about site</h1>
        <p>The position: sticky property tells the browser to let an element scroll with the rest of the document until it reaches the top of the page. Once it does, it should stick there and let the rest of the elements on the page scroll behind it</p>
      </div>

      <div>
        <h1>3rd Think about site</h1>
        <p>The position: sticky property tells the browser to let an element scroll with the rest of the document until it reaches the top of the page. Once it does, it should stick there and let the rest of the elements on the page scroll behind it</p>
      </div>


      {/* <DynamicThreeImageDisplay {...DynamicThreeImageDisplayParams}/> */}

    </div>
  )
}

export default Home;