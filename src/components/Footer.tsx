import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white mt-5 py-4 flex flex-col md:flex-row md:justify-between text-center items-center gap-5 md:gap-0 justify-center">
      <h1 className="text-4xl font-bold">shrit.</h1>
      <ul className="flex md:space-x-4 flex-col md:flex-row items-center text-center">
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <Link href="/">Home</Link>
        </li>
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <Link href="/past">past</Link>
        </li>
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <Link href="/projects">projects</Link>
        </li>
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <Link href="https://x.com/shrit1401" target="_blank">
            twitter
          </Link>
        </li>
      </ul>
      <Link
        href="https://shrit.substack.com"
        target="_blank"
        className="font-bold p-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors hover:bg-white/60 focus:outline-none duration-200 ease-in-out"
      >
        get my mails
      </Link>
    </footer>
  );
};

export default Footer;
