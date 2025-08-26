import './styles/Certifications.css'
const Certifications = () => {
    return(
        <div className="certifications">
            <h2>Company Certifications</h2>
            <h3>TBRAC LLC is a proud holder of the following certifications:</h3>
            
            <div className='certs_container'>
                <div className='cert'>
                    <div className='flex-col space-y-4'>
                        <p className='text-5xl font-extrabold'>SBE</p>
                        <p>Small Business Enterprise | NJ</p>
                    </div>
                </div>
                <div className='cert'>
                    <div className='flex-col space-y-4'>
                        <p className='text-5xl font-extrabold'>SDB</p>
                        <p>Small Disadvantaged Business | SAM</p>
                    </div>
                </div>
                <div className='cert'>
                    <div className='flex-col space-y-4'>
                        <p className='text-5xl font-extrabold'>DBE</p>
                        <p>Disadvantaged Business Enterprise | NJDOT</p>
                    </div>
                </div>
            </div>
        </div>
    );    
}


export default Certifications;