import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5) // setCounter or anynameCounter is a method. This will set counter at all places, hence reacting to the name denoted and implementing function.
  // let counter = 5;
  const addValue = ()=>{
    setCounter(counter + 1)
  }
  const decreaseValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>
    
    <button
    onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={decreaseValue}>Decrease value</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
