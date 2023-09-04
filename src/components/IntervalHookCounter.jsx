import { useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  
  useEffect(() => {
    //If you need to specify a function in the useEffect hook, always define it inside the useEffect hook
    const interval = setInterval(tick, 1000)
  
    return () => {
      clearInterval(interval)
    }
  }, [])
  

  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter