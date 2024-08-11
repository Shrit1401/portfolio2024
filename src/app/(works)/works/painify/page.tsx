import React from "react";
import PainifyLeft from "./_components/Left";
import painifyImage from "@/../public/painify/sideimg.png";
import Image from "next/image";
import PainifySteps from "./_components/Steps";

const Page = () => {
  return (
    <main className="pb-8">
      <div className="h-[100vh] w-full flex">
        <PainifyLeft />
        <Image
          src={painifyImage}
          alt="Painify Image"
          className="w-1/2 flex-0 object-cover mx-auto"
          priority
        />
      </div>

      <div className="flex justify-around items-start p-16">
        <PainifySteps
          title="1"
          desc="Spill the tea on your deepest, darkest secrets—the stuff that keeps you up at night, your insecurities. (Don’t worry, I’m not nosy, so your secrets are safe... because I’m not even collecting them!)"
        />
        <PainifySteps
          title="2"
          desc="write your goals, imagine yourself as the best person of yourself and write your goals, maybe you wanna build your body, maybe study better, maybe start treating ppl better"
        />
        <PainifySteps
          title="3"
          desc="Time to get to work! Journal your journey like a boss, track your progress, and feel awesome. Oh, and if you slack off, don’t worry—I’ll ‘gently’ remind you using those secrets you spilled earlier. (Just kidding, I’m not that evil… or am I?!)"
        />
      </div>

      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        className="w-full h-[90vh]"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FQCTqEw4eNCxdKODeaXWYrG%2FPainify%3Fnode-id%3D11-28%26t%3DFYEfp57TcD6YJxur-1"
      ></iframe>
      <div className="flex flex-col w-[50%] justify-center mx-auto space-y-4 items-center">
        <h1 className="text-4xl font-semibold text-white">
          Grow From Your Pain
        </h1>
        <p className="text-white/50 text-lg">
          Work on yourself, push your limits through the secrets you tell us.
          Growing from pain is the best way to grow. It’s the best way for you
          to start getting disciplined. No pain, no gain, bro.
        </p>

        <div className="flex items-center">
          <input
            type="email"
            placeholder="seriousshrit@gmail.com"
            className="p-2 bg-transparent text-white border-b border-white/50 focus:outline-none flex-grow"
          />
          <button className="ml-4 bg-white text-black px-4 py-2 rounded-md font-medium">
            Join Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
