import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar />
      
      <main>
        <h1>Creando un Navbar generico</h1>
      </main>
    </>
  )
}

export default App
