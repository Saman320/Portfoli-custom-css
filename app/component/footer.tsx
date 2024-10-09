import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import "../style/footer.css";  // Import the custom CSS

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-body">
        <div className="footer-content">
          <a className="footer-brand">
            <Image
              src="/assets/Picture/sa.png"
              alt="Please wait"
              width={100}
              height={100}
              className="footer-logo"
            />
            <span className="footer-title">SAMAN SIDDIQUI</span>
          </a>
          <p className="footer-copyright">
            © 2024 SAMAN SIDDIQUI
          </p>
          <span className="footer-icons">
            <Link
              target="_blank"
              href="https://www.facebook.com/saman.siddiqui.5682"
              className="icon-link"
            >
              <BsFacebook className="social-icon facebook" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/saman_siddiqui320/"
              className="icon-link"
            >
              <BsInstagram className="social-icon instagram" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/saman-siddiqui-0023b3292/"
              className="icon-link"
            >
              <BsLinkedin className="social-icon linkedin" />
            </Link>
            <Link
              target="_blank"
              href="http://www.youtube.com/@academicmentors"
              className="icon-link"
            >
              <BsYoutube className="social-icon youtube" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
