import React from 'react';
import Image from "next/image";
import Facebook from "/public/img/footer/logo-facebook.svg";
import Twitter from "/public/img/footer/logo-twitter.svg";
import Instagram from "/public/img/footer/logo-instagram.svg";
import Linkedin from "/public/img/footer/logo-linkedin.svg";
import Youtube from "/public/img/footer/logo-youtube.svg";

import confetti from "/public/website/submission/confetti.png";


// import  from "../public/img/tweak-apps/cryptocurrencies/.png";



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

        <div className="confetti" id="confetti">
          <Image src={confetti} alt="confetti" />
        </div>
        <div className="thankyou" >
          <h1>Thank You!</h1>
          <h6 id="br-thankyou">B&R</h6>
        </div>
      </div>
      <div className="company-text" id="company-text-1">
        <p>
          Your payment was successful.
        </p>
        <br></br>
        <div className="blank-form-father">
          <form className="blank-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="from_name" value="B&R | Confirmation ✅"></input>
          <input type="hidden" name="replyto" value="support@brstore.us"></input>
          <input type="hidden" name="subject" value="Congrats, Allow up to 24 hours for your website to be running. 🎉"></input>
            <span className="blank-title">Follow These Steps:</span>
            <span className="blank-sub mb">1. Verify if your domain name is available by visiting <a href="https://www.name.com/domain/search/brstore.us" target="_blank">Name.com</a></span>
            <span className="blank-sub mb">2. Choose your domain extension before registering your domain name.</span>
            <span className="blank-sub mb">3. Please enter your domain name and confirm your email address.</span>
            <input id="blank-file" type="file"></input>
            <input type="hidden" name="access_key" value="d9e56840-a70c-492f-ba4c-db537e07d1de"></input>
            <label className="blank-avatar"><span> <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="blank-SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="blank-SVGRepo_iconCarrier"> <path fill="#ffffff" d="M17.1813 16.3254L15.3771 14.5213C16.5036 13.5082 17.379 12.9869 18.2001 12.8846C19.0101 12.7837 19.8249 13.0848 20.8482 13.8687C20.8935 13.9034 20.947 13.9202 21 13.9202V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V13.7522C3.06398 13.7522 3.12796 13.7278 3.17678 13.679L4.45336 12.4024C5.31928 11.5365 6.04969 10.8993 6.71002 10.4791C7.3679 10.0605 7.94297 9.86572 8.50225 9.86572C9.06154 9.86572 9.6366 10.0605 10.2945 10.4791C10.9548 10.8993 11.6852 11.5365 12.5511 12.4024L16.8277 16.679C16.9254 16.7766 17.0836 16.7766 17.1813 16.679C17.2789 16.5813 17.2789 16.423 17.1813 16.3254Z" opacity="0.1"></path> <path stroke-width="2" stroke="#ffffff" d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"></path> <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022"></path> <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M21.0002 13.6702C18.907 12.0667 17.478 12.2919 15.1982 14.3459"></path> <path stroke-width="2" stroke="#ffffff" d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"></path> </g></svg></span></label>
            <select name="extension" id="extension" className="blank-input" required>
              <option value=".COM">.COM</option>
              <option value=".EU">.EU</option>
              <option value=".NET">.NET</option>
              <option value=".ORG">.ORG</option>
              <option value=".US">.US</option>
              <option value=".FR">.FR</option>
              <option value=".INFO">.INFO</option>
              <option value=".BE">.BE</option>
              <option value=".DE">.DE</option>
              <option value=".ME">.ME</option>
              <option value=".BIZ">.BIZ</option>
              <option value=".PRO">.PRO</option>
              <option value=".NAME">.NAME</option>
              <option value=".IT">.IT</option>
              <option value=".PW">.PW</option>
              <option value=".XYZ">.XYZ</option>
            </select>
            <div className="blank-box-title">Domain Name*</div>
            <input type="text" className="blank-input" placeholder="www.example.com" name="domain name" required></input>
            <div className="blank-box-title">Email*</div>
            <input type="email" className="blank-input" placeholder="email@example.com" name="email" required></input>
            <div className="blank-box-title">Name*</div>
            <input type="name" className="blank-input" placeholder="kelvin" name="name" required></input>
            <div className="blank-checkbox">
              <input type="checkbox" id="blank-checkbox" name="agreement" value="checkbox" required/>
              <label >Mᴀᴋᴇ sᴜʀᴇ ᴛʜᴀᴛ ʏᴏᴜ ᴀʀᴇ sᴀᴛɪsғɪᴇᴅ ᴡɪᴛʜ ʏᴏᴜʀ ᴅᴏᴍᴀɪɴ ɴᴀᴍᴇ. (Yᴏᴜ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ᴀʟʟᴏᴡᴇᴅ ᴛᴏ ᴍᴀᴋᴇ ᴀɴʏ ᴄʜᴀɴɢᴇs). Cʜᴇᴄᴋ ᴛʜᴇ ʙᴏx ɪғ ʏᴏᴜʀ ᴅᴏᴍᴀɪɴ ɴᴀᴍᴇ ɪs ᴄᴏʀʀᴇᴄᴛ. *</label>
            </div>
            <input type="hidden" name="redirect" value="https://brstore.us/pricing/skB55L5WOPPK/success/index.html"></input>
            <button type="submit">Submit</button>
          </form>
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
              <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/company/bandr/" target="_blank">
                <div className="social-bar2">
                  <Image src={Linkedin} alt="Linkedin" />
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

