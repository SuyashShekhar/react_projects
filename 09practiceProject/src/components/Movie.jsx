import React, { useEffect, useState } from 'react'
import '../index.css'
import { useParams, Link } from 'react-router-dom'

function Movie() {
   const {movieId} = useParams()
   const [data, setData] = useState([])

   const url = `https://api.tvmaze.com/search/shows?q=all/`
    
    useEffect(() => {
       async function fetchData(){
           const res = await fetch(url)
           const response = await res.json()
           console.log(response)
           setData(response)
       }

       fetchData()
    },[url])

  return (
    <div className='movie'>
        {
            data.map((ele) => {
               if(ele.show.id == movieId)
                   {
                    return (
                        <div className='movieInfo'>
                            <div className='movieImg'>
                                <img src={ele.show.image?.original} alt="" />
                            </div>
                            <div className='movieDetail'>
                                <h1>Summary</h1>
                                 <p>{ele.show.summary}</p>
                                 <div className='movieExtra'>
                                     <p><span>Language</span> : {ele.show?.language}</p>
                                     <p><span>Runtime</span> : {ele.show?.runtime} min</p>
                                     <p><span>Rating</span> : {ele.show.rating?.average}</p>
                                 </div>
                                 <button className='btnExtra'> <Link to={'/'}>Home</Link> </button>
                            </div>
                        </div>
                     )
                   } 
           })
        }
    </div>
  )
}

export default Movie