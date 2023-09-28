import { useState } from 'react'
import './App.css'
import ComplimentButton from './Components/ComplimentButton'
import Emojis from './Components/Emojis'

function App() {


  return (
    <div id="container">
      <h1>Mood</h1>
      <Emojis />
      <ComplimentButton />
    </div>
  )
}

export default App
