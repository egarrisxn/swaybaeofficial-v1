const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://swaybaeofficial-v1-egxo.vercel.app/";

export const site = {
  name: "Sway Bae",
  description: "The OLD online space for Sway Bae & The Bae Squad!",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image.png`,
  social: "@sway_baeTV",
};
