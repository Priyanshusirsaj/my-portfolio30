import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import me from '../assets/Priyanshusirimg.jpeg'
import resume from "../assets/Priyanshu_Resume.pdf";
import newMe from "../assets/me.jpeg";
import Experience from './Experience'
import Skill from './Skill'
import Project from './Project'



const Home = () => {
    const typedRef = useRef(null)
    useEffect(()=>{
        const option ={
            strings:["Welcome to My Profile", "I am Priyanshu Sirsaj","I am a Web Devoloper"],
            typeSpeed:50,
            backSpeed:50,
            loop:true
        };
        const typed = new Typed(typedRef.current,option)
    
    return()=>{
        typed.destroy()
    };},[])

  return (
    <div className='px-9 md:px-0  overflow-hidden'>
           
  <div className='container_home home  flex md:flex-row flex-col justify-between h-90 items-center px-8 ' id="home">
  
    <div className='box_home md:w-130 w-90 md:mb-0 mb-30 h-38'>
    <h1 ref={typedRef}></h1>
    <a href={resume} download><button className='btn1'>Download</button></a>
    </div>

    <div className='right '  >
      <div className='img h-100 md:mt-30 w-70 rounded-lg'>
      <img  src={me} className='h-70 w-70 md:block hidden rounded-full me'></img>
    </div>
    </div>
  </div>
  <div className='flex items-center border-2 border-yellow-100/35  rounded-4xl py-5 justify-center md:hidden md:mb-0 mb-22 -mt-15'>
  <img  src={newMe} alt='Loading....' className='h-80 opacity-90 w-70  block md:hidden rounded-4xl' ></img>
  </div>



  <Experience/>
        <Skill/>
        <Project/>

    </div>
  )
}

export default Home
