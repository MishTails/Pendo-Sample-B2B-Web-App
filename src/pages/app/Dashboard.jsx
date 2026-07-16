import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { campaigns, models } from "../../data/mockData";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <PageHeader
        title={`Welcome, ${user?.name?.split(" ")[0] || "there"}`}
        subtitle="Pick a flow — campaigns, training, or integrations."
        actions={
          <>
            <Link className="btn btn-primary" to="/app/campaigns/new">
              New campaign
            </Link>
            <Link className="btn btn-secondary" to="/app/training/new">
              New training job
            </Link>
          </>
        }
      />
      <div className="grid-3">
        <div className="panel">
          <h3>Active campaigns</h3>
          <p style={{ fontSize: "2rem", margin: 0, color: "var(--ink)" }}>{campaigns.length}</p>
          <Link to="/app/campaigns">View all →</Link>
        </div>
        <div className="panel">
          <h3>Models ready</h3>
          <p style={{ fontSize: "2rem", margin: 0, color: "var(--ink)" }}>
            {models.filter((m) => m.status === "Ready").length}
          </p>
          <Link to="/app/models">Manage models →</Link>
        </div>
        <div className="panel">
          <h3>Suggested next step</h3>
          <p>Connect Meta Ads or import an audience before your next retrain.</p>
          <Link className="btn btn-amber" to="/app/integrations">
            Open integrations
          </Link>
        </div>
      </div>
      <div className="grid-2" style={{ marginTop: "1.25rem" }}>
        <div className="panel">
          <h3>Recent campaigns</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td>{campaign.name}</td>
                  <td>
                    <span className="badge">{campaign.status}</span>
                  </td>
                  <td>
                    <Link to={`/app/campaigns/${campaign.id}`}>Open</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="panel">
          <h3>Model health</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.accuracy}</td>
                  <td>
                    <Link to={`/app/models/${model.id}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
