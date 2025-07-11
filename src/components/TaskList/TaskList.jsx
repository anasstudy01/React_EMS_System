import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = () => {
  return (
    <>
    <div id="taskListId"className="flex  items-center justify-start gap-5 p-2 no-wrap overflow-x-auto ">

      <AcceptTask />
      <CompleteTask />
      <FailedTask />
      <NewTask />
      <NewTask />
      <NewTask />
      <NewTask />
   
    </div>

    </>
  );
};

export default TaskList;
