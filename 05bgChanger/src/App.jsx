import {useState} from 'react'

function App() {

       
      
       function fun(){
        document.body.style.backgroundColor = "red"
      }
      
      // using useState
      const [color,setColor] = useState('gray')
      document.body.style.backgroundColor = color  // to select complete body

  return (
    <>
        <div className="container">
              <button className="bg-red-500  text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick={fun}>
                  Red
              </button>
              <button className="bg-blue-500  text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick={() => (document.body.style.backgroundColor = "blue")}>
                  Blue
              </button>
              <button className="bg-green-500  text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick = {()=> setColor('green')}>
                  Green
              </button>
              <button className="bg-purple-500  text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick = {()=> setColor('purple')}>
                  Purple
              </button>
              <button className="bg-yellow-500  text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick = {()=> setColor('yellow')}>
                  Yellow
              </button>
              <button className="bg-white-500  text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick = {()=> setColor('white')}>
                  White
              </button>
              <button className="bg-black  text-white font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick = {()=> setColor('black')}>
                  Black
              </button>
              <button className="bg-pink-500  text-gray-800 font-semibold py-2 px-8 border border-gray-400 rounded shadow mr-5" onClick = {() => setColor('pink')}>
                  Pink
              </button>
        </div>
    </>
  )
}

export default App
