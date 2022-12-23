import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Mucho from './Components/Mucho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl text-blue-900 font-bold underline">
        TODOS APP
      </h1>
      <Nav />
      <Mucho />
    </div>
  )
}

export default App
