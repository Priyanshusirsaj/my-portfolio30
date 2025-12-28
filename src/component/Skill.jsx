import React from 'react'
import react from '../assets/react.svg'
import git from '../assets/githublogo.webp'
import boot from '../assets/bootstraplogo.webp'

const Skill = () => {
    return (
        <div className='md:my-8 my-20 md:px-5 px-5' >
    
            <h1 className='skill1 md:mx-25  md:my-8 my-8  ' id='skills'>Skills</h1>
    
        {/* // first skill */}
            <div className='imgSk grid place-content-center text-center'>
               <div className='imgL1 bg-black'  data-aos="flip-left" data-aos-duration="2000">
               <div><img  src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png' className='h-25 w-25'/> <p>HTML</p></div></div>
    
                <div className='imgL1 bg-black'  data-aos="flip-left" data-aos-duration="2000" >
                  <div><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png' className='h-25 w-18'/><p>CSS</p></div></div>
            </div>
    
        {/* second skill */}
    
            <div className='imgSk grid place-content-center mt-4 text-center' data-aos="flip-left" data-aos-duration="2000" >
                <div className='imgL1 bg-black' data-aos="flip-left" data-aos-duration="2000" >
                  <div><img className='h-20 w-20' src={react} /><p> React-js</p></div>
                </div>
    
                <div className='imgL1 bg-black'  data-aos="flip-left" data-aos-duration="2000" >
                <div data-aos="flip-left" data-aos-duration="2000" >
                  <img src='https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg' className='h-20 w-25'/><p> Tailwind-css</p></div>
                </div>
            </div>
    
    
            {/* // third skill */}
            <div className='imgSk grid place-content-center mt-4 text-center'>
                <div className='imgL1 bg-black'  data-aos="flip-left" data-aos-duration="2000" > 
                  <div>
                    <img src='https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png' className='h-20 w-20' />
                   <p> Javascript</p>
                    </div> </div>
                <div className='imgL1 bg-black'  data-aos="flip-left" data-aos-duration="2000"  >
                  <div>
                    <img src={git} className='h-20 w-20'/>
                    <p> Github</p>
                  </div>
                 </div>
            </div>
    
            <div className='imgL1 bg-black text-center md:ml-129  md:mt-8 ml-10  mt-8' data-aos="flip-left" data-aos-duration="2000" > 
              <div>
                <img src={boot} className='h-24 w-25'/>
                <p>Bootstrap</p>
                </div></div>
        </div>
      )
}

export default Skill
