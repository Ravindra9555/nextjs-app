"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/ackground-beams";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const data = [
    {
        "title": "Frontend Development",
        "description": "I build responsive, accessible, and performant web interfaces with modern frameworks and animations.",
        "items": [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",

            "Tailwind CSS",

            "Zustand",
            "Bootstrap",
        ]
    },
    {
        "title": "Backend Development",
        "description": "I develop scalable server-side applications, APIs, and database architectures with security best practices.",
        "items": [
            "Node.js",
            "Express.js",
            "NestJS",

            "REST APIs",
            "GraphQL",
            "WebSockets",
            "MongoDB",
            "PostgreSQL",
            "MySQL",

            "JWT",
            "OAuth"
        ]
    },
    {
        "title": "DevOps & Cloud",
        "description": "I automate deployments, manage cloud infrastructure, and optimize CI/CD pipelines for seamless delivery.",
        "items": [
            "Git",
            "GitHub",
            "GitLab",
            "Docker",

            "AWS",

        ]
    },

    {
        "title": "UI/UX Design",
        "description": "I design intuitive interfaces with user-centric workflows and pixel-perfect attention to detail.",
        "items": [
            "Figma",
            "Canva"
        ]
    },


]

export default function Intro() {
    return (
        <div className=" h-auto md:h-[80rem] sm:h-[160rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-10 sm:mt-20 sm:pt-20">
            <div className="max-w-full mx-auto p-4 text-center sm:pt-20 sm:mt-16">
                <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Full-Stack Developer & UI Enthusiast
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-5  text-center relative z-10 text-xl md:text-2xl">

                    I specialize in <span className="text-white font-medium">React, Next.js, and Node.js</span>, crafting high-performance web apps with pixel-perfect design.
                </p>
                <button className="px-6 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-all">
                    Explore My Projects
                </button>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={data} />
            </div>
            <BackgroundBeams />
        </div>
    );

}