import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [showSeconds, setShowSeconds] = useState(0)
  const [showMinutes, setShowMinutes] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  
  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setShowSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setShowMinutes((prevMinutes) => prevMinutes + 1)
            return 0
          }
          return prevSeconds + 1
        })
      }, 1000)
    } else if (!isRunning && showSeconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true);
  }
  const handleContinue = () => {
    setIsRunning(true)
  } 
  const handleStop = () => {
    setIsRunning(false)
  };
  const handleReset = () => {
    setIsRunning(true)
    setShowSeconds(0)
    setShowMinutes(0)
  }

  return (
    <div className= 'justify-center bg-white m-auto w-[50%] min-h-128 rounded-4xl my-26 shadow-2xl text-black'>
      <h1 className='text-4xl text-center font-bold pt-24 pb-20'>Stop Watch</h1>
      <div className='text-center font-extrabold text-4xl'>
        {showMinutes}:{showSeconds}
      </div>
      <div className='flex justify-center gap-4 my-16'>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl lg:w-40 w-24 cursor-pointer hover:bg-indigo-800'
        onClick={handleStart}>
          Start
        </button>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl lg:w-40 w-24 cursor-pointer hover:bg-indigo-800'
        onClick={handleContinue}>
          Continue
        </button>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl lg:w-40 w-24 cursor-pointer hover:bg-indigo-800'
        onClick={handleStop}>
          Stop
        </button>
        <button className='bg-indigo-600 text-white font-bold px-auto py-4 rounded-2xl lg:w-40 w-24 cursor-pointer hover:bg-indigo-800'
        onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
