import { News } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Newsletters = ({ news }: { news: News[] }) => {
  return (
    <section className="max-w-6xl mx-auto mt-3 md:mt-10 mb-10 md:mb-0">
      <header className="flex px-4 flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-5xl md:text-5xl font-bold">Past News</h1>
        <Link
          href="/news"
          className="text-base md:text-[1.25rem] font-semibold text-white/90 flex link cursor-pointer hover:opacity-50"
        >
          See More <ChevronRight size={24} />
        </Link>
      </header>
      <div className="px-4">
        {news.map((item, index) => (
          <article
            key={index}
            className="mb-6 hover:bg-white/10 p-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer"
          >
            <Link
              href={item.url ? item.url : `/${item.slug.current}`}
              target={item.url ? "_blank" : "_self"}
            >
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-lg text-white/50 line-clamp">
                {item.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Newsletters;
