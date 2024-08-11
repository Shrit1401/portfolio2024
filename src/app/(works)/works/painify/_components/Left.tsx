import React from "react";
import Image from "next/image";
import painifyLogo from "@/../public/painify/painifyLogo.svg";

const PainifyLeft = () => {
  return (
    <div className="flex flex-col md:h-[100vh] justify-between w-full md:w-[45%] p-6 md:p-8 space-y-8">
      <Image src={painifyLogo} alt="Painify Logo" className="w-32 md:w-40" />

      <div className="flex flex-col space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Grow From Your Pain
          </h1>
          <p className="text-white/50 text-base md:text-lg">
            Work on yourself and push your limits through the secrets you tell
            us. Growing from pain is the best way to grow; it&#39;s the best way
            for you to start getting disciplined. No pain, no gain, bro.
          </p>

          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="seriousshrit@gmail.com"
              className="p-2 bg-transparent text-white border-b border-white/50 md:w-auto w-full focus:outline-none md:flex-grow"
            />
            <button className="mt-4 md:mt-0 md:ml-4 bg-white text-black px-4 py-2 rounded-md font-medium">
              Join now
            </button>
          </div>
          <h1 className="text-xl md:text-2xl md:text-left text-center font-semibold text-white mt-4 md:mt-0">
            Scroll Down to see more
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PainifyLeft;
