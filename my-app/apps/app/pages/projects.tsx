import Image from "next/image";
import BRlogo from "../public/img/logo/BRlogo.png";
import mBRlogo from "../public/img/logo/mBRlogo.png";
import Facebook from "../public/img/footer/logo-facebook.svg";
import Twitter from "../public/img/footer/logo-twitter.svg";
import Instagram from "../public/img/footer/logo-instagram.svg";
import Linkedin from "../public/img/footer/logo-linkedin.svg";
import Youtube from "../public/img/footer/logo-youtube.svg";

import br from "../public/img/projects/br.png";

// import  from "../public/img/projects/.png";


export function Index() {

    /*
     * Build and Run v.2.0.2 Index.
     *
     * Note: The corresponding styles are in the ./projects.css file.
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
                        Projects 🪄
                    </h1>
                </div>
                <div id="description">
                    <span>The Projects section is where you can discover and explore all of the innovative projects created by the <strong>Build and Run</strong> team.</span>
                    <div></div>
                    <span></span>
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
                {/* LEGEND  */}
                <div>
                <div className="legend-container">
    <div className="legend-terminal_toolbar">
        <div className="legend-butt">
            <button className="legend-btn legend-btn-red"></button>
            <button className="legend-btn legend-btn-yellow"></button>
            <button className="legend-btn legend-btn-green"></button>
        </div>
        <p className="legend-user">Build and Run ~ Terminal</p>
        <a href="https://github.com/BuildandRun"><div className="legend-add_tab">
            +
        </div></a>
    </div>
    <div className="legend-terminal_body">
        <div className="legend-terminal_promt">
            <span className="legend-terminal_user">support@brstore.us:</span>
            <span className="legend-terminal_location">~</span>
            <span className="legend-terminal_bling">$ git legend -br update: InProgress 🟡 || Incomplete 🟠 || Critical 🔴 || Done 🟢 </span>
            <span className="legend-terminal_cursor"></span>
        </div>
    </div>
</div>
  {/* LEGEND  */}
                </div>


                {/* PROJECTS  */}
                {/* PROJECT # 8 */}
                <div>
                    <div>
                    <a href="./projects/debit-card" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Debit Card</p>
                                    <span className="project-span">March 2023 🟢</span>
                                </div>
                                <p className="project-p">Use this tool for all your free tials </p>
                                <div>
                                </div></div></div>
                        </a>  
                    </div>
                    {/* PROJECT # 8 */}
                    {/* PROJECT # 7 */}
                    <div>
                    <a href="https://blog.brstore.us" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Blog</p>
                                    <span className="project-span">December 2022 🟢</span>
                                </div>
                                <p className="project-p">New blog experience for you and your friends</p>
                                <div>
                                </div></div></div>
                        </a>  
                    </div>
                    {/* PROJECT # 7 */}
                    {/* PROJECT # 6 */}
                    <div>
                    <a href="https://admin.brstore.us" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Admin Panel</p>
                                    <span className="project-span">November 2022 🟢</span>
                                </div>
                                <p className="project-p">Manage password, email, site, and subscription</p>
                                <div>
                                </div></div></div>
                        </a>  
                    </div>
                    {/* PROJECT # 6 */}
                    {/* PROJECT # 5 */}
                    <div>
                    <a href="http://brstore.ddns.net/tech/projects/simple-logo/" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Logo and Favicon </p>
                                    <span className="project-span">October 2021 🟢</span>
                                </div>
                                <p className="project-p">Simple logo and favicon generator</p>
                                <div>
                                </div></div></div>
                        </a>  
                    </div>
                    {/* PROJECT # 5 */}
                    {/* PROJECT # 4 */}
                    <div>
                    <a href="http://brstore.ddns.net/tech/projects/password-generator/" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Password Generator</p>
                                    <span className="project-span">April 2021 🟢</span>
                                </div>
                                <p className="project-p">Generate password with up to 32 characters</p>
                                <div>
                                </div></div></div>
                        </a>  
                    </div>
                    {/* PROJECT # 4 */}
                    {/* PROJECT # 3 */}
                    <div>
                    <a href="https://media.brstore.us" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Media Panel</p>
                                    <span className="project-span">December 2020 🟠</span>
                                </div>
                                <p className="project-p">Your marketing tool for all your socials</p>
                                <div>
                                </div></div></div>
                        </a>  
                    </div>
                    {/* PROJECT # 3 */}
                    {/* PROJECT # 2 */}
                    <div>
                    <a href="./tweak-apps" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Tweak Apps</p>
                                    <span className="project-span">November 2020 🟢</span>
                                </div>
                                <p className="project-p">Applications  that can simplify your online life</p>
                                <div>
                                </div></div></div>
                        </a>  
                    </div>
                    {/* PROJECT # 2 */}
                    {/* PROJECT # 1 */}
                    <div>
                        <a href="https://github.com/BuildandRun/BuildandRun-v1.0.1#readme" target="_blank">
                        <div className="project-card">
                            <div className="project-img">
                            <Image src={br} alt="br"/>
                            </div>
                            <div className="project-textBox">
                                <div className="project-textContent">
                                    <p className="project-h1">Build and Run v1.0.1</p>
                                    <span className="project-span">November 2020 🟢</span>
                                </div>
                                <p className="project-p">The initial release of Build and Run's Web App</p>
                                <div>
                                </div></div></div>
                        </a>    
                    </div>
                    {/* PROJECT # 1 */}
                </div>
                {/* PROJECTS  */}

                {/* <div>
    <p>
    Our team is dedicated to building accessible UI/UX designs that help improve the online experiences of users all over the world. Our goal is to use technology to create a better future for everyone. In this section, you can see the wide range of projects we've worked on, from website redesigns to mobile app development, and everything in between. We're constantly pushing the boundaries of what's possible with technology, and our projects reflect our commitment to innovation and excellence. Browse our collection of projects to see how we're making a difference in the world of tech.
    </p>
 </div> */}

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
