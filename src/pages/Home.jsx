import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
   <div className='flex flex-col items-center justify-center h-screen text-center'>
    <h2 className='text-3xl font-bold'> Welcome to Notes</h2>
    <p className='text-gray-600 mt-2'>Click to see notes</p>
    <Link to="/notes" className='mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Notes</Link>
   </div>
  )
}

export default Home