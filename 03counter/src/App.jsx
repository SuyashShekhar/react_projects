import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // function increment(){
   // counter = counter + 1;  when we write like this then value of counter increases but it is not updated on UI
   // or our webpage. 


   // we can solve this problem using js. 1st method using js - 
  //  counter = counter + 1;
  //  const span = document.getElementById('span')
  //  span.innerHTML = counter;
  //   console.log(counter)

    // but here we have to give id then selec then change innerHTML . means we have to do lot of work
    // if we have counter at many places then it is very lengthy to select each element and update innerHTML
    // so here comes the use of hooks.
    // We can use useState hook which is used to update the value of counter 
    // variable wherever it is used in our application in sigle go when state changes. State changes means if we
    // click then UI propagates along with UI, useState also propagates and its setCounter method updates counter
    // value every time.
    // So it saves our time.
  // }

  //useState creation-
  let [counter, setCounter] = useState(0);  // 0 is by default value of counter variable
  // we can give [], {}, string, num, true, false as default value
  // setCounter is a method which updates the value of counter variable whenever states changes.
  // we can give any name to counter variable and setCounter method.

  function increment(){
    if(counter < 20){
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // if we write like this then also counter increases only 1 not 4, because useState do the work in a batch
      // useState has a batch of all this and all are same so it is done only once.

      //but we can do this by writing like this
      // setCounter accepts callback function using this we can fetch previous updated value of counter
      // we can give any name for ex - prevCounter or counter itself
      // (prevCounter) "in this part we have value of previous updated value" => prevCounter + 1
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(counter => counter + 1)  // we can give any name but give one name everywhere it looks good
      setCounter(counter => counter + 1)

      // now value is increases by 4
      // jab callback ke through hota hai to ek callback complete ho jata hai tab doosra call hota hai isliye 
      // value increase ho jati hai jitni bar chahe

      document.getElementById('invalid').innerHTML = ""
    }
    else{
        document.getElementById('invalid').innerHTML = "Can't increment value is greter than 20"
    }  
  }

  function decrement(){
    if(counter > 0){
      setCounter(counter - 1)
      document.getElementById('invalid').innerHTML = ""
    }
    else{
      document.getElementById('invalid').innerHTML = "Can't decrement value is less than 0"
  }  
    
}
  

// it is not working don't know why. Find it?
  // const btn = document.getElementById('decrement');
  // btn.addEventListener('click',fun)

  // function fun(){
  //   setCounter(counter - 1)
  // }
 
  

  return (
    <>
       <h1>React Hooks</h1>
       {/* <p>Counter : <span id='span'>0</span></p> */}
       <p>Counter : {counter}</p>
       <button onClick={increment}>Increment {counter}</button> <br />
       <button onClick={decrement}>Decrement {counter}</button> <br />
       <span id='invalid'></span>
    </>
  )
}

export default App
