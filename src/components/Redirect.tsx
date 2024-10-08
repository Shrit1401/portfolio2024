import { CornerUpLeft, CornerUpRight } from "lucide-react";
import React from "react";

const Redirect = () => {
  return (
    <section className="max-w-6xl flex flex-col md:flex-row gap-5 justify-between mx-auto mt-3 md:mt-10 mb-10 md:mb-0">
      <a
        href="/past"
        className="flex justify-start flex-col gap-4 border border-white/10 p-6 w-full md:w-1/2 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200 ease-in-out"
      >
        <CornerUpLeft size={64} />
        <h1 className="text-5xl font-bold mb-6">View Past</h1>
      </a>
      <a
        href="/projects"
        className="flex justify-end items-end flex-col gap-4 border border-white/10 p-6 w-full md:w-1/2 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200 ease-in-out"
      >
        <CornerUpRight size={64} />
        <h1 className="text-5xl font-bold mb-6">View Projects</h1>
      </a>
    </section>
  );
};

export default Redirect;
