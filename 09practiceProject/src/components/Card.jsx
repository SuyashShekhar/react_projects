import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

function Card({image,name,id}) {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={image} alt="" />
        </div>
         <div className='cardName'>
            <h3>{name}</h3>
            <button 
            className='btn'
            >
                <Link to={`/movie/${id}`}>Click me</Link>  
            </button>
         </div>
    </div>
  )
}

export default Card