import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect( () => {
    //    fetch('https://api.github.com/users/RiteshPatil06')
    //    .then(response => response.json())
    //    .then(data => {
    //     console.log(data);
    //     setData(data)
    //    })
    //  }, [])

  return (
    <div className='text-centre m-4 bg-orange-700 text-white p-4 text-3xl'>
      Github follwers: {data.followers}
    <img className="flex flex-wrap justify-between items-center mx-auto px-4 border-white" 
      src={data.avatar_url} alt='git profile pic' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RiteshPatil06')
    return response.json()
}
