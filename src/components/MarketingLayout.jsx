import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./layouts.css";

export default function MarketingLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <header className="site-header">
        <div className="container site-header-inner">
          <NavLink to="/" className="brand">
            <span className="brand-mark">T</span>
            Trainora
          </NavLink>
          <nav className="nav-links">
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/customers">Customers</NavLink>
            <NavLink to="/company">Company</NavLink>
          </nav>
          <div className="nav-actions">
            {isAuthenticated ? (
              <NavLink className="btn btn-primary" to="/app">
                Open app
              </NavLink>
            ) : (
              <>
                <NavLink className="btn btn-ghost" to="/login">
                  Log in
                </NavLink>
                <NavLink className="btn btn-primary" to="/demo">
                  Book a demo
                </NavLink>
              </>
            )}
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: "0.75rem" }}>
              <span className="brand-mark">T</span>
              Trainora
            </div>
            <p>Marketing tech for teams that train, govern, and ship AI models.</p>
          </div>
          <div>
            <h4>Product</h4>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/integrations">Integrations</NavLink>
            <NavLink to="/security">Security</NavLink>
          </div>
          <div>
            <h4>Learn</h4>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/docs">Docs</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/changelog">Changelog</NavLink>
          </div>
          <div>
            <h4>Get started</h4>
            <NavLink to="/signup">Start free trial</NavLink>
            <NavLink to="/demo">Request demo</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/status">System status</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
