import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = ({ title, liveDemo, desc, githubLink, image, demoLink = "" }) => {
  return (
    <div className='lg:w-screen flex items-center'>
      <div className="content p-2 flex lg:w-[80vw] h-[20rem] lg:h-[23rem] flex-col duration-500 items-center lg:mx-10 mx-2 border border-zinc-400/50 hover:border-white/100 rounded-xl">
        <h1 className='my-10 font-bold text-center text-4xl lg:text-6xl'>{title}</h1>
        <p className='m-2 lg:mx-10 lg:mt-4 text-base text-center flex justify-center'>{desc}</p>
        <div className="links flex flex-col lg:flex-row">
          <Link href={githubLink} target='_blank'>
            <button className='m-4  duration:500 bg-gray-600/50 hover:bg-gray-600 duration-500 lg:p-4 p-3 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <p className='mx-2'>
                Github Link
              </p>
            </button>
          </Link>

          {liveDemo && (
            <>
              <Link href={demoLink} target='_blank'>
                <button className='m-4 duration:500 bg-gray-600/50 hover:bg-gray-600 duration-500 lg:p-4 p-3 flex'>
                  <p className='mx-2'>
                    Live Demo
                  </p>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="lg:flex md:flex hidden image w-1/4 h-[50vh] items-center">
        {/* <Image src={image} alt='Image' className='' width={200} height={200}></Image> */}
        {' '}
        {liveDemo && (
          <Link href={demoLink} target='_blank'>
            <Image
              src={image}
              alt=""
              className={`hover:border-4 border-violet-700/50  duration-500 hover:border-violet-800 ${(image == "/Pirogrammer.png") ? "rounded-full" : "rounded-lg"}`}
              width={200}
              height={200}
              priority
            />
          </Link>
        )}

        {!liveDemo && (
          <Link href={githubLink} target='_blank'>
          <Image
            src={image}
            alt=""
            className={`hover:border-4 border-violet-700/50  duration-500 hover:border-violet-800 ${(image == "/Pirogrammer.png") ? "rounded-full" : "rounded-lg"}`}
            width={200}
            height={200}
            priority
          />
        </Link>
        )}

      </div>
    </div>
  )
}

export default Project