import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [] = useState(15)

  let [counter, setCounter] = useState(15)    // here the value of the counter = 15, which is written in the useState's () 
  // let counter = 15     // this value is not shown in UI so it is not useable here

  const addValue = () => {
    console.log("clicked",counter);     // in this code we update the value but not changes in UI . In this senary React comes and if we update the value in one places it changes in every where in the code. and this come done by HOOKS
    if (counter < 20)
      counter = counter + 1;
    setCounter(counter)
    console.log("after clicked",counter); 
  }

  const decreaseValue = () => {
    console.log("clicked",counter);   //it is only for showing result in the console
    // counter = counter - 1;
    if(counter > 0)
      setCounter(counter - 1)
    console.log("after clicked",counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br></br>
      <button
      onClick={decreaseValue}
      >Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
