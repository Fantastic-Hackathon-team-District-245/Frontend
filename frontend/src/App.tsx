import { useState } from 'react'
import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
