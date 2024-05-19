import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter, setCounter] = useState(0)
   // useSate updates every value where that variable exists

 //let counter = 15

  const addValue = () => {
    if ( counter <= 20 ){
    console.log('Added', counter);
    counter = counter + 1
    setCounter(counter)
    }else{
      console.log('Value reached its limit!');
    }
  }
  const subtractValue = () => {
  
    if (counter > 0){
    counter = counter - 1
    setCounter(counter)
    console.log('Subtracted', counter);
    }else{
      console.log('Value is already ZERO!');
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button><br/>
      <button
      onClick={subtractValue}
      >Subtract value</button>
    </>
  )
}

export default App
