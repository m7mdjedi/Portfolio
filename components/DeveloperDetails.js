import Image from 'next/image'
import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import {motion } from 'framer-motion'
const DeveloperDetails = () => {
  return (
    <div className="flex p-10 text-center my-[50px] flex-col justify-center items-center  gap-5 ">
    <h1 className="text-3xl lg:text-5xl font-medium text-teal-600">Mohammad Aljedi</h1>
    <p className="font-bold lg:text-3xl ">Developer and designer.</p>
    <p className="max-w-xl mx-auto text-center leading-8">
      Freelancer providing services for programming and design contaent
      needs. Join me down below and let's get cracking!
    </p>
    <div className="flex  gap-16 justify-between my-10 items-center">
    <motion.div whileHover={{scale:[1,1.1]}}> <AiFillTwitterCircle className="text-5xl cursor-pointer" /></motion.div>
    <motion.div whileHover={{scale:[1,1.1]}}>     <FaLinkedin className="text-5xl cursor-pointer" /></motion.div>
     <motion.div whileHover={{scale:[1,1.1]}}>   <IoLogoYoutube className="text-5xl cursor-pointer" /></motion.div>
  
    
    </div>
    <div className=''>
      <Image
        src="/static/p.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full  shadow-lg shadow-teal-600"
      />
    </div>
  </div>
  )
}

export default DeveloperDetails
