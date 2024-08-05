import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const proj = [
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    href: "/projects/clientbase",
    image: "./me/1.png",
  },
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    image: "./me/1.png",
    href: "/projects/clientbase",
  },
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    image: "./me/1.png",
    href: "/projects/clientbase",
  },
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    image: "./me/1.png",
    href: "/projects/clientbase",
  },
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    image: "./me/1.png",
    href: "/projects/clientbase",
  },
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    image: "./me/1.png",
    href: "/projects/clientbase",
  },
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    image: "./me/1.png",
    href: "/projects/clientbase",
  },
  {
    title: "Clientbase",
    description: "Manage Your PPl Easily",
    image: "./me/1.png",
    href: "/projects/clientbase",
  },
];

const ProjectsFull = () => {
  return (
    <main className="mt-4 px-4">
      <Link
        href="/"
        className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
      >
        shrit.
      </Link>
      <div className="mt-10 mb-5">
        <h1 className="text-5xl md:text-5xl font-bold text-center">projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {proj.map((project, index) => (
            <div
              key={index}
              className="bg-white opacity-100 lowercase hover:opacity-75 cursor-pointer
            duration-700 ease-in-out text-black p-2 shadow-lg flex flex-col items-center"
            >
              <Link href={`/project/${project.href}`} className="w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 object-cover w-full h-64  transform scale-100 transition-transform duration-300"
                />
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <p className="text-center text-lg font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight size={64} strokeWidth={1} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsFull;
