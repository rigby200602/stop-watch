import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className= 'justify-center bg-white m-auto w-[50%] min-h-128 rounded-4xl my-26 shadow-2xl text-black'>
      <h1 className='text-4xl text-center font-bold py-24'>Stop Watch</h1>
      <div className='text-center font-extrabold text-4xl'>
        00:00
      </div>
      <div className='flex justify-center gap-14 my-16'>
        <button>
          Start
        </button>
        <button>
          Continue
        </button>
        <button>
          Stop
        </button>
      </div>
    </div>
  )
}

export default App
