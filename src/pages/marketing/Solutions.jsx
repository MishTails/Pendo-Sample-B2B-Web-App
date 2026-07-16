import { Link, useParams } from "react-router-dom";
import { solutions } from "../../data/mockData";
import "./marketing.css";

export function SolutionsIndex() {
  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">Solutions</span>
        <h1 className="page-title">Training workflows for modern marketing orgs</h1>
        <p>Choose a path — each solution opens a dedicated journey into trial, demo, or docs.</p>
        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          {solutions.map((item) => (
            <Link className="panel solution-link" key={item.slug} to={`/solutions/${item.slug}`}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span>Open journey →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((item) => item.slug === slug) || solutions[0];

  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">Solution</span>
        <h1 className="page-title">{solution.title}</h1>
        <p>{solution.summary}</p>
        <div className="grid-3" style={{ marginTop: "1.5rem" }}>
          <div className="panel">
            <h3>1. Connect data</h3>
            <p>Pull CRM, product, and ad events into a training dataset.</p>
            <Link className="btn btn-secondary" to="/integrations">
              View integrations
            </Link>
          </div>
          <div className="panel">
            <h3>2. Train & govern</h3>
            <p>Configure features, fairness checks, and approval gates.</p>
            <Link className="btn btn-secondary" to="/docs/dataset-prep">
              Read docs
            </Link>
          </div>
          <div className="panel">
            <h3>3. Activate</h3>
            <p>Push scores into campaigns or start a guided trial workspace.</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <Link className="btn btn-primary" to={`/signup?intent=${solution.slug}`}>
                Start trial
              </Link>
              <Link className="btn btn-ghost" to={`/demo?solution=${solution.slug}`}>
                Book demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
