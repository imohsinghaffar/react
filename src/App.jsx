import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Contact from './components/Contact'
import ProductTable from './components/ProductTable'

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar title = "My React App" /><Home/></>
  },
  {
    path:"/home",
    element:<><Navbar title = "My React App" /><Home/></>
  },
  {
    path:"/about",
    element:<><Navbar title = "My React App" /><About/></>
  },
  {
    path:"/news",
    element:<><Navbar title = "My React App" /><News/></>
  },
  {
    path:"/contact",
    element:<><Navbar title = "My React App" /><Contact/></>
  },
])
  return (
    <>
    
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
