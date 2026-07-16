console.log("hello world");

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 249,
    blurb: "For growth teams training their first marketing models.",
    features: ["2 model workspaces", "50k training events/mo", "Email support"],
  },
  {
    id: "growth",
    name: "Growth",
    price: 799,
    blurb: "Scale campaign intelligence across channels and regions.",
    features: ["10 model workspaces", "500k training events/mo", "Audience sync", "SSO"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    blurb: "Custom SLAs, private training clusters, and dedicated success.",
    features: ["Unlimited workspaces", "Private VPC training", "Audit logs", "TAM"],
  },
];

export const solutions = [
  {
    slug: "propensity",
    title: "Propensity Training",
    summary: "Train models that predict who will convert, renew, or churn.",
  },
  {
    slug: "creative-scoring",
    title: "Creative Scoring",
    summary: "Teach AI which creative variants win by segment and channel.",
  },
  {
    slug: "audience-expansion",
    title: "Audience Expansion",
    summary: "Generate lookalike cohorts from your highest-value customers.",
  },
  {
    slug: "lifecycle-orchestration",
    title: "Lifecycle Orchestration",
    summary: "Coordinate nurture sequences with continuously retrained policies.",
  },
];

export const campaigns = [
  { id: "cmp-104", name: "Q3 Enterprise Upsell", status: "Live", lift: "+18%", channel: "Email + Ads" },
  { id: "cmp-105", name: "Trial-to-Paid Nurture", status: "Training", lift: "—", channel: "Lifecycle" },
  { id: "cmp-106", name: "Winback APAC", status: "Draft", lift: "—", channel: "Email" },
];

export const models = [
  { id: "mdl-21", name: "Conversion Propensity v4", status: "Ready", accuracy: "91.2%", updated: "2d ago" },
  { id: "mdl-22", name: "Creative Ranker EU", status: "Training", accuracy: "—", updated: "4h ago" },
  { id: "mdl-23", name: "Churn Sentinel", status: "Needs data", accuracy: "84.0%", updated: "1w ago" },
];

export const audiences = [
  { id: "aud-9", name: "High-intent SaaS buyers", size: "48,210", freshness: "Synced today" },
  { id: "aud-10", name: "Expansion-ready accounts", size: "6,402", freshness: "Synced yesterday" },
  { id: "aud-11", name: "Trial abandoners", size: "19,884", freshness: "Stale (6d)" },
];

export const integrations = [
  { id: "salesforce", name: "Salesforce", category: "CRM", status: "Connected" },
  { id: "hubspot", name: "HubSpot", category: "CRM", status: "Available" },
  { id: "segment", name: "Segment", category: "CDP", status: "Connected" },
  { id: "snowflake", name: "Snowflake", category: "Warehouse", status: "Available" },
  { id: "ga4", name: "Google Analytics 4", category: "Analytics", status: "Available" },
  { id: "meta", name: "Meta Ads", category: "Ads", status: "Needs auth" },
];

export const blogPosts = [
  {
    slug: "closed-loop-training",
    title: "Closed-loop training for marketing AI",
    excerpt: "How revenue teams keep models honest with production feedback.",
  },
  {
    slug: "feature-stores-for-marketers",
    title: "Feature stores marketers can actually use",
    excerpt: "A practical guide to shared signals across campaigns and models.",
  },
  {
    slug: "governance-without-friction",
    title: "Governance without friction",
    excerpt: "Approvals, audit trails, and brand-safe generation in one workflow.",
  },
];

export const docsGuides = [
  { slug: "quickstart", title: "Platform quickstart", time: "8 min" },
  { slug: "dataset-prep", title: "Prepare training datasets", time: "12 min" },
  { slug: "campaign-hooks", title: "Campaign event hooks", time: "10 min" },
  { slug: "sso-setup", title: "Configure SSO", time: "6 min" },
];
