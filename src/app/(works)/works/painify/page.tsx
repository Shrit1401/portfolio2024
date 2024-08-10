import React from "react";
import PainifyLeft from "./_components/Left";
import painifyImage from "@/../public/painify/sideimg.png";
import Image from "next/image";
import PainifySteps from "./_components/Steps";

const page = () => {
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
          desc="write your deepest darkest secrets the thing which hurt you the most your insecurities, (i don’t give a shit about your secrets so i ain’t collecting it)"
        />
        <PainifySteps
          title="2"
          desc="write your goals, imagine yourself as the best person of yourself and write your goals, maybe you wanna build your body, maybe study better, maybe start treating ppl better"
        />
        <PainifySteps
          title="3"
          desc="work on it, and journal it as simple as that, log your progress see statistics oh btw if you skip that for a day i am gonna motivate shit out of you through the secrets you told me (though i even didn’t collect it MAGIC)"
        />
      </div>
      <div className="flex flex-col w-[50%] justify-center  mx-auto space-y-4  items-center">
        <h1 className="text-4xl font-semibold text-white">
          Grow From Your Pain
        </h1>
        <p className="text-white/50 text-lg">
          Work on your self and yourself, push your limits through the secrets
          you tell us, growing from pain is the best way to grow it's a best way
          for you to start getting disciplined, no pain no gain bro
        </p>

        <div className="flex items-center.">
          <input
            type="email"
            placeholder="seriousshrit@gmail.com"
            className="p-2 bg-transparent text-white border-b border-white/50 focus:outline-none flex-grow"
          />
          <button className="ml-4 bg-white text-black px-4 py-2 rounded-md font-medium">
            Join now
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
