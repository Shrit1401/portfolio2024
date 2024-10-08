import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/app/globals.css";

import "swiper/swiper-bundle.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shrit.in"),
  title: "shrit",

  description:
    "Hey there! I'm Shrit - a developer, designer, and marketer all rolled into one. Come explore my world of awesome creations and let's have some fun!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shrit.in",
    title: "Shrit's Wonderland of Cool Stuff",
    description:
      "Hey there! I'm Shrit - a developer, designer, and marketer all rolled into one. Come explore my world of awesome creations and let's have some fun!",
    images: [
      {
        url: "https://www.shrit.in/meta/og-img.png",
        width: 1200,
        height: 630,
        alt: "Shrit making cool stuff",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shrit1401",
    title: "shrit ",
    description:
      "Hey there! I'm Shrit - a developer, designer, and marketer all rolled into one. I write newsletter each week, telling about what crazy thing i am upto each week",
    images: [
      {
        url: "https://www.shrit.in/meta/og-img.png",
        alt: "Shrit making cool stuff",
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
    <html lang="en" className="lowercase">
      <head>
        <meta property="og:url" content="https://www.shrit.in" />
        <meta
          property="og:image"
          content={"https://www.shrit.in/meta/og-img.png"}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Shrit making cool stuff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shrit." />
        <meta
          name="twitter:description"
          content="Hey there! I'm Shrit - a developer, designer, and marketer all rolled into one. I write newsletter each week, telling about what crazy thing i am upto each week"
        />
        <meta
          name="twitter:image"
          content={"https://www.shrit.in/meta/og-img.png"}
        />
        <meta name="twitter:image:alt" content="Shrit making cool stuff" />
        <link rel="canonical" href="https://www.shrit.in" />
        {/* <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="369e35b2-80fb-48ed-a840-9a68246a3c68"
        ></script> */}
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
