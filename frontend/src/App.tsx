import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from './router'

function App() {

  return (
      <body className="App">
        <RouterProvider router={router}/>
      </body>
  )
}

export default App
