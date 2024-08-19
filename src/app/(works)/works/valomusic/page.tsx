"use client";
import React, { useState, useRef } from "react";
import { valoData } from "./_components/valodata";
import Image from "next/image";

interface AgentData {
  agent: string;
  image: string;
  musics: string[];
}

const ValoHomePage: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const musicSectionRef = useRef<HTMLDivElement | null>(null);

  const handleAgentSelect = (agent: AgentData) => {
    setSelectedAgent(agent);
    setCurrentSlide(0); // Reset slider to the first slide when a new agent is selected

    // Scroll down to the music section
    if (musicSectionRef.current) {
      musicSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextSlide = () => {
    if (selectedAgent) {
      setCurrentSlide((prev) => (prev + 1) % selectedAgent.musics.length);
    }
  };

  const handlePrevSlide = () => {
    if (selectedAgent) {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + selectedAgent.musics.length) % selectedAgent.musics.length
      );
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen text-white">
      <h1 className="text-7xl font-bold mb-4 text-red-500">
        Welcome to ValoMusic!
      </h1>
      <p className="text-lg mb-8 text-center">
        Discover the music of your favorite Valorant agents.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-red-500">
        Choose an agent:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 w-full max-w-6xl">
        {valoData.map((agent) => (
          <div
            key={agent.agent}
            onClick={() => handleAgentSelect(agent)}
            className="cursor-pointer transform transition-transform hover:scale-105 flex flex-col items-center"
          >
            <Image
              src={agent.image}
              alt={agent.agent}
              width={100}
              height={100}
              className={`rounded-lg ease-in-out transition-all ${
                selectedAgent && selectedAgent.agent === agent.agent
                  ? "border-2 border-dotted border-red-500 p-1"
                  : ""
              }`}
            />
            <p className="mt-2 text-center text-lg font-medium capitalize">
              {agent.agent}
            </p>
          </div>
        ))}
      </div>

      {selectedAgent && (
        <div
          className="w-full p-6 rounded-lg shadow-lg relative"
          ref={musicSectionRef}
        >
          <h3 className="text-2xl capitalize font-semibold mb-4 text-red-500">
            {selectedAgent.agent}&apos;s Music:
          </h3>
          <div className="relative">
            <div
              className="relative flex overflow-hidden rounded-lg"
              style={{ width: "100%", height: "700px" }}
            >
              <iframe
                width="100%"
                height="100%"
                src={selectedAgent.musics[currentSlide]}
                title={`Music ${currentSlide + 1}`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; captions"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            {selectedAgent.musics.length > 1 && (
              <>
                <button
                  onClick={handlePrevSlide}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full shadow-lg z-10"
                >
                  &#9664;
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full shadow-lg z-10"
                >
                  &#9654;
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe1X_iqA5zQsWds9SyWNP9LhonJWdBsLSeMET0orUQhJkaycg/viewform?embedded=true"
        width="640"
        height="672"
        className="bg-white w-full rounded-lg"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ValoHomePage;
