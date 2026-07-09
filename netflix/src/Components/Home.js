import React, { useState } from 'react'
import "./Home.scss"
import axios from "axios";
import { useEffect } from 'react';

const apiKey = "a101ad5a9ddc82d11e72dfd19a7fda13"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming";
const onAir = "on-the-air"

const Card = ({img})=>img ? (
    <img
      className="card"
      src={`https://image.tmdb.org/t/p/w500${img}`}
      alt=""
    />
  ) : null;


const Row = ({title, arr = [{
  
}]})=>(

    <div className='row'>
      <h2>{title}</h2>

      <div>
      {
        arr.map((item, index)=>{
         return <Card key={item.id} img = {item?.poster_path}/>
        })
      }
      </div>
      
    </div>
)


function Home() {

  const [upcomingMovies, setUpcoming] = useState([])

  useEffect(() => {
   const fetchUpcoming = async()=>{
     const {data : {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
     console.log(results)
     setUpcoming(results)
   };

   fetchUpcoming()
  }, [])

  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
   const fetchUpcoming = async()=>{
     const {data : {results}} = await axios.get(`${url}/tv/${onAir}?api_key=${apiKey}`)
     console.log(results)
     setTvShows(results)
   };

   fetchUpcoming()
  }, [])
  
  return (
    <section className="home">
      {/* <div className="banner"></div> */}
      <Row title={"Upcoming Movies"} arr = {upcomingMovies}/>
      <Row title={"TV Shows"} arr = {tvShows}/>
      <Row title={"Movies"}/>
      <Row title={"Recently Added"}/>
      <Row title={"My List"}/>
    </section>
  )
}

export default Home