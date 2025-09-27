export default function manifest() {
  return {
    name: "Sway Bae",
    short_name: "Sway Bae",
    description: "The OLD online space for Sway Bae & The Bae Squad!",
    id: "/",
    start_url: "/",
    theme_color: "#5176a6",
    background_color: "#5176a6",
    orientation: "any",
    display: "standalone",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
