import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"


function SearchResult() {
  const {movie} = useParams();
  const url = `https://imdb-api.com/en/API/Search/k_9r77yjoe/${movie}`;


  const [data, setData] = useState();
    useEffect(()=>{
     async function fun1(){
      try {
        const response = await fetch(url);
        const res = response.json();
        console.log(res)
        setData(res.data.results);
      } catch (error) {
        console.log("hello")
        console.log(error)
      }
        

      }
      fun1();
    },[url])



  return (
    <div className='movieCards'>
      {
        data?.map((card)=>(
          <div className="moviecard">
          <Link to = {`/movie/${card.id}`} className = "movieCardLink">
              <img src={card.image} alt="movie img" className='movieCardImg'/>
              <h1 className='movieCardTitle'>{card.title}</h1>
          </Link>
          </div>
        ))
      }
        

    </div>
  )
}

export default SearchResult