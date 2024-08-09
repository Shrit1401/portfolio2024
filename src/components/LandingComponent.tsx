import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../public/me/1.png";
import img2 from "../../public/me/2.png";
import img3 from "../../public/me/3.png";
import img4 from "../../public/me/4.png";
import img5 from "../../public/me/5.png";

const LandingComponent = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("You're in! 🎉");
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto mt-3 md:mt-10 mb-10 md:mb-0">
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
            I started developing at 11, creating a random websites that nobody
            saw. But that&apos;s where my passion for building things began.
            Since then, I&apos;vewebsites, apps, games, and designs plugins,
            hardware tools anything which i think is cool.
          </p>
          <p>
            Now, I&apos;ve made over 80 tools, all free and open-source on{" "}
            <a
              href="https://github.com/Shrit1401"
              className="link"
              target="_blank"
            >
              GitHub
            </a>
            —everything is there, no filter.
          </p>
          <p>
            I&apos;ve built tons of tools, including{" "}
            <a
              href="https://www.clientbase.io"
              className="link"
              target="_blank"
            >
              ClientBase
            </a>{" "}
            (helping agencies manage their clients easily), had a sort-of
            meeting with Dell’s CEO, visited Adobe’s office for a hackathon,
            gained 10+ personal clients generating over ₹1 lakh in revenue, and
            was part of S5 in Buildspace.
          </p>
          <p>
            There&apos;s a bunch more stuff like this—scroll down to see my
            projects, some I&apos;m proud of, others not so much.{" "}
            <a href="https://x.com/shrit1401" className="link" target="_blank">
              I&apos;m also very active on X.
            </a>
          </p>
          <p>
            I&apos;ve won many awards at school and soon became the nerdy guy
            who knows how to handle computers. You can check out some photos:)
          </p>
          <p>
            I like to write about what I&apos;m building, my learnings, and life
            advice (lol) each week. If you want these in your inbox, drop your
            email below. It takes a lot of effort to write these, so a little
            reading wouldn’t hurt, right?
          </p>
          <iframe
            src="https://shrit.substack.com/embed"
            className="rounded-lg border-white"
            scrolling="no"
          ></iframe>
          {message && <p className="mt-2 text-white">{message}</p>}
        </div>
        <div className="md:w-1/2 md:flex flex-col gap-4 hidden">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-black rounded-lg overflow-hidden relative">
              <Image
                src={img1}
                alt="Young me at my birthday party"
                fill
                className="object-cover object-top"
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
                fill
                className="object-cover object-bottom"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full font-semibold text-center filter backdrop-blur-md">
                My hair isn&apos;t like this
              </div>
            </div>
          </div>
          <div className="bg-black rounded-lg overflow-hidden relative flex-1">
            <Image
              src={img3}
              alt="A talk with Michael Dell (CEO of Dell)"
              fill
              className="object-cover"
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
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full font-semibold text-center filter backdrop-blur-md">
                Adobe office
              </div>
            </div>
            <div className="bg-black rounded-lg overflow-hidden relative">
              <Image
                src={img5}
                alt="All of my awards, for flexing"
                fill
                className="object-cover"
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
