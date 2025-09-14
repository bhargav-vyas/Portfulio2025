import React from "react";
import { Container } from "react-bootstrap";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer text-white py-4">
      <Container>
        {/* Top: Portfolio Text */}
        <div className="footer-center-top">
          <p>
            © 2025 <span>My Portfolio</span> | Designed by <strong>Bhargav Vyas</strong>
          </p>
        </div>

        {/* Bottom: Links Row */}
        <div className="footer-row">
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope /> Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
