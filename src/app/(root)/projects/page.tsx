"use client";
import React, { useEffect, useState } from "react";

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
      <main className="flex-grow mt-4 px-4">
        <Link
          href="/"
          className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
        >
          shrit.
        </Link>
        <div className="mt-10 px-4">
          <h1 className="text-5xl md:text-5xl font-bold text-center">
            projects
          </h1>
          <div className="flex flex-col gap-8 mt-10">
            {projects.map((project, index) => (
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

export default ProjectsPage;
