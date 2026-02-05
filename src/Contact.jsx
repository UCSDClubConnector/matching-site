import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Contact the Team!</p>
      
      <form className="contact-form">
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="your.email@ucsd.edu" />
        </div>
        <div>
          <label>Message:</label>
          <textarea placeholder="Your message" rows="5"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact