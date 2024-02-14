import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import '../index.css'

function Home() {

    const [data, setData] = useState([])

    const url = 'https://api.tvmaze.com/search/shows?q=all/'
     
     useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)
            const response = await res.json()
            setData(response)
        }

        fetchData()
     },[url])



  return (
    <div className='home'>
        {
            data?.map((ele) => (
                <div>
                    <Card image ={ele.show.image?.original} name = {ele.show.name} id = {ele.show.id}/>  
                </div>
               
            ))
        }
    </div>
  )
}

export default Home