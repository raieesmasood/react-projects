import React, { useEffect, useState } from 'react'
import './styles/index.css'
import Background from './Components/Background/Background.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
const App = () => {
  let heroData =[
    {text1:"Dive into", text2: "what you love"},
    {text1:"Indulge", text2: "your passions"},
    {text1:"Give in to", text2: "your passions"}
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true)

  useEffect(()=>{
    setInterval(()=>{   setHeroCount((count)=>{return count===2?0: count+1})
  },3000);
},[])
 
  return (
    <div className='container'>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar />
     <Hero
     setPlayStatus={setPlayStatus} 
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
     />
    </div>
  )
}

export default App

