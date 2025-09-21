import React from "react";
import { Container } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For the new X (Twitter) logo
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
            <a
              href="https://www.linkedin.com/in/bhargav-vyas-985682321/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://x.com/Bhargav29227044?t=7fIapmkOF_bLvrJPJUOh4Q&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter /> X
            </a>
            <a
              href="https://www.instagram.com/bhargav_162004/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://github.com/bhargav-vyas"
              target="_blank"
              rel="noopener noreferrer"
            >
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
