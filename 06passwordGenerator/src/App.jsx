import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null) // initial value null

  // useCallback() -
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // it is not necessary to use useCallback(), if we don't use then also it works but we use it to make our code
  // optimize because useCallback memorize the few parts of function or complete function and store it in cache
  // so next time when function is executed it uses whatever needed from cache. In this way our code is optimized


  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str = str + "0123456789"
    }
   if(specialCharAllowed){
      str = str + "!@#$%^&*()?~`"
    }

    for(let i =1; i<= length; i++){
        let randomInd = Math.floor(Math.random()*str.length + 1)
        pass  = pass + str.charAt(randomInd);
    }
    
    setPassword(pass)

  },[length,numAllowed,specialCharAllowed,setPassword])


  // useRef -
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering
  // useRef() only returns one item. It returns an Object called current. current initially have initial value
  // which we give 

  // our task is when copy button is clicked, then copyPasswordToClipboard() method is called to copy text from
  // input field and for this window.navigator.clipboard.writeText(password) is used there is no need to use useCallback
  // or useRef. It can be done without using useRef and useCallback but we are doing it to make our code optimize.


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();  // it is used to show selected text in blue color so that user can see ok this much text is selected
    passwordRef.current?.setSelectionRange(0,101);  // it is used to set range how much text you want to show is selected
     window.navigator.clipboard.writeText(password)
  },[password])


  // useEffect -
  // when application is rendered first time then useEffect is executed automatically but next time when any of the
  // dependencies changes it will execute again and do the task specified inside callback function.
  // It is used to fetch data from apis, run functions etc.

  // Here we want to generatePassword when length is changed or numAllowed is changes or specialCHar is changed
  // that's why we use useEffect. 
  useEffect(()=>{
    passGenerator()
  },[length, numAllowed, specialCharAllowed])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-white mb-5 mt-4 text-center'>Password Generator</h1>
          <div className='flex rounded-lg overflow-hidden mb-4 '>
            <input 
               type="text"
               value={password} 
               className='outline-none w-full py-1 px-3'
               placeholder='password' 
               readOnly 
               ref={passwordRef}  // if we use useRef then we have to give reference
            />
            <button className='px-3 py-2 bg-blue-500 text-white hover:bg-gray-500' onClick={copyPasswordToClipboard}>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e) => {setLength(e.target.value)}}
                  />
                  <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={numAllowed}
                      id="numberInput"
                      onChange={() => {
                          setNumAllowed((prev) => !prev); // here we have to write like this because we are changing previous value every time when we check or uncheck checkbox
                      }}
                  />
                  <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input
                      type="checkbox"
                      defaultChecked={specialCharAllowed}
                      id="characterInput"
                      onChange={() => {
                          setSpecialCharAllowed((prev) => !prev )
                      }}
                  />
                  <label htmlFor="characterInput">Characters</label>
              </div>
        </div>
     </div>
    </>
  )
}

export default App
