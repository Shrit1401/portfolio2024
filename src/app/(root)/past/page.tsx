"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Past } from "@/lib/types";
import { getPast } from "@/lib/server";

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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow mt-4 px-4 mb-8">
        <Link
          href="/"
          className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
        >
          shrit.
        </Link>
        <div className="mt-10 px-4">
          <h1 className="text-5xl md:text-5xl font-bold text-center">past</h1>

          <div className="flex flex-col gap-8 mt-10">
            {past.map((project, index) => (
              <>
                <div
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
                </div>
                {index !== past.length - 1 && (
                  <div className="border-b-2 opacity-50 border-white/20" />
                )}{" "}
              </>
            ))}
          </div>
        </div>
      </main>
      <div className="px-4">
        <Footer />
      </div>
    </div>
  );
};

export default PastPage;
