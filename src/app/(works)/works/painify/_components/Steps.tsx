import React from "react";

const PainifySteps = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-4xl text-white">Step {title}</h1>
      <p className="text-white/50 w-96">{desc}</p>
    </div>
  );
};

export default PainifySteps;
