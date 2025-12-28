import React, { useState } from 'react'
import { LiaHomeSolid } from "react-icons/lia";
import { RiShieldUserFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaDiagramProject } from "react-icons/fa6";
import gits from '../assets/githublogo.webp'
import { Link } from 'react-router-dom';
import { FiAlignRight } from "react-icons/fi";
import myLogo from "../assets/myLogo.jpg"

const Nav = () => {
const [open , setOpen ]= useState(-450)

  const handle = ()=>{
   setOpen(0)

  }

  const closeSide = ()=>{
    setOpen(-450)
  }
  return (
    <>
       <div id='nav-shadow' className='md:px-10 px-4 md:py-5 w-full relative ' >
     
      
          <div className='flex justify-between items-center md:py-0 py-5'>
               <div className='left  md:font-bold font-extrabold text-[#9138C7] '>
                  <img src={myLogo} className='md:h-25 rounded-full md:w-25 h-16 w-16'></img>
               </div>
               <div className='h-10 w-20  md:hidden flex gap-4  items-center'>
                  <a href='https://github.com/Priyanshusirsaj' className='h-9 w-9 opacity-60'>
                   <img src={gits}></img>
                  </a>
                  <p className='text-2xl opacity-60' onClick={handle}><FiAlignRight /></p>
               </div>
               <div className='right md:flex hidden'>

               <Link to="/"><a href='#home' className="nav_item flex gap-2 items-center"> <p className='text-xl'><LiaHomeSolid /> </p>Home</a></Link>
               <Link to="/about"><a href='#about' className="nav_item flex gap-2 items-center"> <p className='text-xl'><RiShieldUserFill /></p>About</a></Link>
                <Link to="/skill"><a href='#skills'  className="nav_item flex gap-2 items-center"> <p className='text-xl'><GiSkills /></p>Skills</a></Link>
                <Link to="/project"><a  href='#projects' className="nav_item flex gap-2 items-center"> <p className='text-xl'><FaDiagramProject /></p>Projects</a>  </Link>
                
               {/* <a href='#home' className="nav_item flex gap-2 items-center"> <p className='text-xl'><LiaHomeSolid /> </p>Home</a>
               <a href='#about' className="nav_item flex gap-2 items-center"> <p className='text-xl'><RiShieldUserFill /></p>About</a>
                <a href='#skills'  className="nav_item flex gap-2 items-center"> <p className='text-xl'><GiSkills /></p>Skills</a>
                <a  href='#projects' className="nav_item flex gap-2 items-center"> <p className='text-xl'><FaDiagramProject /></p>Projects</a>                */}
        </div>
          </div>
      </div>

      
      <div className="h-[40%] w-[70%] bg-black md:hidden absolute rounded-4xl mt-7 z-80" id='side' style={{
        top:55,
        right: open,
        transition:'0.3s',
      
      }}>
                 <div className="w-full h-full bg-white rounded-4xl ">
                 <div id='nav-shadow' className='' >        
                            <div className='flex  px-10  justify-around items-left'>
                               
                                     
                                <div className='item-left text-xl text-black font-extrabold md:flex gap-5 mt-7 flex flex-col '>
                                <Link to="/"><a href='#home' className=" flex gap-2 items-center hover:bg-red-500 w-40 px-4 py-2 rounded-2xl"> <p className='text-xl'><LiaHomeSolid /> </p>Home</a></Link>
                                <Link to="/about"><a href='#about' className=" flex gap-2 items-center  hover:bg-red-500 w-40 px-4 py-2 rounded-2xl"> <p className='text-xl'><RiShieldUserFill /></p>About</a></Link>
                                <Link to="/skill"><a href='#skills'  className=" flex gap-2 items-center  hover:bg-red-500 w-40 px-4 py-2 rounded-2xl"> <p className='text-xl'><GiSkills /></p>Skills</a></Link>
                                <Link to="/project"><a  href='#projects' className=" flex gap-2 items-center  hover:bg-red-500 w-40 px-4 py-2 rounded-2xl"> <p className='text-xl'><FaDiagramProject /></p>Projects</a>  </Link>                                                           
                              </div>

                              <div className='text-black mt-6' onClick={closeSide}>
                              ❌
                              </div>
                      </div>
                 </div>
                 </div>
            </div>
    </>
  )
}

export default Nav
