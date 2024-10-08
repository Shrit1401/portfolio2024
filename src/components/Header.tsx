import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-6xl mx-auto">
      <Link
        href="/"
        className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
      >
        shrit.
      </Link>
      <Link
        href="https://shrit.substack.com"
        target="_blank"
        className="font-bold p-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors hover:bg-white/60 focus:outline-none duration-200 ease-in-out"
      >
        get my mails
      </Link>
    </nav>
  );
};

export default Header;
