import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [showSeconds, setShowSeconds] = useState(0)
  const [showMinutes, setShowMinutes] = useState(0)
  if (showSeconds === 0) {
    setShowSeconds('00')
  } 
  if (showMinutes === 0) {
    setShowMinutes('00')
  }
  return (
    <div className= 'justify-center bg-white m-auto w-[50%] min-h-128 rounded-4xl my-26 shadow-2xl text-black'>
      <h1 className='text-4xl text-center font-bold pt-24 pb-20'>Stop Watch</h1>
      <div className='text-center font-extrabold text-4xl'>
        {showMinutes}:{showSeconds}
      </div>
      <div className='flex justify-center gap-4 my-16'>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl w-40 cursor-pointer hover:bg-indigo-800'>
          Start
        </button>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl w-40 cursor-pointer hover:bg-indigo-800'>
          Continue
        </button>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl w-40 cursor-pointer hover:bg-indigo-800'>
          Stop
        </button>
      </div>
    </div>
  )
}

export default App
