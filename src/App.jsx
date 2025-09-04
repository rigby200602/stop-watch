import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className= 'justify-center bg-white m-auto w-[50%] min-h-128 rounded-4xl my-26 shadow-2xl text-black'>
      <h1 className='text-4xl text-center font-bold pt-24 pb-20'>Stop Watch</h1>
      <div className='text-center font-extrabold text-4xl'>
        00:00
      </div>
      <div className='flex justify-center gap-4 my-16'>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl w-40 cursor-pointer'>
          Start
        </button>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl w-40 cursor-pointer'>
          Continue
        </button>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl w-40 cursor-pointer'>
          Stop
        </button>
      </div>
    </div>
  )
}

export default App
