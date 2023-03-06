import React from 'react';
import Image from "next/image";
import HDBRlogo from "../public/img/favicon/fav128.png";
import Facebook from "../public/img/footer/logo-facebook.svg";
import Twitter from "../public/img/footer/logo-twitter.svg";
import Instagram from "../public/img/footer/logo-instagram.svg";
import Discord from "../public/img/footer/discord.svg";
import Youtube from "../public/img/footer/logo-youtube.svg";
import Crunchbase from "../public/img/footer/crunchbase.svg";
import Stackshare from "../public/img/footer/stackshare.svg";
import AngelList from "../public/img/footer/angellist-rounded.svg";
import Github from "../public/img/footer/github-square.svg";


export default function company() {
  return (
    // <Layout title="Hello" description="Hello React Page">
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
          <div className="HDBRtitle" >
            <h1>Build and Run</h1>
            <h6 id="HDBRtitle">V.2.0.2</h6>
          </div>
      </div>
      <div className="company-text" id="company-text-1">
      <p>
      <strong>Build and Run</strong> is a technology company that provides a diverse range of services to help clients build and run their online presence with ease. Our company specializes in website and application development, hosting, design and art, social media marketing, news, and other technical support. With such a wide range of services on offer, <strong>Build and Run</strong>  is a one-stop shop for all your technology needs.
      </p>
      <br></br>
      <p>
      Whether you are looking to create a new website from scratch or improve your existing online presence, <strong>Build and Run</strong>  has the expertise and resources to help you succeed. Our company's team of experienced professionals takes a comprehensive approach to each project, working with clients to understand their unique needs and creating customized solutions that meet those needs effectively.
      </p>
      <br></br>
      <p>
      <strong>Build and Run</strong> understands that every client is different and requires tailored solutions to succeed online. That's why Our company places great emphasis on customer satisfaction, taking the time to understand each client's needs and goals, and working tirelessly to exceed their expectations. Whether you're a small business owner or a large corporation, <strong>Build and Run</strong>  has the resources and expertise to help you achieve your online goals.
      </p>
      <br></br>
      <p>
      Our company website and application development services are among its most popular offerings. The <strong>Build and Run</strong>  team uses the latest tools and technologies to create fast, responsive, and visually appealing websites and applications. Our company's design and art services are also popular, as clients appreciate the team's ability to create eye-catching and effective designs that resonate with their target audience.
      </p>
      <br></br>
      <p>
      In addition to its web development and design services, <strong>Build and Run</strong>  also offers social media marketing, news, and other technical support. Our company's social media marketing services help clients to expand their online presence, connect with their target audience, and increase their reach. Our company's news services keep clients informed about the latest industry trends and developments, ensuring that they are always up-to-date and ready to take advantage of new opportunities.
      </p>
      <br></br>
      <p>
      In summary, <strong>Build and Run</strong>  is a technology company that offers a comprehensive range of services to help clients build and run their online presence with ease. With its commitment to customer satisfaction, attention to detail, and expertise in web development, design, social media marketing, and more, <strong>Build and Run</strong> is the perfect partner for anyone looking to succeed online. 
      </p>

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
         {/* SECOND SECTION  */}
        <div className="divider2" id="divider-come-closer">
        <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.crunchbase.com/organization/brstoreus" target="_blank">
            <div className="social-bar2">
            <Image src={Crunchbase} alt="Crunchbase" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://stackshare.io/build-and-run/build-and-run" target="_blank">
            <div className="social-bar2">
            <Image src={Stackshare} alt="Stackshare" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://angel.co/company/bandr" target="_blank">
            <div className="social-bar2">
            <Image src={AngelList} alt="AngelList" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/BuildandRun" target="_blank">
            <div className="social-bar2">
            <Image src={Github} alt="Github" />
            </div>
            </a></li>
            </ul>
        </div>
        {/* SECOND SECTION  */}
        {/* FIRST SECTION  */}
        <div className="divider2">
        <footer className="footer">
          <ul className="social-icon">
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/brstore.us/" target="_blank">
            <div className="social-bar2">
            <Image src={Facebook} alt="Facebook" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.twitter.com/brstore_us" target="_blank">
            <div className="social-bar2">
            <Image src={Twitter} alt="Twitter" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/bdrstoreus/" target="_blank">
            <div className="social-bar2">
            <Image src={Instagram} alt="Instagram" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://discord.gg/HVB2XNFtCQ" target="_blank">
            <div className="social-bar2">
            <Image src={Discord} alt="Discord" />
            </div>
            </a></li>
            <li className="social-icon__item"><a className="social-icon__link" href="https://www.youtube.com/@buildandrun." target="_blank">
            <div className="social-bar2">
            <Image src={Youtube} alt="Youtube" />
            </div>
            </a></li>
          </ul>
          <div>
          <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="./" target="_blank">Homepage</a></li>
            <li className="menu__item"><a className="menu__link" href="./partners" target="_blank">Partners</a></li>
            <li className="menu__item"><a className="menu__link" href="https://www.dmca.com/compliance/brstore.us" target="_blank">DMCA.com</a></li>
            <li className="menu__item"><a className="menu__link" href="https://github.com/BuildandRun/BuildandRun-v1.0.1#readme" target="_blank">V.1.0.1</a></li>
            <li className="menu__item"><a className="menu__link" href="./privacy-policy" target="_blank">Privacy Policy</a></li>
            <li className="menu__item"><a className="menu__link" href="./terms-of-service" target="_blank">Terms Of Service</a></li>

          </ul>
          <p>&copy;2023 B&R | All Rights Reserved</p>
          </div>
        </footer>
        </div>
      </div>
      

    </div>
  );
}

