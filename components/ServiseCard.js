import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const card ={ 
  hover:{ 
    scale:[1,1.1 ],
    

    
    
  }
}
const ServiseCard = ({service }) => {
  return (
    <motion.div
    variants={card}
    whileHover="hover"

    className='flex flex-1 flex-col my-5 p-10 bg-white text-black gap-5 items-center rounded-xl text-center roun shadow-lg shadow-gray-500/50 '>
      <Image 
      src={service.imageSrc}
      width={100} 
      height={100}
      className='rounded-full'
      
      /> 
      <h3> 
        {service.title} 
      </h3> 
      <p> 
        {service.explination}
      </p> 
    <h3 className='text-teal-600'> 
        {service.toolsTitle}
    </h3>
    <ul> 
        { 
        service.tools.map(ele=><li key={ele}> 
            {ele}
        </li>)}
    </ul>
    </motion.div>
  )
}

export default ServiseCard
