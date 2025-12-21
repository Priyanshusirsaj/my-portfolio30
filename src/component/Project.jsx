import React from 'react'

const Project = () => {
    return (
        <div className='mt-50  '>
            <h1 className="LASTH1 ml-25" id='projects'>PROJECTS</h1>
    
            {/* // first project */}
    
          <div className='Last0 md:flex-row flex-col flex gap-5 md:ml-70 md:mt-10 items-center mt-10  '>
            <div className='Last9  ' data-aos="flip-right" data-aos-duration="2000" >
                <div className='l22  ml-3 mt-3 bg-black'>
                    <img src='/src/assets/omni.png' className='h-28 ml-10'></img>
                </div>
                <div className='l23  text-center flex flex-col gap-2 w-full '>
                    <h1 className='mt-2.5'>E-Commerce Site</h1>
                    <p className='ppp'>This Project Make Using HTML CSS JS & Many Libraries.</p>
                    <div>
                       <a href="https://e-commerce-site30.netlify.app/"> <button className='btn11 bg-blue-500 '>Show</button></a>&nbsp;
                        <a href="https://github.com/Priyanshusirsaj/e-commerce-site30"><button className='btn12 bg-yellow-300'>Code</button></a>
                    </div>
                </div>
            </div>
    
    
        {/* // second project */}
    
        <div className='Last9' data-aos="flip-right" data-aos-duration="2000" >
                <div className='l22  ml-3 mt-3  bg-black'>
                    <img src='/src/assets/omni.png' className='h-28 ml-10'></img>
                </div>
                <div className='l23 text-center flex flex-col gap-2 w-full'>
                    <h1 className='mt-2.5'>MarkSheet Generator</h1>
                    <p className='ppp'>This Project Make Using Complete React js</p>
                    <div>
                    <a href="https://marksheet-generator30.netlify.app/"> <button className='btn11 bg-blue-500 '>Show</button></a>&nbsp;
                    <a href="https://github.com/Priyanshusirsaj/marksheet-generator30"><button className='btn12 bg-yellow-300'>Code</button></a>
                    </div>
                </div>
            </div>
    
    
            {/* // third project */}
            <div className='Last9  ' data-aos="flip-right" data-aos-duration="2000" >
                <div className='l22  ml-3 mt-3 bg-black '>
                    <img src='/src/assets/omni.png' className='h-28 ml-10'></img>
                </div>
                <div className='l23 text-center flex flex-col gap-2 w-full'>
                    <h1 className='mt-2.5'>CRUD App</h1>
                    <p className='ppp'>This Project Make with Using Complete React js</p>
                    <div>
                    <a href="https://localstorage-crud-app30.netlify.app/"> <button className='btn11 bg-blue-500 '>Show</button></a>&nbsp;
                    <a href="https://github.com/Priyanshusirsaj/crud"><button className='btn12 bg-yellow-300'>Code</button></a>
                    </div>
                </div>
            </div>
    
          </div>
        </div>
      )
}

export default Project
