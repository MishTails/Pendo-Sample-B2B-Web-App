export default function PageHeader({ title, subtitle, actions }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        alignItems: "flex-start",
        marginBottom: "1.25rem",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle ? <p style={{ margin: 0 }}>{subtitle}</p> : null}
      </div>
      {actions ? <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>{actions}</div> : null}
    </div>
  );
}
