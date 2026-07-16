import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./layouts.css";

const links = [
  { to: "/app", label: "Overview", end: true },
  { to: "/app/campaigns", label: "Campaigns" },
  { to: "/app/models", label: "AI Models" },
  { to: "/app/training", label: "Training Jobs" },
  { to: "/app/audiences", label: "Audiences" },
  { to: "/app/analytics", label: "Analytics" },
  { to: "/app/integrations", label: "Integrations" },
  { to: "/app/experiments", label: "Experiments" },
];

const settingsLinks = [
  { to: "/app/settings", label: "Workspace" },
  { to: "/app/settings/team", label: "Team" },
  { to: "/app/settings/billing", label: "Billing" },
  { to: "/app/settings/notifications", label: "Notifications" },
  { to: "/app/admin", label: "Admin console" },
];

export default function AppShell() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <NavLink to="/app" className="brand">
          <span className="brand-mark">T</span>
          Trainora
        </NavLink>
        <div className="side-nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
          <div className="side-section">Settings</div>
          {settingsLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/app/settings"}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </aside>
      <div className="app-main">
        <div className="app-topbar">
          <div>
            <strong>{user?.company || "Workspace"}</strong>
            <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
              {user?.plan ? `${user.plan} plan` : "Trial"}
            </div>
          </div>
          <div className="user-chip">
            <div className="avatar">{(user?.name || "U").slice(0, 1)}</div>
            <div>
              <div>{user?.name}</div>
              <button
                className="btn btn-ghost"
                style={{ padding: 0, fontSize: "0.85rem" }}
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
