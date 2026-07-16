import { Link, useNavigate } from "react-router-dom";
import { plans } from "../../data/mockData";
import "./marketing.css";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">Pricing</span>
        <h1 className="page-title">Plans that grow with your training volume</h1>
        <p>Self-serve trial, sales-assisted demo, or direct checkout — pick your path.</p>
        <div className="grid-3" style={{ marginTop: "1.75rem" }}>
          {plans.map((plan) => (
            <div className={`panel pricing-card ${plan.popular ? "popular" : ""}`} key={plan.id}>
              {plan.popular ? <span className="badge">Most popular</span> : null}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price ? `$${plan.price}` : "Custom"}</div>
              <p>{plan.blurb}</p>
              <ul className="feature-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {plan.price ? (
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/checkout/${plan.id}`)}
                  >
                    Checkout
                  </button>
                  <Link className="btn btn-secondary" to={`/signup?plan=${plan.id}`}>
                    Start trial
                  </Link>
                </div>
              ) : (
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <Link className="btn btn-primary" to="/demo?plan=enterprise">
                    Talk to sales
                  </Link>
                  <Link className="btn btn-secondary" to="/contact?topic=enterprise">
                    Contact procurement
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
