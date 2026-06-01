import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "./lib/seo-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Rahul Prakash",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    scope: "/",
  };
}
