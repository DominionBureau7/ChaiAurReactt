import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/card"


function App() {
  return (
    <h1 className="bg-green-400 text-black p-4 rounded-xl">
      Tailwind Working 🚀
      <Card />
      <Card />
    </h1>
  )
}


export default App
