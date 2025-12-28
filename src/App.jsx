import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/Nav'
import Home from './component/Home'
import Experience from './component/Experience'
import Skill from './component/Skill'
import Project from './component/Project'
import About from './component/About'
import Contact from './component/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Sidebar from './component/Sidebar'



function App() {
useEffect(()=>{
Aos.init()
},[])

  return (
    <>

    <BrowserRouter>
    <Nav/>
    <Sidebar/>
        <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/skill' element={<Skill/>}></Route>
              <Route path='/project' element={<Project/>}></Route>
        </Routes>
  
        <Contact/>
    </BrowserRouter>
   {/* <Nav/>
   <Home/>
   <Experience/>
   <Skill/>
   <Project/>
   <About/>
   <Contact/> */}
    </>
  )
}

export default App
