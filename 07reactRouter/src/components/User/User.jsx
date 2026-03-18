import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()//Lets you read dynamic parameters from URL.
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User