"use client"
import Image from "next/image";
import { AnimatePresence, useInView } from "framer-motion"
import { Welcome, About, AnimatedDiv, MainPage } from '@/components';
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);

  function handleClick() {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      })
  }

  return (
    <div className="flex flex-row">
      {/* sidebar */}
      {/* <div className="flex flex-col justify-center space-y-4 pl-12 w-[20vw] h-20">
        <div> - test </div>
        <div> - test </div>
        <div> - test </div>
      </div> */}
      <div className="flex flex-col h-[100vh] snap-y overflow-y-scroll scrollbar-hide snap-mandatory w-full">
        <Welcome handleClick={handleClick} />
        <div ref={ref}>
            <MainPage />
        </div>
      </div>
    </div>
  );
}
