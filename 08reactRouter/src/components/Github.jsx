import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //  const [data,setData] = useState([])
    // useEffect(()=>{
    //    fetch('https://api.github.com/users/SuyashShekhar')
    //    .then((res)=> res.json())
    //    .then((data) => {console.log(data)
    // setData(data)})
    // },[])
    

    // another method to fetch data at the time of loading only
    const data = useLoaderData(); // it is used to get the data from returned object

    // html_url, login are keys in githubapi which we can see in our console because i have done console.lod(data)
    // so it shows complete object
  return (
    <div>
        <h1>Github</h1>
        <div className='flex bg-gray-500'>
            <div className='mr-10'>
               <img src={data.avatar_url} alt="image" width={300} height={300}/> 
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', color:'white'}}>
               Github url :  {data.html_url}  <br />
               Github username : {data.login}
            </div>
          
        </div> 
    </div>
  )
}

export default Github

// we can use loader it help to fetch data when only we hover on that link means before clicking github we can 
// fetch data. It optimizes our code.

export const githubInfo = async () => {
    const res = await fetch('https://api.github.com/users/SuyashShekhar');
    return res.json();
}