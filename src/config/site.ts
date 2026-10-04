export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    reddit?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Plan B: Terraform Wiki",
  shortName: "Plan B Terraform",
  logoText: "P",
  tagline: "Terraforming Guides, Resources & Colony Strategies",
  description: "Your ultimate guide to Plan B: Terraform! Explore terraforming strategies, resource management, colony building, planet development, and gameplay tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://plan-b-terraform.wiki",
  supportEmail: "support@plan-b-terraform.wiki",
  gameUrl: "https://store.steampowered.com/app/1894430/Plan_B_Terraform/",
  heroVideoId: "QtPeBTa4IUM", // Plan B: Terraform - 1.0 Launch Trailer (Gaddy Games)
  social: {
    discord: "https://discord.com/invite/EGZuBNXGdt",
    youtube: "https://www.youtube.com/@GaddyGames",
    reddit: "https://www.reddit.com/r/PlanBTerraform/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
