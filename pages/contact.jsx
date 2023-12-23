import React from 'react'
import { Zoom } from 'react-swift-reveal'
import Header from '../components/header'
import Blob from "../components/blob";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact - Pirogrammer</title>
            </Head>
            <Zoom duration={2000}>
                <Blob />
                <Header />
                <main className='overflow-visible h-full lg:h-[70vh] my-20 lg:mx-10 mx-2 w-[100vw] flex flex-col lg:flex-row lg:gap-20 gap-6 justify-center items-center'> 
                    <Link href={"https://fiverr.com/pirogrammer12"} target='_blank' className='lg:h-[30rem] rounded-xl duration-700 h-auto border-2 border-zinc-500/40 hover:border-zinc-600 opacity-50 hover:opacity-90 w-[90%] p-10 lg:w-1/3'>
                            <span className="h-full flex justify-center items-center flex-col">
                                <span className="mb-6 z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full text-zinc-200 group-hover:text-white border-zinc-500 group-hover:border-zinc-200 drop-shadow-orange">
                                    <Image src={"/logo.png"} height={48} width={48} alt='Fiverr' className='rounded-full'></Image>
                                </span>
                                <span className="my-6 text-2xl lg:text-4xl font-semibold font-sans">@Pirogrammer12</span>
                                <h3 className='text-xl my-8'>Fiverr</h3>

                                <small className='text-center text-base'>I&apos;m your dedicated front-end expert on Fiverr, ready to tackle any task. Place your order now!</small>
                            </span>
                    </Link>

                    <Link href={"https://github.com/pirogrammer12"} target='_blank' className='lg:h-[30rem] rounded-xl duration-700 h-auto border-2 border-zinc-500/40 hover:border-zinc-600 opacity-50 hover:opacity-90 w-[90%] p-10 lg:w-1/3'>
                        <span className="h-full flex justify-center items-center flex-col">
                                <span className="mb-6 z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full text-zinc-200 group-hover:text-white border-zinc-500 group-hover:border-zinc-200 drop-shadow-orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                        </path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </span>
                                <span className="my-6 text-2xl lg:text-4xl font-semibold font-sans">Pirogrammer12</span>
                                <h3 className='text-xl my-8'>Github</h3>

                                <small className='text-center text-base'>Explore my GitHub profile for a showcase of my projects.</small>
                        </span>
                    </Link>
                </main>
            </Zoom>
        </>
    )
}

export default Contact