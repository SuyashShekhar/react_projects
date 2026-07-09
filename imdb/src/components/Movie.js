import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';


function Movie() {
    const {movieId} = useParams();
    const url = `https://imdb-api.com/en/API/Title/k_9r77yjoe/${movieId}`
    const url1 = `https://imdb-api.com/en/API/Trailer/k_9r77yjoe/${movieId}`
     
    const [data,setData] = useState();
    const [trailer,setTrailer] = useState();

    useEffect(() => {
        async function fun1(){
            const response = await axios.get(url);
            setData(response.data)
        }
        fun1()

    },[url])

    useEffect(() => {
        async function fun2(){
            const response = await axios.get(url1);
            setTrailer(response.data)
        }
        fun2()

    },[url1])


  return (


    <div>
        <div className="coverImg">
            <img src={trailer?.thumbnailUrl} alt="cover" className="coverMainimg" />
        </div>

        <div className="movieBody">
            <div className="movieContainer">
                <div className="movieRating">
                    <img src={data?.image} alt="displayPic" />
                    <p>
                        <span>{data?.imDbRating}</span>/10
                    </p>
                </div>
                <div className="movieDescription">
                    <h1>{data?.title}</h1>
                    <p>{data?.year}</p>
                    <p>{data?.genres}</p>
                    <p>{data?.plot}</p>
                </div>
            </div>
            <div className="cast">
                <div className="castHeading">
                    <h1>Cast</h1>
                    <p>cast overview, first billed only</p>
                </div>
                <div className="castName">
                    {data?.actorList?.map((actor)=>(
                          <div>
                          <Link className="actorLink" to={`/actor/${actor.id}`}>
                              <div className="castActors">
                                  <div className="castCircle">
                                      <img src={actor.image} alt="" className="cardImg" />
                                  </div>
                                  <div className="castActorName">
                                      <h2>{actor.name}</h2>
                                      <p>{actor.asCharacter}</p>
                                  </div>
                              </div>
  
                          </Link>
                      </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Movie