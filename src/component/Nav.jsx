import React from 'react'
import { LiaHomeSolid } from "react-icons/lia";
import { RiShieldUserFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaDiagramProject } from "react-icons/fa6";
import gits from '../assets/githublogo.webp'

const Nav = () => {
  return (
    <>
       <div id='nav-shadow' className='px-10' >
     
      
          <div className='flex justify-between items-center'>
               <div className='left md:text-4xl text-3xl md:font-bold font-extrabold text-[#9138C7]'>PS.</div>
               <div className='h-10 w-10 opacity-50 md:hidden'>
                  <a href='https://github.com/Priyanshusirsaj'>
                   <img src={gits}></img>
                  </a>
               </div>
               <div className='right md:flex hidden'>
                
               <a href='#home' className="nav_item flex gap-2 items-center"> <p className='text-xl'><LiaHomeSolid /> </p>Home</a>
               <a href='#about' className="nav_item flex gap-2 items-center"> <p className='text-xl'><RiShieldUserFill /></p>About</a>
                <a href='#skills'  className="nav_item flex gap-2 items-center"> <p className='text-xl'><GiSkills /></p>Skills</a>
                <a  href='#projects' className="nav_item flex gap-2 items-center"> <p className='text-xl'><FaDiagramProject /></p>Projects</a>               
        </div>
          </div>
      </div>
   
    </>
  )
}

export default Nav
