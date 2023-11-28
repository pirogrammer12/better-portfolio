import Link from "next/link";
import { Slide } from 'react-swift-reveal'
import Blob from "../components/blob";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
      <title>Pirogrammer - Front end Developer</title>
    </Head>

    <Slide bottom={true} duration={2000}>
      <Blob></Blob>
      <main className="cursor-default min-h-[100vh] w-full flex justify-center items-center">
        <div className="wrapper flex justify-center items-center flex-col">
          <div className="links text-base">
            <Link className="text-white opacity-40 m-4 hover:opacity-95 transition-all duration-700" href={"./projects"}>
              Projects
            </Link>
            <Link className="text-white opacity-40 m-4 hover:opacity-95 transition-all duration-700" href={"./contact"}>
              Contact
            </Link>
          </div>

          <div
            className="main-content m-10 font-[inter] tracking-tight text-8xl"
          >
            Pirogrammer
          </div>

          <div className="info max-w-2xl text-base opacity-50">
            Hi, my name is Prince Yadav. I&apos;m a student freelancing on Fiverr,
            specializing in front-end web{" "}
            <span className="flex w-2xl justify-center">
              {" "}
              development with extensive programming knowledge.
            </span>
          </div>
        </div>
      </main>
    </Slide>
    </>
  );
}

export default Home