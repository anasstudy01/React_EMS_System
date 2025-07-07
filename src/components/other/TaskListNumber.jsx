import React from 'react'

const TaskListNumber = () => {
  return (<>
    <div className=' flex w-screen justify-content-between gap-5'>
        <div className='p-10 w-[45%] bg-red-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>

        </div>
      
        <div className='p-10 w-[45%] bg-blue-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>

        </div>
      
        <div className='p-10 w-[45%] bg-green-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>

        </div>
      
        <div className='p-10 w-[45%] bg-yellow-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>

        </div>
      
    </div>
  </>
  )
}

export default TaskListNumber