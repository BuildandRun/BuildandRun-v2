import React from "react";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string;
  href: string;
}

const Plan: React.FC<PlanProps> = ({ name, price, description, features, href }) => {
  return (
    <div className="plan cardplan">
      <h3>{name}</h3>
      <p className="plan-price">{price}</p>
      <p className="plan-description">{description}</p>
      <p className="plan-features">{features}</p>
      <a href={href}><button>Get started</button></a>
    </div>
  );
};

const ChoosePlan: React.FC = () => {
  return (
    <div className="plan-container">
      {/* NAVIGATION  */}
    <div className="navigation-home">
    <div className="navigation-card">
  <a href="https://brstore.us" className="tab">
    <svg
      className="svgIcon"
      viewBox="0 0 104 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100.5 40.75V96.5H66V68.5V65H62.5H43H39.5V68.5V96.5H3.5V40.75L52 4.375L100.5 40.75Z"
        stroke="black"
        stroke-width="7"
      ></path>
    </svg>
  </a>

  <a href="https://admin.brstore.us/login" className="tab">
    <svg
      width="104"
      height="100"
      viewBox="0 0 104 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="21.5"
        y="3.5"
        width="60"
        height="60"
        rx="30"
        stroke="black"
        stroke-width="7"
      ></rect>
      <g clip-path="url(#clip0_41_27)">
        <mask
          id="mask0_41_27"
          // style="mask-type:luminance" 
          maskUnits="userSpaceOnUse"
          x="0"
          y="61"
          width="104"
          height="52"
        >
          <path
            d="M0 113C0 84.2812 23.4071 61 52.1259 61C80.706 61 104 84.4199 104 113H0Z"
            fill="white"
          ></path>
        </mask>
        <g mask="url(#mask0_41_27)">
          <path
            d="M-7 113C-7 80.4152 19.4152 54 52 54H52.2512C84.6973 54 111 80.3027 111 112.749H97C97 88.0347 76.9653 68 52.2512 68H52C27.1472 68 7 88.1472 7 113H-7ZM-7 113C-7 80.4152 19.4152 54 52 54V68C27.1472 68 7 88.1472 7 113H-7ZM52.2512 54C84.6973 54 111 80.3027 111 112.749V113H97V112.749C97 88.0347 76.9653 68 52.2512 68V54Z"
            fill="black"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_41_27">
          <rect
            width="104"
            height="39"
            fill="white"
            transform="translate(0 61)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  </a>

  <a href="https://app.brstore.us/" className="tab">
    <svg
      width="101"
      height="114"
      viewBox="0 0 101 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="46.1726"
        cy="46.1727"
        r="29.5497"
        transform="rotate(36.0692 46.1726 46.1727)"
        stroke="black"
        stroke-width="7"
      ></circle>
      <line
        x1="61.7089"
        y1="67.7837"
        x2="97.7088"
        y2="111.784"
        stroke="black"
        stroke-width="7"
      ></line>
    </svg>
  </a>
</div>

    </div>
    {/* NAVIGATION  */}
      <div className="plan-house-bold">
        
        <div className="plan-logo">
          <img src="https://www.brstore.us/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrstore.5c796320.png&w=256&q=75" alt="Brstore" />
        </div>
        <h3>
          Find the right <a className="pricing-text-plan">pricing</a> plan for
          you
        </h3>
      </div>
      <h5 className="pricing-description-plan">
        Create a website, platform for your online users. We will help you every
        step of the way. 🚀
      </h5>
      <div className="plan-house">
        <div className="plans">
          <Plan
            name="Regular"
            price="$1012.99/mo"
            description="For building your first simple dream site"
            features=" • Domain • Web Hosting • MySQL Database • SSL Certificate"
            href="https://buy.stripe.com/5kA3coezybMh2OIaEE"
          />
          <Plan
            name="Premium"
            price="$1032.99/mo"
            description="For organization launches, frequently updated UI/UX, and more"
            features=" • Domain • Web Hosting • MySQL Database • SSL Certificate • FTP Access • Unlimited Emails"
            href="https://buy.stripe.com/7sI3co6328A574YcMN"
          />
          <Plan
            name="Unlimited Access"
            price="$1069.99/mo"
            description="For Enterprise, directories, and commercial websites"
            features="Domain • Web Hosting • MySQL Database • SSL Certificate • FTP Access • Unlimited Emails • Unlimited Access • User Support • VPS Server • Application Development"
            href="https://buy.stripe.com/fZe7sEaji3fL4WQ5km"
          />
        </div>
      </div> 
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

const Footer: React.FC = () => {
    return ( 
        <div className="plan-footer">
            <a href="https://brstore.us" className="plan-shadow__btn">
                Homepage
            </a>
            <p className="plan-footer-text">© 2024 Build and Run v3.0.3 crafted with ❤️.</p>
        </div>
    );
};



export default ChoosePlan;
