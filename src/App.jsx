import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'


// write a function to return greatest number in an array
function greatestNumber(arr:any) {
  return Math.max(..arr)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
