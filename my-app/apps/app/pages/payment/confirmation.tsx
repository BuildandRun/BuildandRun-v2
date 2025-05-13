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
          height: '30vh',
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
        <div className="blank-payment-successful">
        </div>
        <br></br>
        <div className="blank-form-father">
          <form className="blank-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="from_name" value="B&R | Confirmation ✅"></input>
          <input type="hidden" name="replyto" value="support@buildandrun.net"></input>
          <input type="hidden" name="subject" value="Congrats, Allow up to 24 hours for your website to be running. 🎉"></input>
          <p className="pay-success-title">Your payment was successful.</p>

            <span className="blank-title">Follow These Steps:</span>
            <span className="blank-sub mb">1. Verify if your domain name is available by visiting <a href="https://www.name.com/domain/search/buildandrun.net" target="_blank">Name.com</a></span>
            <span className="blank-sub mb">2. Choose your domain extension before registering your domain name.</span>
            <span className="blank-sub mb">3. Please enter your domain name and confirm your email address.</span>
            <input id="blank-file" type="file"></input>
            <input type="hidden" name="access_key" value="d9e56840-a70c-492f-ba4c-db537e07d1de"></input>
            <label className="blank-avatar">
              <span> 
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="32.00pt" height="26.0pt" viewBox="0 0 300.000000 260.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,260.000000) scale(0.100000,-0.100000)"
fill="#FFFFFF" stroke="none">
<path d="M234 2421 c-91 -22 -160 -99 -170 -188 -3 -26 -1 -82 5 -123 5 -41
19 -154 30 -250 12 -96 28 -211 36 -255 13 -73 67 -387 78 -460 3 -16 19 -106
37 -200 17 -93 37 -206 45 -250 89 -512 91 -524 138 -573 58 -61 107 -78 213
-74 50 2 117 51 145 104 16 31 25 38 48 38 26 0 154 32 241 61 60 20 181 90
242 141 108 90 183 215 213 352 32 145 5 369 -64 529 -52 121 -159 252 -256
316 -22 14 -42 28 -45 31 -11 13 -105 52 -163 68 -90 25 -328 24 -376 -2 -19
-10 -37 -14 -42 -9 -8 8 -23 101 -54 338 -3 28 -12 96 -20 151 -15 115 -27
144 -82 195 -55 52 -133 75 -199 60z m121 -26 c28 -11 65 -46 65 -62 0 -7 4
-13 10 -13 14 0 36 -49 44 -95 3 -22 8 -51 10 -65 3 -14 19 -123 35 -242 17
-120 35 -227 41 -238 12 -23 35 -25 111 -9 73 15 225 12 311 -6 150 -31 282
-120 383 -260 56 -77 113 -202 129 -281 3 -10 9 -40 15 -66 36 -156 20 -310
-46 -447 -50 -106 -165 -220 -287 -286 -105 -57 -184 -82 -344 -110 -24 -4
-39 -16 -57 -45 -13 -21 -44 -52 -69 -69 -113 -78 -275 -9 -305 130 -7 30 -30
153 -51 274 -22 121 -47 257 -55 303 -9 45 -22 122 -30 170 -8 48 -21 121 -29
162 -7 41 -23 134 -35 205 -12 72 -28 164 -36 205 -17 96 -31 193 -50 355 -9
72 -18 137 -20 145 -2 8 -6 52 -10 98 -8 107 6 156 55 203 63 60 135 75 215
44z"/>
<path d="M693 1293 c-23 -3 -34 -12 -44 -35 -11 -26 -8 -53 15 -187 15 -86 39
-221 53 -301 13 -80 31 -155 39 -167 19 -30 41 -29 131 8 53 23 77 28 82 20 5
-7 29 9 69 48 51 50 64 71 80 123 11 35 19 77 17 93 -7 85 -21 138 -56 213
-44 95 -98 155 -156 172 -42 12 -181 21 -230 13z m198 -35 c118 -40 196 -171
206 -348 5 -74 3 -92 -16 -128 -33 -65 -83 -103 -196 -148 -119 -48 -108 -54
-131 71 -8 44 -21 118 -30 165 -38 211 -64 374 -59 378 20 21 175 28 226 10z"/>
<path d="M915 519 c-6 -17 -9 -56 -5 -84 1 -11 6 5 10 35 8 54 6 77 -5 49z"/>
<path d="M781 475 c0 -27 8 -79 19 -115 l20 -65 -7 50 c-3 28 -11 79 -18 115
l-13 65 -1 -50z"/>
<path d="M2277 2380 c-112 -36 -224 -129 -272 -228 -34 -70 -70 -175 -80 -233
-4 -24 -9 -47 -12 -51 -2 -4 -27 8 -55 27 -50 35 -68 40 -143 37 -55 -3 -123
-47 -159 -105 -24 -39 -29 -57 -28 -109 1 -59 27 -314 37 -348 2 -8 6 -46 10
-85 8 -90 22 -194 34 -248 5 -23 12 -67 16 -97 12 -102 54 -290 76 -340 24
-55 92 -124 144 -146 90 -37 217 -4 288 76 80 88 87 124 98 505 5 176 13 343
17 371 10 62 -1 107 -12 54 -19 -87 -26 -183 -31 -425 -8 -356 -11 -377 -67
-462 -74 -110 -215 -149 -315 -87 -91 57 -125 142 -172 429 -17 105 -36 215
-41 245 -5 30 -11 80 -15 110 -3 30 -15 138 -27 240 -26 229 -26 255 1 304 61
107 178 134 287 65 l48 -31 18 22 c10 12 18 32 18 44 0 32 54 188 85 244 50
92 145 171 248 206 52 18 152 22 162 6 3 -5 25 -18 48 -28 50 -23 67 -41 101
-108 31 -62 34 -137 11 -257 -21 -112 -20 -172 6 -208 l21 -30 33 21 c42 26
94 25 150 -1 54 -25 82 -58 91 -105 16 -84 -24 -149 -123 -201 -173 -92 -339
-85 -444 16 -41 40 -49 54 -50 87 -2 37 -2 37 -9 -11 -6 -49 -6 -51 38 -97 58
-61 126 -88 225 -88 121 0 232 39 321 112 128 105 85 288 -76 328 -49 13 -133
6 -143 -11 -4 -5 -13 -9 -21 -9 -17 0 -14 50 12 194 23 127 19 201 -15 272
-34 73 -86 118 -157 139 -67 19 -105 18 -177 -5z"/>
<path d="M2325 2320 c-42 -11 -1 -11 50 -1 34 7 35 9 10 9 -16 0 -43 -4 -60
-8z"/>
<path d="M2332 2083 c-30 -58 -42 -125 -47 -258 l-4 -110 14 115 c17 136 27
182 49 233 16 36 5 54 -12 20z"/>
<path d="M1675 1856 c-38 -17 -82 -63 -60 -63 8 0 15 4 15 9 0 4 5 8 11 8 6 0
24 14 41 30 16 17 28 30 26 30 -2 -1 -16 -7 -33 -14z"/>
<path d="M1957 1730 c10 -83 23 -115 16 -40 -3 36 -10 72 -14 80 -6 9 -6 -7
-2 -40z"/>
<path d="M1637 1274 c6 -68 11 -77 12 -24 0 25 -3 51 -8 59 -5 8 -7 -5 -4 -35z"/>
</g>
</svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <g stroke-width="0" id="blank-SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="blank-SVGRepo_iconCarrier">  */}
                {/* <Image src="https://image.noelshack.com/fichiers/2023/09/4/1677715963-faviconbr.png" style='width=:10px; height=:auto;' alt="br"/> */}
                {/* <path fill="#ffffff" d="M17.1813 16.3254L15.3771 14.5213C16.5036 13.5082 17.379 12.9869 18.2001 12.8846C19.0101 12.7837 19.8249 13.0848 20.8482 13.8687C20.8935 13.9034 20.947 13.9202 21 13.9202V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V13.7522C3.06398 13.7522 3.12796 13.7278 3.17678 13.679L4.45336 12.4024C5.31928 11.5365 6.04969 10.8993 6.71002 10.4791C7.3679 10.0605 7.94297 9.86572 8.50225 9.86572C9.06154 9.86572 9.6366 10.0605 10.2945 10.4791C10.9548 10.8993 11.6852 11.5365 12.5511 12.4024L16.8277 16.679C16.9254 16.7766 17.0836 16.7766 17.1813 16.679C17.2789 16.5813 17.2789 16.423 17.1813 16.3254Z" opacity="0.1"></path> 
                <path stroke-width="2" stroke="#ffffff" d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"></path> 
                <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022"></path> 
                <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M21.0002 13.6702C18.907 12.0667 17.478 12.2919 15.1982 14.3459"></path> 
                <path stroke-width="2" stroke="#ffffff" d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"></path>  */}
                {/* </g>
                </svg> */}
                </span></label>
            <div className="blank-box-title">Extension:</div>
            <select name="extension" id="extension" className="blank-input" required>
              <option value=".COM">.COM ⁽ᴰᵉᶠᵃᵘˡᵗ⁾</option>
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
            <div className="blank-box-title">Domain Name:</div>
            <input type="text" className="blank-input" placeholder="www.example.com" name="domain name" required></input>
            <div className="blank-box-title">Email:</div>
            <input type="email" className="blank-input" placeholder="email@example.com" name="email" required></input>
            <div className="blank-box-title">Name:</div>
            <input type="name" className="blank-input" placeholder="Liam" name="name" required></input>
            <div className="blank-checkbox">
              <input type="checkbox" id="blank-checkbox" name="agreement" value="checkbox" required/>
              <label >Mᴀᴋᴇ sᴜʀᴇ ᴛʜᴀᴛ ʏᴏᴜ ᴀʀᴇ sᴀᴛɪsғɪᴇᴅ ᴡɪᴛʜ ʏᴏᴜʀ ᴅᴏᴍᴀɪɴ ɴᴀᴍᴇ. (Yᴏᴜ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ᴀʟʟᴏᴡᴇᴅ ᴛᴏ ᴍᴀᴋᴇ ᴀɴʏ ᴄʜᴀɴɢᴇs). Cʜᴇᴄᴋ ᴛʜᴇ ʙᴏx ɪғ ʏᴏᴜʀ ᴅᴏᴍᴀɪɴ ɴᴀᴍᴇ ɪs ᴄᴏʀʀᴇᴄᴛ. *</label>
            </div>
            <input type="hidden" name="redirect" value="https://buildandrun.net/pricing/skB55L5WOPPK/success/index.html"></input>
            <button className="blank-button" type="submit">Submit</button>
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
              <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/buildandrun.net/" target="_blank">
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
                <li className="menu__item"><a className="menu__link" href="../" target="_blank">Homepage</a></li>
                <li className="menu__item"><a className="menu__link" href="../partners" target="_blank">Partners</a></li>
                <li className="menu__item"><a className="menu__link" href="https://www.dmca.com/compliance/buildandrun.net" target="_blank">DMCA.com</a></li>
                <li className="menu__item"><a className="menu__link" href="https://github.com/BuildandRun/BuildandRun-v1.0.1#readme" target="_blank">V.1.0.1</a></li>
                <li className="menu__item"><a className="menu__link" href="../privacy-policy" target="_blank">Privacy Policy</a></li>
                <li className="menu__item"><a className="menu__link" href="../terms-of-service" target="_blank">Terms Of Service</a></li>

              </ul>
              <p>&copy;2023 B&R | All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </div>


    </div>
  );
}

