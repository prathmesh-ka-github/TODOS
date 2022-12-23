import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Mucho from './Components/Mucho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Mucho/>
    </div>
  )
}

export default App
