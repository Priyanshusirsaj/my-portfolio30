
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


function App() {
useEffect(()=>{
Aos.init()
},[])

  return (
    <>
   <Nav/>
   <Home/>
   <Experience/>
   <Skill/>
   <Project/>
   <About/>
   <Contact/>
    </>
  )
}

export default App
