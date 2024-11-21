import '../components/styles/LogoBar.css'

//Styling has tailwindcss stuff needs to be altered to base css
const LogoBar = () => {
    return (
        <div className='top_container'>
            <img className='bg' src={'./images/linkedin_bg.jpeg'} alt={''}/>
            {/* <img className='logo' src={'./images/logo.jpeg'} alt={'Logo'}/> */}
            <p className='logo wallpoet_regular'>TBRAC LLC</p>

        </div>

  )
}

export default LogoBar;
