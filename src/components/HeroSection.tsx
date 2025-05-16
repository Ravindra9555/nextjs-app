"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "motion/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,

  IconBrandLinkedin,
  IconMail
} from "@tabler/icons-react";
const HeroSection = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Ravindra",
      className: "text-blue-500 dark:text-blue-500",
    },

    // {
    //   text: "Potfolio.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:ravindraietbu@gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ravindra9555",
    },
  ];

  return (
    <div className=" h-screen md:h-[60rem] sm:h-[80rem]  w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 h-auto" fill="blue" />
      <div className="p-4 relative z-10 w-full  text-center">
        <div className=" flex items-center justify-center mt-10 md:mt-10">
          <TypewriterEffectSmooth words={words} />
        </div>


        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Explore my projects, skills, and experience as a passionate developer.
          Discover how I build modern web applications and creative solutions.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium hover:shadow-lg transition-all">
            View My Work →
          </button>
        </motion.div>

        <div className="flex items-center justify-center  w-full mt-10">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
