
import './App.css'
import Home from './components/Home'
import Movie from './components/Movie'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/movie/:movieId',
      element:<Movie/>
    }
  ])

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
