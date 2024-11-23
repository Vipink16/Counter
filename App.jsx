// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {

  // let Counter = 0

  let [Counter, setCounter] = useState(0)

  const addValue = () => {
    // console.log("clicked", Counter);
    // Counter = Counter + 1
    setCounter(Counter + 1) 
  }

  const removeValue = () => {
    // console.log("clicked", Counter);
    setCounter(Counter - 1)
    
  }

  return (
    <>
    <div className='parent'>
      <h1>Counter</h1>
      <br />
      <h2>Counter value: {Counter}</h2>
      <br />
      <button onClick={addValue}>Add value: {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {Counter}</button>
      </div>
    </>
  )
}

export default App;
