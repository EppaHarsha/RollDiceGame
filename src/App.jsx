import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'
import Home from './components/Home'
import PlayGame from './components/PlayGame'
function App() {
  const[isStarted,setIsStarted]=useState(false);
  const handleStart=()=>{
      setIsStarted((prev)=>!prev);
  }
  return (
    <>
    {isStarted ?  <PlayGame/> :  <Home  handleStart={handleStart}/> }
    </>
  )
}

export default App

