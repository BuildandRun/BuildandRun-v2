import Image from "next/image";
import BRlogo from "../public/img/logo/BRlogo.png";
import mBRlogo from "../public/img/logo/mBRlogo.png";
import WebDevTab from "../public/img/navigate/web/82c.png";
import AdminTab from "../public/img/navigate/admin/a3.png";
import SocialTab from "../public/img/navigate/social/s2.png";
import AppProjects from "../public/img/navigate/projects/p2.png";
import AppBlog from "../public/img/navigate/blog/b2.png";
import AppTweak from "../public/img/navigate/tweak/t2.png";
import AppAbout from "../public/img/navigate/about/a1.png";
import AppTeam from "../public/img/navigate/team/t8.png";
import Facebook from "../public/img/footer/logo-facebook.svg";
import Twitter from "../public/img/footer/logo-twitter.svg";
import Instagram from "../public/img/footer/logo-instagram.svg";
import Linkedin from "../public/img/footer/logo-linkedin.svg";
import Youtube from "../public/img/footer/logo-youtube.svg";

// TWEAK IMAGE //
import kickass from "../public/img/tweak-apps/kickass.png";
import fmovies from "../public/img/tweak-apps/fmovies.png";
import popcorn from "../public/img/tweak-apps/popcorn.png";
import putlocker from "../public/img/tweak-apps/putlocker.png";
import showbox from "../public/img/tweak-apps/showbox.png";


