import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className= 'justify-center bg-white m-auto w-[50%] min-h-128 rounded-4xl my-26 shadow-2xl text-black'>
      <h1 className='text-2xl text-center font-bold py-16'>Stop Watch</h1>
      <div className='text-center font-extrabold py-auto text-4xl'>
        00:00
      </div>
    </div>
  )
}

export default App
