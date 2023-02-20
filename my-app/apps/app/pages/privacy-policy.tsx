import React from 'react';
import Image from "next/image";
import HDBRlogo from "../public/img/favicon/fav128.png";
import Facebook from "../public/img/footer/logo-facebook.svg";
import Twitter from "../public/img/footer/logo-twitter.svg";
import Instagram from "../public/img/footer/logo-instagram.svg";
import Linkedin from "../public/img/footer/logo-linkedin.svg";
import Youtube from "../public/img/footer/logo-youtube.svg";


export default function company() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
          
          <div className="HDBRlogo" id="HDBRlogo">
          <Image src={HDBRlogo} alt="HDBRlogo" />
          </div>
          <div className="HDBRtitle" id="titlehero" >
            <h1>Build and Run</h1>
            <h6 id="HDBRtitle">Privacy Policy</h6>
          </div>
      </div>
      <div>
        <div className="company-text" id="company-text-1">
          <p>
          Your privacy is important to us (but you already knew that). It’s our policy to respect your privacy and comply with any applicable law and regulation regarding the personal information we collect about you through this website, Build and Run, and through any associated services and third-party platforms we may use.
          </p>
        </div>
        <div className="legal">
        <embed src="Privacy.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
      </div>
      <div >
      <p id="love">
          Build and Run v2.0.2 crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
        <footer className="footer">
       
          <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="./" target="_blank">Homepage</a></li>
            <li className="menu__item"><a className="menu__link" href="./partners" target="_blank">Partners</a></li>
            <li className="menu__item"><a className="menu__link" href="https://www.dmca.com/compliance/brstore.us" target="_blank">DMCA.com</a></li>
            <li className="menu__item"><a className="menu__link" href="./terms-of-service" target="_blank">Terms Of Service</a></li>

          </ul>
          <p>&copy;2023 B&R | All Rights Reserved</p>
        </footer>
      </div>
      

    </div>
  );
}

