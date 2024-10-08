"use client";

import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Past } from "@/lib/types";
import { getPast } from "@/lib/server";
import Header from "@/components/Header";

const PastPage = () => {
  const [past, setPast] = useState<Past[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPast = async () => {
      try {
        const pastData = await getPast();
        console.log(pastData);
        setPast(pastData);
      } catch (err) {
        setError("Failed to fetch past projects.");
        console.error(err);
      }
    };

    fetchPast();
  }, []);

  if (error || past == undefined) return <div>{error}</div>;

  return (
    <>
      <Head>
        <title>Past Projects - My Portfolio</title>
        <meta
          name="description"
          content="A list of past projects I have worked on."
        />
        <meta
          name="keywords"
          content="portfolio, past projects, web development, software engineering"
        />
        <meta name="author" content="Shrit Shrivastava" />
      </Head>
      <main className="flex flex-col min-h-screen">
        <section className="flex-grow mt-4 px-4 mb-8">
          <Header />
          <div className="mt-10 px-4">
            <h1 className="text-5xl md:text-5xl font-bold text-center">
              Past Projects
            </h1>
            <div className="flex flex-col gap-8 mt-10">
              {past.map((project, index) => (
                <article
                  key={index}
                  className="flex justify-between items-center text-left"
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="text-4xl text-left font-semibold">
                      {project.title} ·{" "}
                      <span className="text-xl opacity-70">{project.year}</span>
                    </h2>
                    <p className="font-[600] text-base md:text-[1.25rem] text-white/90 flex flex-col gap-5 lowercase md:leading-loose">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2"></div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <div className="px-4">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default PastPage;
