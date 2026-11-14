import React, { useEffect, useState } from 'react'


export default function App() {
  let[name, setName] = useState("Syed");
  let[count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1)
    }, 1000)
  }, [count])
  const update = () => {
    setName(name === "Syed"? "Ibrahim": "Syed")
    (setName = "Syed")
  }
  const Inc = () => {
    setCount(count + 1)
  }
  const Dec = () => {
    setCount(count - 1)
  }
  const Zero = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={update}>Click to Change</button>
      <br></br>
      <br></br>
      <h2>The Count is {count}</h2>
      <button onClick={Inc}>Increment</button>
      <br></br>
      <button onClick={Dec}>Decrement</button>
      <br></br>
      <button onClick={Zero}>Zero</button>
    </div>
  )
}
