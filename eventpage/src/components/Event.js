import React from 'react'

function Event(props) {
  return (
    <div className='event' >
         <img src={props.url} alt="" />
         <h3>{props.name}</h3>
          <div >
          <span> Date: {props.date}</span>
          <span> Time: {props.time}</span>
         </div>
         
         <p>{props.des}</p>
    </div>
  )
}

export default Event


