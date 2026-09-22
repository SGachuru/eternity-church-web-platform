export type SiteNavigationItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  location: string;
  tagline: string;
  navigation: SiteNavigationItem[];
};

export const defaultSiteConfig: SiteConfig = {
  name: "Eternity Gospel Church",
  location: "Karen, Nairobi",
  tagline: "Gather. Grow. Go.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sermons", href: "/sermons" },
    { label: "Events", href: "/events" },
    { label: "Giving", href: "/giving" },
    { label: "Contact", href: "/contact" },
  ],
};

export async function getSiteConfig(): Promise<SiteConfig> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  try {
    const response = await fetch(`${apiBaseUrl}/api/site`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return defaultSiteConfig;
    }

    const payload = (await response.json()) as Partial<SiteConfig>;

    return {
      ...defaultSiteConfig,
      ...payload,
      navigation: payload.navigation?.length ? payload.navigation : defaultSiteConfig.navigation,
    };
  } catch {
    return defaultSiteConfig;
  }
}
