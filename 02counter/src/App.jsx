import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15

  const addValue = () => {
    console.log("clicked",counter);     // in this code we update the value but not changes in UI . In this senary React comes and if we update the value in one places it changes in every where in the code. and this come done by HOOKS
    counter = counter + 1;
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br></br>
      <button>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
