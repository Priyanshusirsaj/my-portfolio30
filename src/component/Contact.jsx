import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import vslogo from "../assets/vslogo.png";
import chrome from "../assets/chroomlogoo.png";
import mac from "../assets/maclogo.webp";


const Contact = () => {
    return (
        <div>
             <div className='flex flex-col items-center gap-12 justify-center mt-24  overflow-hidden'>
                   <h1 className='text-4xl font-semibold'><span className='text-[#9138C7] md:text-5xl font-semibold'>Tools </span> I Usse</h1>
                   <div className='grid md:grid-cols-3  grid-cols-1  gap-8'>
                   <div className='border-2 border-[#9138C7] px-4 py-2 rounded-2xl  text-center cont flex items-center bg-black'> <img src={vslogo} className='h-13 w-20'></img> Vs-Code</div>
                       <div className='border-2 border-[#9138C7] px-4 py-2 rounded-2xl  text-center cont flex items-center bg-black'> <img src={chrome} className='h-10 w-10'></img> Google Chroom</div>
                       <div className='border-2 border-[#9138C7] px-4 py-2 rounded-2xl  text-center cont flex items-center bg-black'> <img src={mac} className='h-14 w-20'></img> Google Chroom</div>
                   </div>
             </div>

            <h1 className='LASTH1  mt-32 md:ml-25 ml-30' id='contact'>CONTACT</h1><br></br>
            <div className='Cont grid place-content-center 'data-aos="zoom-in-up" data-aos-duration="2000" >

       <div className='icon bg-black'>
          <a href='https://github.com/Priyanshusirsaj/Resume_Portfolio_Frontend.git'>
          <SiGithub />
          </a> </div>


       <div className='icon'>
              <a href='https://www.instagram.com/'>
                   <FaInstagram />
              </a>
       </div>


       <div className='icon'>
            <a href='https://x.com/PSirsaj43402'>
                  <FaTwitter />
             </a>
          </div>


       <div className='icon bg-black'>
          <a href='mailto:priyanshusirsaj123@gmail.com' className='gmail bg-black'>
          <GoMail />
          </a>
       </div>


    
       <div className='icon bg-black'>
          <a href='https://www.linkedin.com/in/priyanshu-sirsaj-8862aa36a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='linkedin'>
          <FaLinkedinIn />
          </a>
       </div>
          </div>
          <div className='end'></div>
        </div>
      )
}

export default Contact
