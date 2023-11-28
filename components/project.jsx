import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = ({ title, desc, githubLink, image }) => {
  return (
    <div className='w-[60vw] h-[60vh] flex items-center'>
      <div className="content w-3/4 h-[50vh] flex flex-col justify-center duration-500 items-center mx-10 border border-zinc-400/50 hover:border-white/100 rounded-xl">
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='m-10 flex justify-center'>{desc}</p>
        <Link href={githubLink}>
          <button className='duration:500 bg-gray-600/50 hover:bg-gray-600 duration-500 p-4 flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <p className='mx-2'>
              Github Link
            </p>
          </button>
        </Link>
      </div>
      <div className="image w-1/4 h-[50vh] flex items-center">
        <Image src={image} alt='Image' className='border-voilet-800/50 border duration-500 hover:border-violet-800 rounded-full' width={200} height={200}></Image>
      </div>
    </div>
  )
}

export default Project