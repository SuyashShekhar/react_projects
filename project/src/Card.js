import React from 'react'
import './card.css'
function Card({text,img, rating, text2, hash}) {
  return (
    <>
          <div className='container'>
           <div className='img'>
              <img src={img} alt="yoga"/>
           </div>
                
                <div className='text_part'>
                    <p className='text'>{text}</p>
                    <p className='price'>$3.99</p>
                </div>
                <div className='circle_size'>
                    <div className="circle">
                        <p className='p1'> </p>
                        <p className='p2'> </p>
                        <p className='p3'> </p>
                    </div>
                    <div className='size'>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                    </div>
                </div>
                <div className='rating'>
                    <p>* {rating}</p>
                    <p>BUY +</p>
                </div>
           
        </div>

        <div className='second_box'>
               <div className="text">
                    <p> {text2}</p>
                    <p className='hash'> {hash}</p>
               </div>
               <div className='offer'>
                    20% Off
               </div>
        </div>
    </>
   
  )
}

export default Card