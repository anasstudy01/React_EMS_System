import React from "react";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import Header from "../other/Header";

const EmployeeDashbord = ({data}) => {
 console.log("Employee Dashboard Data:", data);
  return (
    <div>
      
      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashbord;
