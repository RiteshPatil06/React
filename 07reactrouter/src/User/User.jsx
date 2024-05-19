import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams() 
  return (
    <div className='bg-orange-700 rounded-md text-white text-3xl p-4'>
      User: {userid}
    </div>
  )
}

export default User;
