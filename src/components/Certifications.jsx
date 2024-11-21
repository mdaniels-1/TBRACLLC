import './styles/Certifications.css'
const Certifications = () =>{
    return(
        <div className="certifications">
            {/* <p>WHAT WE DO</p> */}
            <h2>Company Certifications</h2>
            <h3>TBRAC LLC is a proud holder of the following certifications:</h3>
            
            <div className='certs_container '>
                <div className='cert'>
                    <p className='cert_abbr'>SBE</p>
                    <p className='cert_desc'>Small Business Enterprise| NJ</p>
                </div>
                <div className='cert'>
                    <p className='cert_abbr'>MBE</p>
                    <p className='cert_desc'>Minority Business Enterprise | NJ </p>
                </div>
                <div className='cert'>
                    <p className='cert_abbr'>SDB</p>
                    <p className='cert_desc'>Small Disadvantaged Business | SAM</p>
                </div>
                <div className='cert'>
                    <p className='cert_abbr'>AABE</p>
                    <p className='cert_desc'>African American Business Enterprise | SAM</p>
                </div>
                <div className='cert'>
                    <p className='cert_abbr'>DBE</p>
                    <p className='cert_desc'>Disadvantaged Business Enterprise | NJDOT</p>
                </div>

            </div>

        </div>
    )



    
}


export default Certifications;