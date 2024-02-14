import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

// react-router-dom provides outlet iska kaam yeh hai ki ishe hum jaha use karenge uske upar niche ki chize same rahengi
// aur outlet ki jagah hum kch bhi use kr sakte hai.
// Jaise hum chahte hai hamari website mai header footer har page mai same ho aur bich ka content badalta rahe
// To hum bich mai "outlet " likh denge upar niche same rahega bich mai hum koi bhi component use kr sakenge


// we don't need to create new file we can do the same thing in app.jsx also
function Layout() {
  return (
    <>
       <Header/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout