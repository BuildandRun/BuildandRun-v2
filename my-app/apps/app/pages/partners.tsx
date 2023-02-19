import React from 'react';
import Image from "next/image";
import HDBRlogo from "../public/img/favicon/fav128.png";
import nftsociale from "../public/img/logo/nftsociale.png";
import smmfollowers from "../public/img/logo/smmfollowers.png";
import Facebook from "../public/img/footer/logo-facebook.svg";
import Twitter from "../public/img/footer/logo-twitter.svg";
import Instagram from "../public/img/footer/logo-instagram.svg";
import Linkedin from "../public/img/footer/logo-linkedin.svg";
import Youtube from "../public/img/footer/logo-youtube.svg";

const Partnership: React.FC = () => {
 
  return (
    <div className="partnership-page">
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
          <div className="HDBRtitle" >
            <h1>Build and Run</h1>
            <h6 id="HDBRtitle">V.2.0.2</h6>
          </div>
      </div>
        <div className='partner-box'>
            <div className="card">
                <div className="card-details">
                <div id="partner-logo" className="partner-logo">
                <Image src={nftsociale} alt="nftsociale"/>
                </div>
                <p className="text-title">Web 3.0</p>
                <p className="text-body">Wᴇ Bᴜɪʟᴅ Wᴇʙ3 Pʀᴏᴅᴜᴄᴛs.</p>
                </div>
                <a href="https://news.nftsociale.net/" target="_blank"><button className="card-button">View site</button></a>
            </div>
            <div className='divider'></div>
            <div className="card">
                <div className="card-details">
                    <div id="partner-logo" className="partner-logo">
                <Image src={smmfollowers} alt="smmfollowers"/>
                    </div>
                <p className="text-title">Marketing</p>
                <p className="text-body">Bᴇsᴛ SMM Fᴏʟʟᴏᴡᴇʀs Sᴇʀᴠɪᴄᴇ.</p>
                </div>
                <a href="https://smmfollowers.com/" target="_blank"><button className="card-button">View site</button></a>
            </div>
        </div>
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
          <ul className="social-icon">
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/brstore.us/" target="_blank">
            <div className="social-bar">
            <Image src={Facebook} alt="Facebook" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.twitter.com/brstore_us" target="_blank">
            <div className="social-bar">
            <Image src={Twitter} alt="Twitter" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/bdrstoreus/" target="_blank">
            <div className="social-bar">
            <Image src={Instagram} alt="Instagram" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/company/bandr/" target="_blank">
            <div className="social-bar">
            <Image src={Linkedin} alt="Linkedin" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.youtube.com/@buildandrun." target="_blank">
            <div className="social-bar">
            <Image src={Youtube} alt="Youtube" />
            </div>
            </a></li>
          </ul>
          <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="https://brstore.us/" target="_blank">Homepage</a></li>
            <li className="menu__item"><a className="menu__link" href="./company" target="_blank">Company</a></li>
            <li className="menu__item"><a className="menu__link" href="https://www.dmca.com/compliance/brstore.us" target="_blank">DMCA.com</a></li>

          </ul>
          <p>&copy;2023 B&R | All Rights Reserved</p>
        </footer>
    </div>
  );
};

export default Partnership;





