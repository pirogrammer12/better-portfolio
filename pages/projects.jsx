import React from "react";
import { Fade } from "react-swift-reveal";
import Header from "../components/header";
import Blob from "../components/blob";
import Head from "next/head";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Pirogrammer</title>
      </Head>

      <Header />
      <Blob />

      <Fade duration={1000} bottom={true}>
        <main className="flex flex-col justify-center">
          <h1 className="my-4 font-semibold flex flex-col lg:flex-row lg:justify-center items-center w-[100vw] text-6xl">
            Projects <small className="text-2xl my-3 mx-2">(Webd Only)</small>
          </h1>

          <div className="projects my-10 lg:mx-10 mx-4 lg:grid lg:grid-rows-2 lg:grid-cols-3 flex lg:flex-row flex-col gap-8">
            <div className="project hover:border-white/80 duration-500 opacity-70 hover:opacity-100 p-2 lg:p-4 border border-zinc-600/50 rounded-lg h-[20rem]">
              <h2 className="text-5xl text-center my-8">This Site</h2>
              <p className="text-white/80 mx-2 text-center">
                I developed this site using Next.js, incorporating features such
                as animations, a captivating landing page, and an emphasis on
                delivering a stellar user experience.
              </p>
              <div className="buttons my-8 flex gap-8 justify-center">
                <Link
                  href={"https://github.com/pirogrammer12/better-portfolio"}
                  target="_blank"
                >
                  <button className="bg-gray-600 hover:bg-gray-800 hover:scale-105 p-3 rounded-md duration-300">
                    Github
                  </button>
                </Link>
              </div>
            </div>

            <div className="project hover:border-white/80 duration-500 opacity-70 hover:opacity-100 p-2 lg:p-4 border border-zinc-600/50 rounded-lg h-[20rem]">
              <h2 className="text-5xl text-center my-8">Spotify Clone</h2>
              <p className="text-white/80 mx-2 text-center">
                Enhance your Spotify clone experience with a curated selection
                of pre-defined songs. This platform was meticulously crafted
                during my early days of learning JavaScript.
              </p>
              <div className="buttons my-8 flex gap-8 justify-center">
                <Link
                  href={"https://github.com/pirogrammer12/Spotify-Clone/"}
                  target="_blank"
                >
                  <button className="bg-gray-600 hover:bg-gray-800 hover:scale-105 p-3 rounded-md duration-300">
                    Github
                  </button>
                </Link>
                <Link
                  href={"https://spotifyofclone.netlify.app"}
                  target="_blank"
                >
                  <button className="bg-gray-600 hover:bg-gray-800 hover:scale-105 p-3 rounded-md duration-300">
                    Live Demo
                  </button>
                </Link>
              </div>
            </div>

            <div className="project hover:border-white/80 duration-500 opacity-70 hover:opacity-100 p-2 lg:p-4 border border-zinc-600/50 rounded-lg h-[20rem]">
              <h2 className="text-5xl text-center my-8">Typing Test</h2>
              <p className="text-white/80 mx-2 text-center">
                Streamlined website evaluates typing skills, measuring WPM and
                accuracy. Provides detailed typing proficiency analysis.
                Enriching web development experience.
              </p>
              <div className="buttons my-8 flex gap-8 justify-center">
                <Link
                  href={"https://github.com/pirogrammer12/typing-Test/"}
                  target="_blank"
                >
                  <button className="bg-gray-600 hover:bg-gray-800 hover:scale-105 p-3 rounded-md duration-300">
                    Github
                  </button>
                </Link>
              </div>
            </div>

            <div className="project hover:border-white/80 duration-500 opacity-70 hover:opacity-100 mx-[38px] p-2 lg:p-4 border lg:col-start-2 lg:translate-x-[-4rem] lg:w-[35rem] border-zinc-600/50 rounded-lg h-[20rem]">
              <h2 className="text-5xl text-center my-8">WhatsApp Clone</h2>
              <p className="text-white/80 mx-2 text-center">
                Explore real-time communication with our WhatsApp clone.
                Utilizing Socket.IO, it provides instant messaging for all
                users, fostering a smooth and engaging chat environment.
              </p>
              <div className="buttons my-8 flex gap-8 justify-center">
                <Link
                  href={"https://github.com/pirogrammer12/WhatIsAPP/"}
                  target="_blank"
                >
                  <button className="bg-gray-600 hover:bg-gray-800 hover:scale-105 p-3 rounded-md duration-300">
                    Github
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Fade>
    </>
  );
};

export default Projects;
