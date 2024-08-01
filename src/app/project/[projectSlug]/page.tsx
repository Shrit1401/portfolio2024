"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import sampleImg from "../../../../public/samplenews.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { useParams } from "next/navigation";
import { getProject } from "@/lib/serveractions";
import { decodeSlug } from "@/lib/utils";
import { project } from "@prisma/client";

const text = `
  <h1>Hello People</h1>
  <p>I know I am Shrit and it's good.</p>
  <p><br></p>
  <p>I know how are you doing.</p>
`;

const ProjectPage: React.FC = () => {
  const [project, setProject] = React.useState<project>();

  const { projectSlug } = useParams(); // Destructure projectSlug

  React.useEffect(() => {
    const fetchProject = async () => {
      const res = await getProject(projectSlug.toString()); // Use decoded slug
      setProject(res as project);
    };

    if (projectSlug) {
      fetchProject();
    }
  }, [projectSlug]); // Correct dependency

  return (
    <main className="flex flex-col min-h-screen mt-4 px-4">
      <Link
        href="/"
        className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
      >
        Shrit.
      </Link>

      <div className="mt-10 flex flex-col items-center w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-start flex-col gap-3">
            <h1 className="text-5xl font-bold">{project?.name}</h1>
            <p className="text-lg font-bold text-white/50">
              {project?.description}
            </p>
          </div>
          <a
            href={project?.projecturl}
            className="font-bold text-2xl py-5 flex px-10 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            View
            <ArrowUpRight size={36} className="ml-2" />
          </a>
        </div>
        <Image
          src={project?.imgUrl || sampleImg}
          alt="sample"
          width={1200}
          height={800}
          className="mt-5 rounded-lg w-full h-[80vh] object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="mt-10 text-white/90 text-lg px-10">
        <style>
          {`
            h1 {
              font-size: 2.5rem;
              font-weight: bold;
              margin-top: 1.25rem;
              margin-bottom: 0.75rem;
            }
            h2 {
              font-size: 2rem;
              font-weight: bold;
              margin-top: 1.25rem;
              margin-bottom: 0.75rem;
            }
          `}
        </style>
        {project && (
          <div dangerouslySetInnerHTML={{ __html: project.projecturl }}></div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default ProjectPage;
