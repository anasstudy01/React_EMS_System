import React from 'react'

 
            // "data.active": 2,
            // "data.newTask": 1,
            // "data.completed": 1,
            // "data.failed": 0
const TaskListNumber = ({data}) => {
  return (<>
    <div className=' flex w-screen justify-content-between gap-5'>
        <div className='p-10 w-[45%] bg-red-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>

        </div>
      
        <div className='p-10 w-[45%] bg-blue-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>

        </div>
      
        <div className='p-10 w-[45%] bg-green-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>

        </div>
      
        <div className='p-10 w-[45%] bg-yellow-300 text-center rounded-xl py-5 ' >
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>

        </div>
      
    </div>
  </>
  )
}

export default TaskListNumber