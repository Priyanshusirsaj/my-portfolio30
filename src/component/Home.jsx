import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import me from '../assets/Priyanshusirimg.jpeg'


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
    <div>
           
  <div className='container_home home flex md:flex-row flex-col justify-between h-90 items-center px-8' id="home">
  
    <div className='box_home md:w-130 w-90 md:mb-0 mb-30 h-38'>
    <h1 ref={typedRef}></h1>
    <a href='/src/assets/Priyanshu_Resume.pdf' download={'Priyanshu_resume.pdf'} target='_blank'><button className='btn1'>Download</button></a>
    </div>

    <div className='right '  >
      <div className='img h-70 w-70 rounded-lg'>
      <img  src={me} className='h-70 w-70 rounded-full'></img>
    </div>
    </div>
  </div>
    {/* <Experience/>
    <Skiil/>
    <Project/>
    <p className='md:hidden'><About/></p>
    <Contact/> */}

    </div>
  )
}

export default Home
