import React from "react";
import PainifyLeft from "./_components/Left";
import painifyImage from "@/../public/painify/sideimg.png";
import Image from "next/image";
import PainifySteps from "./_components/Steps";
import { PainifySlider } from "./_components/PainifySlider";

const Page = () => {
  return (
    <main className="pb-8">
      <div className="min-h-[100vh] w-full flex flex-col md:justify-between md:flex-row">
        <PainifyLeft />
        <div className="flex justify-center w-full md:w-[55%]">
          <Image
            src={painifyImage}
            alt="Painify Image"
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-start py-8 px-2 md:p-16 space-y-8 md:space-y-0">
        <PainifySteps
          title="1"
          desc="Spill the tea on your deepest, darkest secrets—the stuff that keeps you up at night, your insecurities. (Don’t worry, I’m not nosy, so your secrets are safe... because I’m not even collecting them!)"
        />
        <PainifySteps
          title="2"
          desc="Write your goals, imagine yourself as the best version of yourself, and write your goals. Maybe you wanna build your body, maybe study better, maybe start treating people better."
        />
        <PainifySteps
          title="3"
          desc="Time to get to work! Journal your journey like a boss, track your progress, and feel awesome. Oh, and if you slack off, don’t worry—I’ll ‘gently’ remind you using those secrets you spilled earlier. (Just kidding, I’m not that evil… or am I?!)"
        />
      </div>

      {/* moving slider of the images */}
      <PainifySlider />

      <div className="flex flex-col w-full md:w-[50%] justify-center mx-auto space-y-4 items-center px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Grow From Your Pain
        </h1>
        <p className="text-white/50 text-base md:text-lg text-center">
          Work on yourself, push your limits through the secrets you tell us.
          Growing from pain is the best way to grow. It’s the best way for you
          to start getting disciplined. No pain, no gain, bro.
        </p>

        <div className="flex flex-col md:flex-row items-center w-full">
          <input
            type="email"
            placeholder="seriousshrit@gmail.com"
            className="p-2 bg-transparent text-white border-b border-white/50 focus:outline-none flex-grow"
          />
          <button className="mt-4 md:mt-0 md:ml-4 bg-white text-black px-4 py-2 rounded-md font-medium">
            Join Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
