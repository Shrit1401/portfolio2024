import Image from "next/image";
import React from "react";
import img1 from "../../public/me/1.png";
import img2 from "../../public/me/2.png";
import img3 from "../../public/me/3.png";
import img4 from "../../public/me/4.png";
import img5 from "../../public/me/5.png";

const LandingComponent = () => {
  return (
    <section className="max-w-6xl mx-auto mt-10">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        hi i&apos;m shrit.
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 font-[600] text-base md:text-[1.25rem] text-white/90 flex flex-col gap-5 lowercase md:leading-loose">
          <p>
            I love building new things—or maybe it&apos;s just the warm fuzzy
            feeling when people actually find what I build helpful.
          </p>
          <p>
            I started developing at 11, creating a random website about India
            that nobody saw. But that&apos;s where my passion for building
            things began. Since then, I&apos;ve{" "}
            <a>developed websites, apps, games, and designs.</a>
          </p>
          <p>
            Now, I&apos;ve made over 80 tools, all free and open-source on
            GitHub—everything is there, no filter.
          </p>
          <p>
            I&apos;ve built tons of tools, including ClientBase (helping
            agencies manage their clients easily), had a sort-of meeting with
            Dell’s CEO, visited Adobe’s office for a hackathon, gained 10+
            personal clients generating over ₹1 lakh in revenue, and was part of
            S5 in Buildspace.
          </p>
          <p>
            There&apos;s a bunch more stuff like this—scroll down to see my
            projects, some I&apos;m proud of, others not so much. I&apos;m also
            very active on X.
          </p>
          <p>
            I&apos;ve won many awards at school and soon became the nerdy guy
            who knows how to handle computers. You can check out some photos on
            the right (below on mobile) :)
          </p>
          <p>
            I like to write about what I&apos;m building, my learnings, and life
            advice (lol) each week. If you want these in your inbox, drop your
            email below.
          </p>
          <form className="mt-2">
            <input
              type="email"
              placeholder="luffy@gmail.com"
              className="w-full px-3 py-2 bg-black/10 text-white rounded-lg border border-white/30 outline-none placeholder:text-gray-400"
            />
            <button className="btn">Submit</button>
          </form>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-black rounded-lg overflow-hidden relative">
              <Image
                src={img1}
                alt="Young me at my birthday party"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full font-semibold text-center filter backdrop-blur-md">
                Young me at my birthday party
              </div>
            </div>
            <div className="bg-black rounded-lg overflow-hidden relative">
              <Image
                src={img2}
                alt="My hair wasn't like this"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full font-semibold text-center filter backdrop-blur-md">
                My hair wasn&apos;t like this
              </div>
            </div>
          </div>
          <div className="bg-black rounded-lg overflow-hidden relative flex-1">
            <Image
              src={img3}
              alt="A talk with Michael Dell (CEO of Dell)"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full font-semibold text-center filter backdrop-blur-md">
              A talk with Michael Dell (CEO of Dell)
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-black rounded-lg overflow-hidden relative">
              <Image
                src={img4}
                alt="Adobe office"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full font-semibold text-center filter backdrop-blur-md">
                Adobe office
              </div>
            </div>
            <div className="bg-black rounded-lg overflow-hidden relative">
              <Image
                src={img5}
                alt="All of my awards, for flexing"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full font-semibold text-center filter backdrop-blur-md">
                All of my awards, for flexing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingComponent;
