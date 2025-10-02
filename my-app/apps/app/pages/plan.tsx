import React, { useEffect, useState } from 'react';

// --- Feature data for plans (cleaner structure) ---
const planFeatures = {
  regular: [
    { text: 'Domain & Hosting', icon: '🌐' },
    { text: 'MySQL Database', icon: '🗄️' },
    { text: 'SSL Certificate (Basic)', icon: '🔒' },
    { text: 'Priority Support', icon: '📞' },
  ],
  premium: [
    { text: 'Domain & Hosting (Premium)', icon: '✨' },
    { text: 'MySQL Database', icon: '🗄️' },
    { text: 'SSL Certificate (Wildcard)', icon: '🛡️' },
    { text: 'FTP Access', icon: '📂' },
    { text: 'Unlimited Emails', icon: '📧' },
    { text: '24/7 User Support', icon: '🌟' },
  ],
  unlimited: [
    { text: 'Everything in Premium', icon: '✅' },
    { text: 'Dedicated VPS Server', icon: '🚀' },
    { text: 'Application Development', icon: '💻' },
    { text: 'Full Enterprise Access', icon: '🏢' },
  ],
};

// --- Plan Card Component (No changes) ---
interface PlanProps {
  name: string;
  oneTimePrice: string;
  monthlyPrice: string;
  description: string;
  features: { text: string; icon: string }[];
  href: string;
  isRecommended?: boolean;
}

const Plan: React.FC<PlanProps> = ({
  name,
  oneTimePrice,
  monthlyPrice,
  description,
  features,
  href,
  isRecommended = false,
}) => {
  return (
    <div className={`br-plan-card ${isRecommended ? 'br-plan-recommended' : ''}`}>
      {isRecommended && <div className="br-badge-recommended">Most Popular</div>}
      
      <h3 className="br-plan-title">{name}</h3>
      <p className="br-plan-description">{description}</p>
      
      <div className="br-price-group">
        <div className="br-price-main">
          <span className="br-price-monthly">{monthlyPrice}</span>/mo
        </div>
        <p className="br-price-onetime">
          Plus {oneTimePrice} one-time setup
        </p>
      </div>

      <a href={href} className="br-plan-button">
        Choose Plan
      </a>

      <ul className="br-plan-features-list">
        {features.map((f, i) => (
          <li key={i}>
            <span className="br-feature-icon">{f.icon}</span> {f.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Footer Component (No changes) ---
const Footer: React.FC = () => {
  return (
    <footer className="br-footer">
      <div className="br-footer-content">
        <p className="br-footer-note">
          © 2025 Build and Run v3.0.3 — Made with ❤️
        </p>
      </div>
    </footer>
  );
};


// --- Main Component (Homepage button and new template buttons added to header) ---
const ChoosePlan: React.FC = () => {
  return (
    <div className="br-pricing-page">
      <header className="br-header">
        
        {/* TOP BAR: Homepage Link */}
        <div className="br-header-top-bar">
          <a href="https://buildandrun.net" className="br-homepage-link">
            🏠 Homepage
          </a>
        </div>

        <img
          className="br-brand-logo"
          src="./img/logo/logobr.png" // Ensure this path is correct
          alt="Brstore Logo"
        />
        <h1 className="br-page-title">
          Find the right <span className="br-highlight-text">hosting</span> plan for you
        </h1>
        <p className="br-page-subtitle">
          Build a stunning website or app with full support every step of the way 🚀
        </p>

        {/* NEW TEMPLATE BUTTONS CONTAINER */}
        <div className="br-template-buttons-container">
          <a href="https://typedream.com/templates" target="_blank" rel="noopener noreferrer" className="br-template-button br-button-secondary">
            View Templates 🏞️
          </a>
          <a href="https://ui8.net/" target="_blank" rel="noopener noreferrer" className="br-template-button br-button-secondary">
            View Templates 🌆
          </a>
        </div>
        {/* END NEW TEMPLATE BUTTONS CONTAINER */}

      </header>
      
      <main className="br-plans-grid-container">
        <Plan
          name="Regular"
          oneTimePrice="$1,000"
          monthlyPrice="$12.99"
          description="Perfect for launching your dream site and getting started."
          features={planFeatures.regular}
          href="https://buy.stripe.com/dR62aoaeAdvEbDi4gt"
        />
        <Plan
          name="Premium"
          oneTimePrice="$2,000"
          monthlyPrice="$34.99"
          description="Ideal for businesses, creative portfolios, and growing traffic."
          features={planFeatures.premium}
          href="https://buy.stripe.com/8wMdT6cmI77ggXCdR4"
          isRecommended={true} // Highlighted plan
        />
        <Plan
          name="Unlimited"
          oneTimePrice="$3,000"
          monthlyPrice="$59.99"
          description="Full access for enterprises, custom platforms, and high-demand applications."
          features={planFeatures.unlimited}
          href="https://buy.stripe.com/aEU02g72o8bkePuaET"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ChoosePlan;