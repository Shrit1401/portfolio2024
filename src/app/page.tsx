"use client";
import React from "react";
import Image from "next/image";
import LandingComponent from "@/components/LandingComponent";
import Newsletters from "@/components/Newsletters";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="p-6">
      <LandingComponent />
      {/* <Projects /> */}
      <Newsletters />
      <Footer />
    </main>
  );
};

export default Home;
