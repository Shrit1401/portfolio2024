import { ChevronRight } from "lucide-react";
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
];

const Newsletters = () => {
  return (
    <section className="mt-2 md:mt-10">
      <div className="flex px-4 flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-5xl md:text-5xl font-bold">news.</h1>
        <Link
          href="/news"
          className="text-base md:text-[1.25rem] font-semibold text-white/90 flex link cursor-pointer hover:opacity-50"
        >
          see more <ChevronRight size={24} />
        </Link>
      </div>
      <div className="px-4">
        {news.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="mb-6 hover:bg-white/10 p-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-lg text-white/50 line-clamp">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Newsletters;
