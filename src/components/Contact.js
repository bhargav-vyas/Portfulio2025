import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <section id="contact">
      <div className="contact-card">
        <h2 className="text-glow">Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="form-control"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="submit" className="glow-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
