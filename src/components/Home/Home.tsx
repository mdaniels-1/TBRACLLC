
import './Home.css'
import Certifications from '@/components/Certifications';


interface HomeProps {
  setTab: (tabName: string) => void;
}

export default function Home({
  setTab
}: HomeProps) {
  return (
    <div className='home'>
      <div className='title_container'>
        <div className='title_overlay'>
          <p className='home_logo'>TBRAC LLC</p>
          <p className='mini_title'>Planning for Today, Tomorrow—Where Vision and Precision Converge</p>
        </div>
      </div>

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
        <button className='contact_button' onClick={() => setTab('contact')}>Contact Us</button>
      </div>
    </div>
  )
}

