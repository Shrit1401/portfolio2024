"use client";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import image1 from "@/../public/painify/goals.png";
import image2 from "@/../public/painify/home.png";
import image3 from "@/../public/painify/secrets.png";
import image4 from "@/../public/painify/welcome.png";

const originalImages = [image1, image2, image3, image4];
const images = [...originalImages, ...originalImages, ...originalImages]; // Triple the images for smoother looping

export const PainifySlider = () => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const offsetWidth = (containerRef.current as HTMLElement)?.offsetWidth;
      setContainerWidth(offsetWidth);
      setImageWidth(offsetWidth / 5); // Show 5 smaller images at a time
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    let lastTime = 0;
    const animate = (time: number) => {
      if (time - lastTime > 100) {
        // Increased to 100ms for slower animation
        setTranslateX((prevTranslateX) => {
          const newTranslateX = prevTranslateX - 0.2; // Reduced to 0.2 for much slower movement
          if (-newTranslateX >= imageWidth * originalImages.length) {
            // Reset when one set of original images has scrolled
            return prevTranslateX + imageWidth * originalImages.length;
          }
          return newTranslateX;
        });
        lastTime = time;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [imageWidth]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      ref={containerRef}
    >
      <div
        className="flex h-full transition-transform duration-100 ease-linear"
        style={{
          transform: `translateX(${translateX}px)`,
          width: `${images.length * imageWidth}px`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="h-full flex-shrink-0 flex justify-center items-center"
            style={{ width: `${imageWidth}px` }}
          >
            <div
              className="relative h-3/4"
              style={{ width: "calc(100% - 1rem)" }}
            >
              <Image
                src={img}
                alt={`Slide ${(index % originalImages.length) + 1}`}
                layout="fill"
                objectFit="contain"
                className="px-2 border border-white/50 rounded-[0.5rem]"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#161616] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#161616] to-transparent z-10"></div>
    </div>
  );
};
