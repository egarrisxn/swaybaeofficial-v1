export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://swaybae-v1.vercel.app/sitemap.xml",
  };
}
