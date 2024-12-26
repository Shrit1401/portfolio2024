import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import img from "../../public/samplenews.png";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "aoe0nnAOo";

const LandingComponent = () => {
  const [email, setEmail] = useState("");
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirm("");

    try {
      const response = await submit({ email });

      if (response) {
        setConfirm("You&apos;re in! 🎉");
      } else {
        setConfirm("Something went wrong.");
      }
    } catch (error) {
      setConfirm("Something went wrong.");
    }
  };

  return (
    <>
      <Head>
        <title>Shrit&apos;s Portfolio</title>
        <meta
          name="description"
          content="Shrit's personal portfolio showcasing projects, experiences, and a newsletter sign-up."
        />
        <meta
          name="keywords"
          content="Shrit, portfolio, projects, coding, newsletter"
        />
        <meta name="author" content="Shrit" />
      </Head>
      <section className="max-w-6xl mx-auto mt-3 md:mt-10 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I&apos;m Shrit.
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 font-[600] text-xl md:text-[1.25rem] text-white/90 flex flex-col gap-5 lowercase md:leading-loose">
            <p>I&apos;m just a guy that loves creating things.</p>
            <p>
              Since I was 7, computers have been my constant passion. It all
              began with playing games on{" "}
              <a
                href="https://www.friv.com/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Friv
              </a>
              , especially Fire Boy and Water Girl. I was instantly hooked.
            </p>
            <p>
              By the time I hit 12, things got serious. I discovered how to
              create basic websites, and that was it — I was addicted! From
              there, I started building websites, apps,{" "}
              <a
                href="https://i.imgur.com/CveUWRS.png"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                attending competitions
              </a>
              , exploring anything I could create with a computer.
            </p>
            <p>
              Now at 18, my obsession with coding and creating hasn&apos;t
              slowed down one bit. But here&apos;s the twist—building{" "}
              <a href="./projects" className="link">
                crazy tools
              </a>{" "}
              is fun, but I quickly realized it&apos;s not enough to keep the
              wheels turning. You need to bring in some cash.
            </p>
            <p>
              Earlier this year, I joined an overseas agency. It was a
              game-changing experience, where I generated over ₹1 lakh in
              revenue for the agency.{" "}
              <a href="./past" className="link">
                Although I eventually moved on
              </a>
              , my passion for creating hasn&apos;t wavered one bit.
            </p>
            <p>
              I even started a YouTube channel to showcase all my wild ideas and
              inventions.
            </p>
            <p>
              I stay connected through my weekly newsletter, where I share
              everything—from what I&apos;m working on, to life lessons and the
              ups and downs of my journey. Want to be a part of it? Drop your
              email below, and I&apos;ll send it straight to your inbox!
            </p>
            <form className="mt-2" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="luffy@gmail.com"
                className="w-full px-3 py-2 bg-black/10 text-white rounded-lg border border-white/30 outline-none placeholder:text-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn mt-2" type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
            {confirm && <p className="mt-2 text-white">{confirm}</p>}

            <Image
              src={img}
              className="rounded-lg md:hidden"
              alt="Shrit's sample news"
            />
          </div>
          <div className="md:w-1/2 md:flex flex-col gap-4 hidden ">
            <Image src={img} className="rounded-lg" alt="Shrit's sample news" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingComponent;
