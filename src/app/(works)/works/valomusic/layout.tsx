import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";
import "swiper/swiper-bundle.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shrit.in"),
  title: "ValoMusic",

  description:
    "Welcome to ValoMusic! Discover the music of your favorite Valorant agents.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shrit.in",
    title: "ValoMusic - Music from Valorant Agents",
    description:
      "Welcome to ValoMusic! Discover the music of your favorite Valorant agents.",
    images: [
      {
        url: "https://www.shrit.in/meta/valoogimg.png",
        width: 1200,
        height: 630,
        alt: "Music of Valorant Agents",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@valomusic",
    title: "ValoMusic",
    description:
      "Welcome to ValoMusic! Discover the music of your favorite Valorant agents.",
    images: [
      {
        url: "https://www.shrit.in/meta/valoogimg.png",
        alt: "Music of Valorant Agents",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://www.shrit.in" />
        <meta
          property="og:image"
          content={"https://www.shrit.in/meta/valoogimg.png"}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Music of Valorant Agents" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ValoMusic" />
        <meta
          name="twitter:description"
          content="Welcome to ValoMusic! Discover the music of your favorite Valorant agents."
        />
        <meta
          name="twitter:image"
          content={"https://www.shrit.in/meta/valoogimg.png"}
        />
        <meta name="twitter:image:alt" content="Music of Valorant Agents" />
        <link rel="canonical" href="https://www.shrit.in" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="369e35b2-80fb-48ed-a840-9a68246a3c68"
        ></script>
      </head>
      <body className={`${dm_sans.className} painify`}>{children}</body>
    </html>
  );
}
