import React from "react";

const Footer = () => {
  return (
    <div className="text-white py-4 flex flex-col md:flex-row md:justify-between text-center items-center gap-5 md:gap-0 justify-center">
      <h1 className="text-4xl font-bold">shrit.</h1>
      <ul className="flex md:space-x-4 flex-col md:flex-row items-center text-center">
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <a href="/">Home</a>
        </li>
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <a href="/">news</a>
        </li>
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <a href="https://x.com/shrit1401" target="_blank">
            twitter
          </a>
        </li>
        <li className="lowercase font-semibold text-xl hover:text-[#4AC1F0] duration-200 ease-in-out">
          <a href="https://www.instagram.com/shritaake/" target="_blank">
            instagram
          </a>
        </li>
      </ul>
      <a
        href="/"
        className="font-bold p-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors hover:bg-white/60 focus:outline-none duration-200 ease-in-out"
      >
        get my mails
      </a>
    </div>
  );
};

export default Footer;
