import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const news = [
  {
    title: "week #1",
    description:
      "Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.",
    href: "/week-1",
  },
  {
    title: "week #2",
    description:
      "Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.",
    href: "/week-2",
  },
  {
    title: "week #1",
    description:
      "Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.",
    href: "/week-1",
  },
  {
    title: "week #2",
    description:
      "Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.",
    href: "/week-2",
  },
  {
    title: "week #1",
    description:
      "Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.",
    href: "/week-1",
  },
  {
    title: "week #2",
    description:
      "Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.Figma ipsum component variant main layer. Inspect underline clip align vertical. Scale blur image polygon resizing clip share select project. Align vector connection layout flows layer polygon. Community figma image flatten vector italic. Italic align arrange.",
    href: "/week-2",
  },
];

const NewsFullPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow mt-4 px-4">
        <Link
          href="/"
          className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
        >
          shrit.
        </Link>
        <div className="mt-10">
          <h1 className="text-5xl md:text-5xl font-bold text-center">news</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {news.map((item, index) => (
              <Link key={index} href={item.href}>
                <div className="mb-6 border border-white/10 hover:bg-white/10 p-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-lg text-white/50 line-clamp">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <div className="px-4">
        <Footer />
      </div>
    </div>
  );
};

export default NewsFullPage;
