import "./Footer.css";
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>Funngro</h2>

          <p>
            Connecting brands with India's largest verified
            youth community through authentic engagement.
          </p>

          <div className="socials">
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
            <FaTwitter />
          </div>

        </div>

        <div className="footer-links">

          <div>
            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Industries</a>
          </div>

          <div>
            <h4>Resources</h4>

            <a href="#">Blogs</a>
            <a href="#">FAQs</a>
            <a href="#">Support</a>
          </div>

          <div>
            <h4>Contact</h4>

            <a href="#">hello@funngro.com</a>
            <a href="#">+91 98765 43210</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Funngro. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;