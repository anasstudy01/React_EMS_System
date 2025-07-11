import React from 'react'

function NewTask() {
  return (
    <div>  <div className="h-[40vh] w-[300px]  p-4 bg-blue-200 rounded-xl shrink-0  ">
          <div className="flex justify-between items-start">
            <h3 className="bg-red-300  rounded-md px-2 py-1">High</h3>
            <h4 className="bg-green-200 px-2 py-1 rounded-md">20 Feb 2024</h4>
          </div>
         <div>
           <h2 className="text-lg font-bold  mt-2">fix the auth issue</h2>
          <p className="text-sm text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam obcaecati aperiam? Est assumenda eum odio maxime eligendi voluptas veritatis.
            voluptatum.
          </p>
         </div>
         <div className='flex justify-between items-center mt-8 '>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">mark as done</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600">Mark as Failed</button>
         </div>
        </div>
        
        </div>
  )
}

export default NewTask