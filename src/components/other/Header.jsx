import React from 'react'

const Header = ({data=""}) => {
  return (
    <div className='bg-primary text-white p-3 text-2xl font-semibold px-4 bg-blue-200/40
    flex justify-between items-end mb-5'>
        <h1>Employee <br /><span className='text-orange-400 text-3xl'>  {data.firstName}😊</span></h1>
        <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-gray-200'>
          Logout
        </button>
        
        
        
        </div>
  )
}

export default Header