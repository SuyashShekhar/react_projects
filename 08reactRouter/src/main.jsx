import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import User from './components/User.jsx'
import Github, { githubInfo } from './components/Github.jsx'

// createBrowserRouter() is used to create path which takes array. Inside array we can pass object
// const router = createBrowserRouter([
//    {
//     path:'/',  // main element 
//     element:<Layout/>,
//     children : [
//       {
//         path:"",  // at / home element is opened
//         element: <Home/>

//       },
//       {
//         path:"about", // "/" is already their these are children so path become"/about"
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element:<ContactUs/>
//       }
//     ]
//   }
// ])

// another method to create routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<ContactUs/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route 
      loader={githubInfo}
      path='github' 
      element={<Github/>} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    {/* for routing we have to import ReactProvider and pass router  . It is a wrapper*/}
  </React.StrictMode>,
)