export function Index() {

  /*
   * Build and Run v.2.0.2 Index.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  return (
    <div className="wrapper">
      <div className="container">
        <div id="mBRlogo" className="show-on-desktop hide-on-mobile">
          <Image src={mBRlogo} alt="mBRlogo" />
        </div>

        <div id="welcome">
          <h1>
            <span> Introducing The Future</span>
            Tweak Apps 👾
          </h1>
        </div>
        <div id="description">
          <span>You can access our online platform with your mobile device and desktop.</span>
          <div></div>
          <span>We are currently building our IOS and Android App. Stay tuned!</span>
        </div>

        <div id="hero" className="rounded">
          <div className="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>You&apos;re up and running</span>
            </h2>
            <div className="blinker">
            <a href="./"> Homepage</a>
            </div>
          </div>
          <div className="logo-container">
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <Image src={BRlogo} alt="BRlogo" />
          </div>
        </div>

        {/* TWEAK APPS  */}
        
           <div className="tweak-apps">

                 {/* SECTION  */}

                <div className="movies">
                    <div className="tweak-title">
                        <h1>Movies 🎬</h1>
                    </div>
                    <p>Most popular movie apps that allow you to watch all movies for free.</p>
                    <div className="slider" id="slider-spacer">
                        <div className="slides">
                            <div id="movies-1">
                                    {/* MODULE */}
                                    <div><a href="https://kickass.sx/home/" target="_blank">
                                    <div className="cardi">
                                        <div className="app-row">
                                            <div className="tweak-image">
                                        <Image src={kickass} alt="kickass" />
                                           </div>
                                    <h3 className="cardi__title">Kickass Torent
                                    </h3>
                                        </div>
                                        <div className="app-row">
                                    <p className="cardi__content">All recent and new movies (Download µTorrent or BitTorrent) </p>
                                        </div>
                                    <div className="cardi__date">
                                            ⭐⭐⭐
                                    </div>
                                    <div className="cardi__arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                    </svg>
                                    </div>
                                    </div></a>
                                    </div>
                                    {/* MODULE */}
                            </div>
                            <div id="movies-2">
                                         {/* MODULE */}
                                         <div><a href="https://fmovies.wtf/" target="_blank">
                                    <div className="cardi">
                                        <div className="app-row">
                                            <div className="tweak-image">
                                        <Image src={fmovies} alt="fmovies" />
                                           </div>
                                    <h3 className="cardi__title">FMovies
                                    </h3>
                                        </div>
                                        <div className="app-row">
                                    <p className="cardi__content">All recent and new movies (Online Users Only) </p>
                                        </div>
                                    <div className="cardi__date">
                                            ⭐⭐⭐⭐
                                    </div>
                                    <div className="cardi__arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                    </svg>
                                    </div>
                                    </div></a>
                                    </div>
                                    {/* MODULE */}
                            </div>
                            <div id="movies-3">
                                          {/* MODULE */}
                                          <div><a href="https://github.com/popcorn-official/popcorn-desktop/releases" target="_blank">
                                    <div className="cardi">
                                        <div className="app-row">
                                            <div className="tweak-image">
                                        <Image src={popcorn} alt="popcorn" />
                                           </div>
                                    <h3 className="cardi__title">Popcorn Time
                                    </h3>
                                        </div>
                                        <div className="app-row">
                                    <p className="cardi__content">All recent and new movies (Runs on all devices)</p>
                                        </div>
                                    <div className="cardi__date">
                                            ⭐⭐⭐⭐⭐
                                    </div>
                                    <div className="cardi__arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                    </svg>
                                    </div>
                                    </div></a>
                                    </div>
                                    {/* MODULE */}
                            </div>
                            <div id="movies-4">
                                             {/* MODULE */}
                                             <div><a href="https://www2.putlockers.ws/" target="_blank">
                                             {/* <div><a href="https://putlocker-movies.space/" target="_blank"> */}
                                    <div className="cardi">
                                        <div className="app-row">
                                            <div className="tweak-image">
                                        <Image src={putlocker} alt="putlocker" />
                                           </div>
                                    <h3 className="cardi__title">Putlocker
                                    </h3>
                                        </div>
                                        <div className="app-row">
                                    <p className="cardi__content">All recent and new movies (Online Users Only)</p>
                                        </div>
                                    <div className="cardi__date">
                                            ⭐⭐
                                    </div>
                                    <div className="cardi__arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                    </svg>
                                    </div>
                                    </div></a>
                                    </div>
                                    {/* MODULE */}
                            </div>
                            <div id="movies-5">
                                             {/* MODULE */}
                                             <div><a href="https://bestforandroid.com/apk/showbox/" target="_blank">
                                    <div className="cardi">
                                        <div className="app-row">
                                            <div className="tweak-image">
                                        <Image src={showbox} alt="showbox" />
                                           </div>
                                    <h3 className="cardi__title">Showbox
                                    </h3>
                                        </div>
                                        <div className="app-row">
                                    <p className="cardi__content">All recent and new movies (Android Users Only)</p>
                                        </div>
                                    <div className="cardi__date">
                                            ⭐
                                    </div>
                                    <div className="cardi__arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                    </svg>
                                    </div>
                                    </div></a>
                                    </div>
                                    {/* MODULE */}
                            </div>
                        </div>
                        <div className="number-selector">
                        <a href="#movies-1">1️⃣</a>ㅤ|
                        ㅤ<a href="#movies-2">2️⃣</a>ㅤ|
                        ㅤ<a href="#movies-3">3️⃣</a>ㅤ|
                        ㅤ<a href="#movies-4">4️⃣</a>ㅤ|
                        ㅤ<a href="#movies-5">5️⃣</a>
                        </div>
                    </div>
                </div>    
                    {/* SECTION  */}
                    <div className="divider2"></div>
                    {/* SECTION  */}

                    <div className="ai-bots">
                    <div className="tweak-title">
                        <h1>AI & Bots 🤖</h1>
                    </div>
                    <p>Most advance artificial intelligence tools that will make your life much more easier.</p>
                    <div className="slider" id="slider-spacer">
                        <div className="slides">
                            <div id="ai-bots-1">
                            1
                            </div>
                            <div id="ai-bots-2">
                            2
                            </div>
                            <div id="ai-bots-3">
                            3
                            </div>
                            <div id="ai-bots-4">
                            4
                            </div>
                            <div id="ai-bots-5">
                            5
                            </div>
                        </div>
                        <div className="number-selector">
                        <a href="#ai-bots-1">1️⃣</a>ㅤ|
                        ㅤ<a href="#ai-bots-2">2️⃣</a>ㅤ|
                        ㅤ<a href="#ai-bots-3">3️⃣</a>ㅤ|
                        ㅤ<a href="#ai-bots-4">4️⃣</a>ㅤ|
                        ㅤ<a href="#ai-bots-5">5️⃣</a>
                        </div>
                    </div>
                </div>    
                            {/* SECTION  */}      
                            <div className="divider2"></div>
                            {/* SECTION  */}

                    <div className="editors">
                    <div className="tweak-title">
                        <h1>Editors 🎨</h1>
                    </div>
                    <p>Find the right tools to create and edit any art or image.</p>
                    <div className="slider" id="slider-spacer">
                        <div className="slides">
                            <div id="editors-1">
                            1
                            </div>
                            <div id="editors-2">
                            2
                            </div>
                            <div id="editors-3">
                            3
                            </div>
                            <div id="editors-4">
                            4
                            </div>
                            <div id="editors-5">
                            5
                            </div>
                        </div>
                        <div className="number-selector">
                        <a href="#editors-1">1️⃣</a>ㅤ|
                        ㅤ<a href="#editors-2">2️⃣</a>ㅤ|
                        ㅤ<a href="#editors-3">3️⃣</a>ㅤ|
                        ㅤ<a href="#editors-4">4️⃣</a>ㅤ|
                        ㅤ<a href="#editors-5">5️⃣</a>
                        </div>
                    </div>
                </div>    
                            {/* SECTION  */}     
                            <div className="divider2"></div>
                            {/* SECTION  */}

                    <div className="cryptocurrencies">
                    <div className="tweak-title">
                        <h1>Cryptocurrencies 🪙</h1>
                    </div>
                    <p>Top cryptocurrencies you will love to invest your money in.</p>
                    <div className="slider" id="slider-spacer">
                        <div className="slides">
                            <div id="cryptocurrencies-1">
                            1
                            </div>
                            <div id="cryptocurrencies-2">
                            2
                            </div>
                            <div id="cryptocurrencies-3">
                            3
                            </div>
                            <div id="cryptocurrencies-4">
                            4
                            </div>
                            <div id="cryptocurrencies-5">
                            5
                            </div>
                        </div>
                        <div className="number-selector">
                        <a href="#cryptocurrencies-1">1️⃣</a>ㅤ|
                        ㅤ<a href="#cryptocurrencies-2">2️⃣</a>ㅤ|
                        ㅤ<a href="#cryptocurrencies-3">3️⃣</a>ㅤ|
                        ㅤ<a href="#cryptocurrencies-4">4️⃣</a>ㅤ|
                        ㅤ<a href="#cryptocurrencies-5">5️⃣</a>
                        </div>
                    </div>
                </div>    
                    {/* SECTION  */}           
            </div>
        {/* TWEAK APPS  */}

        <div id="commands" className="rounded shadow">
          <h2>Build and Run</h2>
          <p>Learn How To Get Started</p>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              FAQs
            </summary>
            <pre>
              <span>⎆ What is Build and Run?</span>
              Build and Run (B&R) is a technology company that provides multiple services from all categories for a fair price.
              <span>⎆ What service do we provide?</span>
              We provides all kinds of services, such as Website, Application Development, Design, Arts, Social Media Marketing, News, Tweaks, and More.
              <span>⎆ What makes our Administrator Panel so special?</span>
              First and foremost, it is incredibly user-friendly. Whether you are a tech-savvy individual or someone who is new to using software, the administrator panel is easy to navigate and understand. This makes it accessible to everyone, regardless of their level of expertise.
              <span>⎆ How can you reach us?</span>
              Email us at suppport@brstore.us or via text at +1 (469) 215-1582.
              <span>⎆ How can you partner with us?</span>
              Send us an email at support@brstore.us if you are a person or business and would want to collaborate with us.
              <span>⎆ How can you join our team?</span>
              Apply for a position at B&R to help us build and Run a world with tech that has no limits. Send us your CV at jobs@brstore.us.
            </pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Privacy Policy
            </summary>
            <pre><a href="./privacy-policy">Click ➤ Privacy Policy 🔒</a></pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Terms Of Service
            </summary>
            <pre>
            <a href="./terms-of-service">Click ➤ Terms Of Service 📜</a>
            </pre>
          </details>
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
      </div>
      <div>
        <footer className="footer">
          <div className="waves">
          </div>
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
            <li className="menu__item"><a className="menu__link" href="./company" target="_blank">Company</a></li>
            <li className="menu__item"><a className="menu__link" href="./partners" target="_blank">Partners</a></li>
            <li className="menu__item"><a className="menu__link" href="https://www.dmca.com/compliance/brstore.us" target="_blank">DMCA.com</a></li>

          </ul>
          <p>&copy;2023 B&R | All Rights Reserved</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}

export default Index;
