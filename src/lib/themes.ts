// Kenyan campus theme presets
// Each theme overrides the --primary, --ring, --accent, and --warm HSL tokens.

export type CampusTheme = {
  id: string;
  name: string;
  university: string;
  description: string;
  // HSL strings (no hsl() wrapper) so they can be assigned to CSS vars.
  primary: string;
  primaryForeground: string;
  ring: string;
  accent: string;
  accentForeground: string;
  warm: string;
  leaf: string;
  earth: string;
  // Swatches for the picker UI (any CSS color)
  swatches: [string, string, string];
};

export const CAMPUS_THEMES: CampusTheme[] = [
  {
    id: "default",
    name: "Campus Green (Default)",
    university: "Campus Connect",
    description: "The original eco-friendly green & earth palette.",
    primary: "152 45% 38%",
    primaryForeground: "0 0% 100%",
    ring: "152 45% 38%",
    accent: "30 35% 88%",
    accentForeground: "30 20% 20%",
    warm: "38 60% 55%",
    leaf: "120 35% 50%",
    earth: "30 25% 45%",
    swatches: ["#357a56", "#d4a043", "#8f7557"],
  },
  {
    id: "uon",
    name: "Nairobi Blue",
    university: "University of Nairobi (UoN)",
    description: "Deep royal blue inspired by UoN's iconic crest.",
    primary: "221 70% 32%",
    primaryForeground: "0 0% 100%",
    ring: "221 70% 32%",
    accent: "45 90% 55%",
    accentForeground: "221 50% 15%",
    warm: "45 90% 55%",
    leaf: "210 50% 45%",
    earth: "221 30% 40%",
    swatches: ["#1a3a8a", "#f2c14e", "#3a5fbd"],
  },
  {
    id: "ku",
    name: "Kenyatta Maroon",
    university: "Kenyatta University (KU)",
    description: "Bold maroon and gold inspired by KU's colors.",
    primary: "350 65% 30%",
    primaryForeground: "0 0% 100%",
    ring: "350 65% 30%",
    accent: "42 80% 55%",
    accentForeground: "350 50% 15%",
    warm: "42 80% 55%",
    leaf: "20 50% 45%",
    earth: "20 30% 35%",
    swatches: ["#7e1b2e", "#e3b13a", "#a32a44"],
  },
  {
    id: "jkuat",
    name: "JKUAT Tech",
    university: "Jomo Kenyatta University (JKUAT)",
    description: "Modern blue & orange techy palette.",
    primary: "210 80% 35%",
    primaryForeground: "0 0% 100%",
    ring: "210 80% 35%",
    accent: "20 90% 55%",
    accentForeground: "210 60% 15%",
    warm: "20 90% 55%",
    leaf: "180 50% 40%",
    earth: "210 25% 35%",
    swatches: ["#13549d", "#ee6b2a", "#1f7ad6"],
  },
  {
    id: "strathmore",
    name: "Strathmore Navy",
    university: "Strathmore University",
    description: "Sleek navy with sky blue accent.",
    primary: "215 60% 22%",
    primaryForeground: "0 0% 100%",
    ring: "215 60% 22%",
    accent: "200 85% 55%",
    accentForeground: "215 50% 15%",
    warm: "200 85% 55%",
    leaf: "200 45% 45%",
    earth: "215 20% 35%",
    swatches: ["#162e57", "#2bb0e6", "#3a5a8c"],
  },
  {
    id: "moi",
    name: "Moi Green & Gold",
    university: "Moi University",
    description: "Heritage green paired with warm gold.",
    primary: "140 55% 25%",
    primaryForeground: "0 0% 100%",
    ring: "140 55% 25%",
    accent: "44 80% 55%",
    accentForeground: "140 40% 12%",
    warm: "44 80% 55%",
    leaf: "120 40% 40%",
    earth: "40 30% 40%",
    swatches: ["#1d6638", "#e3b53a", "#2e8a4e"],
  },
  {
    id: "egerton",
    name: "Egerton Earth",
    university: "Egerton University",
    description: "Warm earthy reds rooted in agriculture.",
    primary: "12 65% 38%",
    primaryForeground: "0 0% 100%",
    ring: "12 65% 38%",
    accent: "35 70% 55%",
    accentForeground: "12 50% 15%",
    warm: "35 70% 55%",
    leaf: "90 35% 40%",
    earth: "20 35% 35%",
    swatches: ["#a13d22", "#dca155", "#7a6042"],
  },
  {
    id: "mmarau",
    name: "Maasai Mara Gold",
    university: "Maasai Mara University",
    description: "Golden beige with conservation green & brick red accents.",
    primary: "42 65% 45%",
    primaryForeground: "0 0% 100%",
    ring: "42 65% 45%",
    accent: "140 40% 32%",
    accentForeground: "42 60% 95%",
    warm: "12 60% 42%",
    leaf: "140 40% 32%",
    earth: "12 60% 42%",
    swatches: ["#c69a3d", "#2f6b3f", "#9c3a25"],
  },
  {
    id: "tukenya",
    name: "Maasai Red",
    university: "Technical University of Kenya",
    description: "Vibrant Maasai-inspired red & black.",
    primary: "0 70% 38%",
    primaryForeground: "0 0% 100%",
    ring: "0 70% 38%",
    accent: "45 85% 55%",
    accentForeground: "0 50% 15%",
    warm: "45 85% 55%",
    leaf: "120 30% 35%",
    earth: "0 0% 20%",
    swatches: ["#a51d1d", "#ecc043", "#1f1f1f"],
  },
];

const STORAGE_KEY = "campus-theme-id";

export const getStoredThemeId = (): string => {
  if (typeof window === "undefined") return "default";
  return localStorage.getItem(STORAGE_KEY) || "default";
};

export const applyTheme = (themeId: string) => {
  const theme = CAMPUS_THEMES.find((t) => t.id === themeId) || CAMPUS_THEMES[0];
  const root = document.documentElement;
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-foreground", theme.primaryForeground);
  root.style.setProperty("--ring", theme.ring);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-foreground", theme.accentForeground);
  root.style.setProperty("--warm", theme.warm);
  root.style.setProperty("--leaf", theme.leaf);
  root.style.setProperty("--earth", theme.earth);
  root.style.setProperty("--sidebar-primary", theme.primary);
  root.style.setProperty("--sidebar-ring", theme.ring);
  localStorage.setItem(STORAGE_KEY, theme.id);
};
