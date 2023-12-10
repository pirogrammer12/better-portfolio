import Link from "next/link";
import { Slide, Fade } from 'react-swift-reveal'
import Blob from "../components/blob";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
      <title>Pirogrammer - Front end Developer</title>
    </Head>

    <Slide bottom={true} duration={2000}>
      <Blob className={"mobile:hidden"}></Blob>
      <main className="cursor-default min-h-[100vh] w-full flex justify-center items-center">
        <div className="wrapper flex justify-center items-center flex-col">
        <Fade duration={1000} delay={1000}>
          <div className="links text-base">
            <Link className="text-white opacity-40 m-4 hover:opacity-95 transition-all duration-700" href={"./projects"}>
              Projects
            </Link>
            <Link className="text-white opacity-40 m-4 hover:opacity-95 transition-all duration-700" href={"./contact"}>
              Contact
            </Link>
          </div>
          </Fade>

          <div
            className="main-content m-10 font-[inter] tracking-tight sm:text-8xl text-4xl"
          >
            Pirogrammer
          </div>

          <Fade duration={1000} delay={1000}>
            <div className="info text-zinc-500 sm:max-w-2xl mx-4 text-center sm:text-base text-sm"> 
              Hi, my name is Prince Yadav. I&apos;m a student freelancing on Fiverr,
              specializing in front-end web development with extensive programming knowledge.
          </div>
          </Fade>
        </div>
      </main>
    </Slide>
    </>
  );
}

export default Home