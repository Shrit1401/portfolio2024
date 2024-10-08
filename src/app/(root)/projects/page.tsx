"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Project } from "@/lib/types";
import { getProjects } from "@/lib/server";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        console.log(projectsData);

        setProjects(projectsData);
      } catch (err) {
        setError("Failed to fetch projects.");
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  if (error || projects == undefined) return <div>{error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Projects - Shrit</title>
        <meta name="description" content="A list of projects by Shrit." />
        <meta name="keywords" content="Shrit, projects, portfolio" />
        <meta name="author" content="Shrit" />
      </Head>
      <header className="flex items-center justify-between w-full max-w-6xl mx-auto mt-4 px-4">
        <Link
          href="/"
          className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
        >
          shrit.
        </Link>
        <a
          href="https://shrit.substack.com"
          target="_blank"
          className="font-bold p-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors hover:bg-white/60 focus:outline-none duration-200 ease-in-out"
        >
          get my mails
        </a>
      </header>
      <main className="flex-grow mt-10 px-4">
        <article className="w-full max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-5xl font-bold text-center">
            Projects
          </h1>
          <section className="flex flex-col gap-8 mt-10">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-center text-left">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-4xl text-left font-semibold">
                      {project.title} ·{" "}
                      <span className="text-xl opacity-70">{project.year}</span>
                    </h2>
                    <p className="font-[600] text-base md:text-[1.25rem] text-white/90 flex flex-col gap-5 lowercase md:leading-loose">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {project.usefullinks?.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.link}
                        className="link text-xl link font-bold hover:underline text-right"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="border-b-2 opacity-50 border-white/20" />
              </div>
            ))}
          </section>
        </article>
      </main>
      <footer className="px-4">
        <Footer />
      </footer>
    </div>
  );
};

export default ProjectsPage;
