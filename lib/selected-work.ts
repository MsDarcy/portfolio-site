/** Case study cards — shared by the homepage and /work. */
export const selectedWorkCards = [
  {
    href: "/work/api-onboarding",
    title: "API Partner Onboarding",
    description:
      "Structured a legacy Open Banking onboarding path into progressive intake—less manual coordination, faster time to integration.",
  },
  {
    href: "/work/performance-dashboard",
    title: "Performance Intelligence Dashboards",
    description:
      "Turned backend telemetry into self-service views so product owners could monitor API health without engineering extracts.",
  },
  {
    href: "/work/rbac-governance",
    title: "Enterprise Governance & RBAC",
    description:
      "Defined a tiered permissions model with guardrails so ownership stayed clear and access risk dropped as the platform grew.",
  },
] as const;
