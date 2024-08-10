import React from "react";
import Image from "next/image";
import painifyLogo from "@/../public/painify/painifyLogo.svg";

const PainifyLeft = () => {
  return (
    <div className="flex flex-col justify-between h-full w-[35%] p-8 space-y-8">
      <Image src={painifyLogo} alt="Painify Logo" />

      <div className="flex flex-col space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-white">
            Grow From Your Pain
          </h1>
          <p className="text-white/50 text-lg">
            Work on your self and yourself, push your limits through the secrets
            you tell us, growing from pain is the best way to grow it's a best
            way for you to start getting disciplined, no pain no gain bro
          </p>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="seriousshrit@gmail.com"
              className="p-2 bg-transparent text-white border-b border-white/50 focus:outline-none flex-grow"
            />
            <button className="ml-4 bg-white text-black px-4 py-2 rounded-md font-medium">
              Join now
            </button>
          </div>
          <h1 className="text-2xl font-semibold text-white">
            Scroll Down to see more
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PainifyLeft;
