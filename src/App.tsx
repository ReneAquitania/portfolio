import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './sections/Header'
import Header from './sections/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header></Header>
  )
}

export default App
