"use client";

import ArrowUp from "/assets/arrow-up.png";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-black text-white py-2 px-3 shadow-lg transition-opacity duration-300 opacity-100 hover:opacity-95 font-black"
      >
        <Image src={ArrowUp} alt="arrow up" height={26} width={26} />
      </button>
    )
  );
}
