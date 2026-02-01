"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pill from "@/components/base/pill";

interface FlipPhotoProps {
  conferencePhoto: string;
  catPhoto: string;
  className?: string;
}

export default function FlipPhoto({
  conferencePhoto,
  catPhoto,
  className = "",
}: FlipPhotoProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		// If user prefers reduced motion, don't auto-flip
		if (shouldReduceMotion) {
			return;
		}

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  // For reduced motion, just show the conference photo
  if (shouldReduceMotion) {
    return (
      <div className={`relative ${className}`}>
        <Image
          alt="Profile Picture"
          className="size-12 rounded-full border-2 border-gray-200 object-cover object-top shadow-md md:size-60"
          height={240}
          priority
          quality={100}
          src={conferencePhoto}
          width={240}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="flip-card size-12 md:size-60">
        <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
          {/* Front - Conference Photo */}
          <div className="flip-card-front">
            <Image
              alt="Speaking at Next.js Conf London"
              className="size-12 rounded-full border-2 border-gray-200 object-cover object-top shadow-md transition-colors duration-200 hover:border-violet-500 md:size-60"
              height={240}
              priority
              quality={100}
              src={conferencePhoto}
              width={240}
            />
          </div>
          {/* Back - Cat Photo */}
          <div className="flip-card-back">
            <Image
              alt="My cat Kibby"
              className="size-12 rounded-full border-2 border-gray-200 object-cover object-top shadow-md transition-colors duration-200 hover:border-violet-500 md:size-60"
              height={240}
              quality={100}
              src={catPhoto}
              width={240}
            />
          </div>
        </div>
      </div>
			
      {/* Only show pill on cat photo */}
      {isFlipped && (
        <Pill className="top-5 left-[3.5px] hidden -rotate-40 md:block">
          MY CAT 🐱
        </Pill>
      )}
    </div>
  );
}
