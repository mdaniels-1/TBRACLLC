const Contact = () => {

  // async function submit(data){
  //   alert('you searched for ${data}');
  // }

  
  return (
    <div className="contact_us">
      
      <h2>Contact Us</h2>
      <p>Need to reach us? Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

      {/* google form */}
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSeuko5r0FIhi7L6qYKhwM6XFwJfnuVySHBrwb6xI8oy6ttgCg/viewform?embedded=true" 
        width="640" 
        height="1000" 
        // frameborder="0" 
        // marginheight="0" 
        // marginwidth="0"
        >Loading…
      </iframe>

      {/* <form action={submit}>
        <label>Name
        <input
          type='text'
          name='name'/>
        </label>

        <label>Company
        <input
          type='text'
          name='company'/>
        </label>      

        <label>Work Email
        <input
          type='Email'
          name='name'/>
        </label>

        <label>Work Phone Number
        <input
          type='text'
          name='name'/>
        </label>

      </form> */}

    </div>
  )
}

export default Contact