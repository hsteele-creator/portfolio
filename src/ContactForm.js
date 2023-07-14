import React from "react";
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <>
      <div id="contact-container">
        <h1>Contact Me</h1>
        <form
          action="https://formsubmit.co/harrybsteele@gmail.com"
          method="POST"
        >
          <input placeholder="name" type="text" name="name" required />
          <input placeholder="email" type="email" name="email" required />
          <textarea placeholder="message" type="textarea" name="message" rows="5" cols="40" required />
          <button id="submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
