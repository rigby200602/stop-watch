import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className= 'justify-center bg-white m-auto w-[50%] min-h-128 rounded-4xl mt-26 shadow-2xl'>
      <h1 className='text-2xl text-center text-black my-auto'>Stop Watch</h1>
    </div>
  )
}

export default App
