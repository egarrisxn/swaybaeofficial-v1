export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://swaybaeofficial-v1-egxo.vercel.app/sitemap.xml",
  };
}
