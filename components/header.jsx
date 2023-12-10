import React from 'react'
import Link from 'next/link'
import { Slide } from 'react-swift-reveal'

const Header = () => {
    return (
        <Slide duration={2000} left={true}>
            <header className='w-[100vw]'>
                <ul className='flex px-10 items-center h-[80px] bg-gradient-to-br from-gray-800 via-slate-800to-gray-950 to-30%'>
                    <div className="left flex justify-start">
                        <li className='mx-5 text-white opacity-40 hover:opacity-95 transition-all duration-700'>
                            <Link className='text-lg' href={"/"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 "><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></Link>
                        </li>
                    </div>

                    <div className="right flex w-full justify-end">
                        <li className='mx-3 text-white opacity-40 hover:opacity-95 transition-all duration-700'>
                            <Link className='text-base' href={"/projects"}>Projects</Link>
                        </li>


                        <li className='mx-3 text-white opacity-40 hover:opacity-95 transition-all duration-700'>
                            <Link className='text-base' href={"/contact"}>Contact</Link>
                        </li>
                    </div>
                </ul>
            </header>
        </Slide>
    )
}

export default Header