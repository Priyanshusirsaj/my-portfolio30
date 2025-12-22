import React from 'react'
import about from '../assets/aboutimg.png'

const About = () => {
    return(
        <>
  
                <div className="flex flex-col items-center justify-center gap-4 font-sans md:mt-25 mt-20 text-lg" id='about'>
                           <h1 className="text-4xl">Know Who <span className="text-[#9138C7]">I'm</span></h1>
                           <div className=" md:flex md:flex-row flex-col px-9 items-center md:gap-9  justify-center mt-5">
                              <div>
                                    <p className="">
                                    <span className="text-xl">Hi </span>
                                     Everyone ! I'm <span className="text-[#9138C7]">Priyanshu Sirsaj</span> From <span className="text-[#9138C7]">Gondia</span>
                                    <br></br>
                                    <span className="text-[#9138C7]">Maharashtra.</span>
                                    <br></br>
                                    <p>and i am <span className="text-[#9138C7]">21</span> Year old</p>
                                    I'm Currently Pursuing My Bachelors Degree In <span className="text-[#9138C7]">NMD College</span>
                                    <br></br>
                                    <span className="text-[#9138C7]">Gondia.</span>
                                    <br></br>
                                    Outside of Coding, I Love Engaging in activities that keep
                                    <br></br>
                                    Me creative and Inspired :
                                     <br></br>
                                    

                                    <div className="md:my-5 my-8 flex flex-col gap-2">
                                    <p>👉🏻 Plying Game 🎮</p>
                                   <p>👉🏻 Traveling & Exploring New Place 🌎</p>
                                    <p>👉🏻 Watching Anime</p>
                                    </div>

                                   </p>
                              </div>

                           <div>
                                  <img src={about} className=" h-90 w-100 md:my-0 my-10"></img>
                           </div>
                           </div>
                </div>
                
         
        </>
    )
}

export default About
