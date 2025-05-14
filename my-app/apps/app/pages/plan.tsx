import React from 'react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string;
  href: string;
}

const Plan: React.FC<PlanProps> = ({
  name,
  price,
  description,
  features,
  href,
}) => {
  return (
    <div className="plan-card">
      <h3 className="plan-title">{name}</h3>
      <p className="plan-price">{price}</p>
      <p className="plan-description">{description}</p>
      <ul className="plan-features">
        {features.split('•').map((f, i) => (
          <li key={i}>{f.trim()}</li>
        ))}
      </ul>
      <a href={href} className="plan-button">
        Get Started
      </a>
    </div>
  );
};

const ChoosePlan: React.FC = () => {
  return (
    <div className="pricing-container">
      <div className="plans-header">
        <img
          className="brand-logo"
          src="./img/logo/logobr.png"
          alt="Brstore"
        />
        <h3>
          Find the right <span className="highlight-text">pricing</span> plan for you
        </h3>
        <p className="sub-text">
          Build a stunning website or app with full support every step of the way 🚀
        </p>
      </div>

      <div className="plans-grid">
        <Plan
          name="Regular"
          price="$1,000 one-time + $12.99/mo"
          description="Perfect for launching your dream site"
          features=" Domain • Web Hosting • MySQL Database • SSL Certificate"
          href="https://buy.stripe.com/dR62aoaeAdvEbDi4gt"
        />
        <Plan
          name="Premium"
          price="$2,000 one-time + $34.99/mo"
          description="Ideal for businesses & creative portfolios"
          features=" Domain • Web Hosting • MySQL Database • SSL Certificate • FTP Access • Unlimited Emails"
          href="https://buy.stripe.com/8wMdT6cmI77ggXCdR4"
        />
        <Plan
          name="Unlimited"
          price="$3,000 one-time + $59.99/mo"
          description="Full access for enterprises and custom platforms"
          features=" Domain • Web Hosting • MySQL Database • SSL Certificate • FTP Access • Unlimited Emails • User Support • VPS Server • Application Dev"
          href="https://buy.stripe.com/aEU02g72o8bkePuaET"
        />
      </div>

      <Footer />
    </div>
  );
};

const Footer: React.FC = () => {
  const partners = [
    { name: 'Shine City Detailing', url: 'https://shinecitydetailing.com' },
    { name: 'Braided Diva', url: 'https://braideddiva.net' },
    { name: 'AMG Records', url: 'https://amgrecord.com' },
    { name: 'REA', url: 'https://rea.Fmobi' },
    { name: 'Fine Ivoire', url: 'https://fineivoire.com' },
  ];

  return (
    <footer className="footer">
      <a href="https://buildandrun.net" className="footer-home-btn">
        🏠 Homepage
      </a>
      <p className="footer-note">© 2025 Build and Run v3.0.3 — Made with ❤️</p>
      <div className="trusted-partners">
        <h4 className="partners-title">Trusted Development Partners</h4>
        <ul className="partners-list">
          {partners.map((p) => (
            <li key={p.name}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default ChoosePlan;
