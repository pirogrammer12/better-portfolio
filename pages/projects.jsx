import React from 'react'
import { Fade } from 'react-swift-reveal'
import Header from '../components/header'
import Blob from "../components/blob";
import Project from '@/components/project';
import ContentSlider from '@/components/slider';
import Head from 'next/head';

const SliderPage = () => {
  const content = [
    <div key={1} className="h-[60vh] bg-transparent p-8 rounded-md">
      <Project title="This Site" liveDemo={false} desc="I developed this site using Next.js, incorporating features such as animations, a captivating landing page, and an emphasis on delivering a stellar user experience." githubLink="https://github.com/pirogrammer12/better-portfolio" image={"/Pirogrammer.png"} />
    </div>,

    <div key={2} className="h-[60vh] bg-transparent p-8 rounded-md">
      <Project title="Spotify Clone" liveDemo={true} desc="Spotify clone that have few pre-defined songs." githubLink={"https://github.com/pirogrammer12/Spotify-Clone"} image={"/spotifyclone.png"} demoLink='https://spotifyofclone.netlify.app'/>
    </div>,

    <div key={3} className='h-[60vh] bg-transparent p-8 rounded-md'>
      <Project title="Typing Test" liveDemo={false} desc="Simple website that takes a typing test of the user and displays wpm and accuraccy" githubLink={"https://github.com/pirogrammer12/Typing-Test"} image={"/typingtest.png"} />
    </div>,

    <div key={4} className='h-[60vh] bg-transparent p-8 rounded-md'>
      <Project title="WhatisApp" liveDemo={false} desc="A clone of whatsapp that use socket.io to provide reat time chatting ability to everyone!" githubLink={"https://github.com/pirogrammer12/WhatIsAPP"} image={"/whatisapp.png"} />
    </div>,
  ];

  return (
    <div className="w-full h-full mt-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
      <ContentSlider content={content} />
    </div>
  );
};

const Projects = () => {
  return (
    <>
    <Head>
      <title>Projects - Pirogrammer</title>
    </Head>
    <Fade duration={2000} distance='1000px'>
      <Blob />
      <Header />
      <main className='h-[100vh] w-[100vw] flex justify-center my-10'>
        <SliderPage />
      </main>
    </Fade>
    </>
  )
}

export default Projects