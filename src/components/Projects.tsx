"use cient";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import one from "../../public/me/1.png";

const projects = [
  {
    id: 1,
    name: "project 1",
    description: "a project description",
    imgUrl: one,
  },
  {
    id: 2,
    name: "project 2",
    description: "a project description",
    imgUrl: one,
  },
  {
    id: 3,
    name: "project 3",
    description: "a project description",
    imgUrl: one,
  },
  {
    id: 4,
    name: "project 4",
    description: "a project description",
    imgUrl: one,
  },
  {
    id: 5,
    name: "project 5",
    description: "a project description",
    imgUrl: one,
  },
  {
    id: 6,
    name: "project 6",
    description: "a project description",
    imgUrl: one,
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto mt-3 md:mt-10 mb-10 md:mb-0">
      <div className="flex px-4 flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-5xl md:text-5xl font-bold">projects.</h1>
        <Link
          href="/projects"
          className="text-base md:text-[1.25rem] font-semibold text-white/90 flex items-center link cursor-pointer hover:opacity-50"
        >
          see more <ChevronRight size={24} />
        </Link>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {projects &&
          projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="bg-white opacity-100 lowercase hover:opacity-75 cursor-pointer
            duration-700 ease-in-out text-black p-2 shadow-lg flex flex-col items-center"
            >
              <Link href="" className="w-full">
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={project.imgUrl}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="transform scale-100 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <p className="text-left text-lg font-semibold">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight size={64} strokeWidth={1} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Projects;
