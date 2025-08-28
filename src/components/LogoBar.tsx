import Image from 'next/image';
import '../components/styles/LogoBar.css'

//Styling has tailwindcss stuff needs to be altered to base css
const LogoBar = () => {
    return (
        <div className='top_container'>
            <Image className='bg' src={'/images/linkedin_bg.jpeg'} alt={''} width={1000} height={200}/>
            {/* <img className='logo' src={'./images/logo.jpeg'} alt={'Logo'}/> */}
        </div>

  )
}

export default LogoBar;
