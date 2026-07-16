import { Link } from "react-router-dom";
import { solutions } from "../../data/mockData";
import "./marketing.css";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-wash" />
        <div className="container hero-grid">
          <div className="animate-in">
            <p className="brand-lockup">Trainora</p>
            <h1>Train marketing AI that actually ships.</h1>
            <p className="hero-lead">
              The B2B platform for collecting signals, training propensity models, and
              launching governed campaigns from one workspace.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/signup">
                Start free trial
              </Link>
              <Link className="btn btn-secondary" to="/demo">
                Book a demo
              </Link>
              <Link className="btn btn-ghost" to="/solutions">
                Explore solutions
              </Link>
            </div>
          </div>
          <div className="hero-visual float-soft animate-in-delay" aria-hidden="true">
            <div className="visual-panel">
              <div className="visual-row">
                <span>Training job</span>
                <strong>Conversion Propensity v4</strong>
              </div>
              <div className="meter">
                <div style={{ width: "78%" }} />
              </div>
              <div className="visual-stats">
                <div>
                  <small>Lift</small>
                  <strong>+18%</strong>
                </div>
                <div>
                  <small>Latency</small>
                  <strong>42ms</strong>
                </div>
                <div>
                  <small>Coverage</small>
                  <strong>96%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Why Trainora</span>
          <h2 className="page-title">One system for data, training, and activation</h2>
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            {[
              ["Closed-loop learning", "Feed campaign outcomes back into nightly retrains."],
              ["Marketer-ready controls", "Approvals, brand rules, and explainable scores."],
              ["Warehouse-native", "Train on Snowflake, BigQuery, or synced CRM events."],
            ].map(([title, copy]) => (
              <div className="panel" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">Solutions</span>
          <h2 className="page-title">Pick a training workflow</h2>
          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
            {solutions.map((item) => (
              <Link className="panel solution-link" to={`/solutions/${item.slug}`} key={item.slug}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span>View solution →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <div>
            <h2>Ready to train your next model?</h2>
            <p>Start a trial, talk to sales, or jump straight into the product tour.</p>
          </div>
          <div className="hero-cta">
            <Link className="btn btn-amber" to="/signup">
              Create account
            </Link>
            <Link className="btn btn-secondary" to="/pricing">
              Compare plans
            </Link>
            <Link className="btn btn-ghost" to="/login">
              Returning user login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
