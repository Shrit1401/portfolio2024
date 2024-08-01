import React from "react";
import sampleImg from "../../../public/samplenews.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

const NewsletterPage = () => {
  return (
    <main className="mt-4 px-4">
      <Link
        href="/"
        className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
      >
        shrit.
      </Link>
      <div className="mt-10 flex flex-col items-center w-full">
        <div className="flex items-center flex-col gap-3">
          <h1 className="text-5xl items-center md:text-5xl font-bold">
            visions
          </h1>
          <p className="text-lg font-bold text-white/50">
            -by shrit - 14 jan 2024
          </p>
        </div>
        <Image
          src={sampleImg}
          alt="sample"
          className="
        mt-5 w-1/3 rounded-lg
        "
        />
      </div>
      <Footer />
    </main>
  );
};

export default NewsletterPage;
