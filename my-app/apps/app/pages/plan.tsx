import React from 'react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
}

const Plan: React.FC<PlanProps> = ({ name, price, description }) => {
  return (
    <div className="plan">
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <button>Get started</button>
    </div>
  );
}

const ChoosePlan: React.FC = () => {
  return (
    <div className="plan-container">
        <div className='plan-house'>
      <h1>Choose Your Plan</h1>
      <div className="plans">
        <Plan name="Regular" price="$9.99/month" description="Access to basic features" />
        <Plan name="Premium" price="$19.99/month" description="Access to premium features" />
        <Plan name="Unlimited Access" price="$29.99/month" description="Access to all features with no limits" />
      </div></div>
    </div>
  );
}

export default ChoosePlan;
