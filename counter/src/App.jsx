import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [ counter, setCounter]=useState(15)
  const Incress= () =>{
    if (counter < 20){
    // counter=counter+1
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    }
  }

  const Decress= () =>{
    if (counter >0){
    counter=counter-1
    setCounter(counter)
    }
  }
  

  return (
    <>
      <h1>alok 1</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={Incress}>Incress value</button>
      <br />
      <button onClick={Decress}>Decress value</button>
    </>
  )
}

export default App
