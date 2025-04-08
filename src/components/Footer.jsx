import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Left Section - Company Info */}
        <div style={styles.section}>
          <h2 style={styles.title}>H2Vis Incubator</h2>
          <p style={styles.description}>
            Empowering startups with mentorship, resources, and networking to
            accelerate growth and innovation.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.subtitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li><a href="/" style={styles.link}>About Us</a></li>

<li><Link to="/mentorapplication" style={styles.link}>Mentors</Link></li>
<li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.subtitle}>Contact Us</h3>
          <p style={styles.contact}><FaMapMarkerAlt /> 203 NDM 2 Building Netaji Subhash Place Pitampura,Delhi-110034</p>
          <p style={styles.contact}><FaPhone /> +91 9911844555</p>
          <p style={styles.contact}><FaEnvelope /> hvisincubator@gmail.com</p>
        </div>

      </div>

      {/* Copyright Line */}
      <p style={styles.copyright}>&copy; 2025 Virtual Incubator. All rights reserved.</p>

      {/* Social Icons Centered Below Copyright */}
      <div style={styles.socialIconsContainer}>
        {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaFacebookF /></a> */}
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaTwitter /></a> */}
        <a href="https://www.instagram.com/h2vis_solution/?hl=en" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/-harshitmittal/" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    backgroundColor: "#222",
    color: "white",
    padding: "40px 20px",
    textAlign: "left",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  section: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "white",
    textAlign: "left",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#bbb",
    marginBottom: "15px",
  },
  linkList: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "14px",
    display: "block",
    marginBottom: "5px",
    transition: "color 0.3s",
  },
  contact: {
    fontSize: "14px",
    color: "#bbb",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
  },
  copyright: {
    textAlign: "center",
    fontSize: "14px",
    color: "#aaa",
    marginTop: "20px",
  },
  socialIconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  icon: {
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "#444",
    transition: "background 0.3s",
  },
};

export default Footer;
