import React from 'react'
import { Zoom } from 'react-swift-reveal'
import Header from '../components/header'
import Blob from "../components/blob";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Projects = () => {
    return (
        <>
            <Head>
                <title>Contact - Pirogrammer</title>
            </Head>
            <Zoom duration={2000}>
                <Blob />
                <Header />
                <main className='h-[100vh] w-[100vw] flex justify-center items-center'>
                    <div className="contact flex justify-center items-center">
                        <Link href={"https://fiverr.com/pirogrammer12"} target='_blank'>
                            <span className="link">
                                <span className="logo h-[60vh] p-10 w-[22vw] hover:border-white hover:opacity-100 border opacity-50 duration-700 border-zinc-400/50 rounded-lg flex flex-col items-center">
                                    <span className=" z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full text-zinc-200 group-hover:text-white border-zinc-500 group-hover:border-zinc-200 drop-shadow-orange">
                                        <Image src={"/logo.png"} height={48} width={48} alt='Fiverr' className='rounded-full'></Image>
                                    </span>
                                    <span className="lg:text-xl my-10 font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">@Pirogrammer12</span>
                                    <h3 className=''>Fiverr</h3>

                                    <span className='mt-10 text-base'>I&apos;m your dedicated front-end expert on Fiverr, ready to tackle any task. Place your order now!</span>
                                </span>
                            </span>
                        </Link>

                        <Link href={"https://mail.google.com"} target='_blank'>
                            <span className="link">
                                <span className="logo mx-20 flex flex-col items-center link h-[60vh] p-10 w-[35vw] duration-700 border rounded-xl hover:border-white text-opacity-50 opacity-50 hover:opacity-100 border-zinc-400/50">
                                    <span className=" z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full text-zinc-200 group-hover:text-white border-zinc-500 group-hover:border-zinc-200 drop-shadow-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail w-12">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </span>
                                    <span className="lg:text-xl my-10  font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">pirogrammer12@gmail.com</span>
                                    <h3>Email</h3>

                                    <small className='mt-10 text-base'>For inquiries outside Fiverr, feel free to email me. I&apos;ll respond promptly.</small>
                                </span>
                            </span>
                        </Link>

                        <Link href={"https://github.com/pirogrammer12"} target='_blank'>
                            <span className="link">
                                <span className="logo flex flex-col items-center link h-[60vh] p-10 w-[22vw] duration-700 border rounded-xl hover:border-white text-opacity-50 opacity-50 hover:opacity-100 border-zinc-400/50">
                                    <span className=" z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full text-zinc-200 group-hover:text-white border-zinc-500 group-hover:border-zinc-200 drop-shadow-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                            </path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </span>
                                    <span className="lg:text-xl my-10 font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">Pirogrammer12</span>
                                    <h3>Github</h3>

                                    <small className='mt-10 text-base'>Explore my GitHub profile for a showcase of my projects.</small>
                                </span>
                            </span>
                        </Link>
                    </div>
                </main>
            </Zoom>
        </>
    )
}

export default Projects