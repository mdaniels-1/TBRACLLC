import './Contact.css';

import { useState } from 'react';


export default function Contact() {
  const [loading, setLoading] = useState(true);  
  return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl p-8 space-y-4">
          <h2 className="text-5xl font-extrabold text-center">Contact Us</h2>
          <p className="text-center text-lg">
            Need to reach us? Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <div className="form-container">
            {loading && <div className="loader"></div>}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeuko5r0FIhi7L6qYKhwM6XFwJfnuVySHBrwb6xI8oy6ttgCg/viewform?embedded=true"
              width="100%"
              height="1000"
              onLoad={() => setLoading(false)}
              style={{ border: 'none' }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
}