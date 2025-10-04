export const navItems = [
  {
    label: "Settings",
    id: 1,
  },
  {
    label: "Billing & usage",
    id: 2,
  },
  {
    label: "Manage Plan",
    id: 3,
  },
];

export const currentPlan = {
  id: "free",
  name: "Acme Free",
  description: "Great for trying out Acme.",
  status: "Current",
};

export const upgradePlan = [
  {
    id: "basic",
    name: "Acme Basic",
    description: "More minutes, fewer limits.",
    price: "$249",
    status: "Upgrade",
  },
  {
    id: "pro",
    name: "Acme Pro",
    description: "Flexibility, scale, and branding.",
    price: "$499",
    status: "Upgrade",
    features: [
      "500k minutes included",
      "Upload custom branding",
      "Charge on a monthly basis",
    ],
  },
  {
    id: "enterprise",
    name: "Acme Enterprise",
    description: "Custom solutions for large teams.",
    isEnterprise: true,
    status: "Talk to sales",
    features: [
      "Custom minutes included",
      "Enhanced tables for workspaces",
      "Automated user-groups",
    ],
  },
];
