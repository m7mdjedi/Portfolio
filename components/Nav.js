import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const Nav = (props) => {
  return (
    <nav className="w-full text-center flex justify-between items-center py-5 ">
    <div className="">
      <h1 className=" text-3xl font-bold md:text-3xl ">Portfolio</h1>
    </div>
    <div className="flex flex-1  justify-end  gap-5 items-center">
      <BsFillMoonStarsFill onClick={props.onClick} className=" text-2xl  cursor-pointer" />
      <button className="btn ">Resume</button>
    </div>
  </nav>
  )
}

export default Nav
