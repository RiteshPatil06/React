import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch() 

  useEffect( () => {
   authService.getCurrentUser()
   .then( () => {})
   .finally()

  },[])
  return (
    <>
      <h1>hello.</h1>
    </>
  )
}

export default App
