import React from 'react'

const CreateTask = () => {
  return (
    <>
     
           <div className="text-white  mx-auto">
          <form className="flex justify-between">
            <div className="w-[40%]  p-5 rounded-md">
              <h3>task title </h3>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter task title"
              />

              <h3 className="mt-4">Date</h3>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <h3 className="mt-4">Assigned to</h3>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter assignee name"
              />
              <h3 className="mt-4">Category</h3>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter task category"
              />
            </div>
            <div className="w-[40%]  my-auto  p-5 rounded-md">
              <h3 className="mt-4">Task Description</h3>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter task description"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="mt-4  w-full bg-blue-500 text-white px-4 py-4 rounded-md hover:bg-blue-600"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
       </>
  )
}

export default CreateTask