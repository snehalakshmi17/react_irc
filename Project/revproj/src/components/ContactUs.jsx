// ContactUs.js

import React from 'react';
import '../assets/styles.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us using the information below:</p>

      <div className="contact-details">
        <p>Email: StaadLeest@toystore.com</p>
        <p>Phone: +91 (123) 456-7890</p>
        <p>Address: 123 Toy Street, Toyland</p>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
