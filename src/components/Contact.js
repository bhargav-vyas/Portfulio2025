// ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Replace these with your EmailJS values
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const USER_ID = "your_user_id_or_public_key";

    // The template parameters must match what you created in EmailJS
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      console.log("EmailJS response:", result);
      alert("Message sent! Check your email.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-card">
        <h2 className="text-glow">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="glow-btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
