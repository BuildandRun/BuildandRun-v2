import { features } from "process";
import React from "react";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string;
}

const Plan: React.FC<PlanProps> = ({ name, price, description, features }) => {
  return (
    <div className="plan cardplan">
      <h3>{name}</h3>
      <p className="plan-price">{price}</p>
      <p className="plan-description">{description}</p>
      <p className="plan-features">{features}</p>
      <button>Get started</button>
    </div>
  );
};

const ChoosePlan: React.FC = () => {
  return (
    <div className="plan-container">
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
          ></Plan>
          <Plan
            name="Premium"
            price="$1032.99/mo"
            description="For organization launches, frequently updated UI/UX, and more"
            features=" • Domain • Web Hosting • MySQL Database • SSL Certificate • FTP Access • Unlimited Emails"
          />
          <Plan
            name="Unlimited Access"
            price="$1069.99/mo"
            description="For Enterprise, directories, and commercial websites"
            features="Domain • Web Hosting • MySQL Database • SSL Certificate • FTP Access • Unlimited Emails • Unlimited Access • User Support • VPS Server • Application Development"
          />
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
