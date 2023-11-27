import React from 'react'
import { Fade } from 'react-swift-reveal'
import Header from '../components/header'
import Blob from "../components/blob";

const Projects = () => {
  return (
    <Fade duration={2000} distance='1000px'>
      <Blob />
      <Header />
      <main className='h-[100vh] w-[100vw] flex justify-center items-center'>
        <h2>Projects</h2>
      </main>
    </Fade>
  )
}

export default Projects