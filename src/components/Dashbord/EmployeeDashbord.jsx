import React from "react";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import Header from "../other/Header";

const EmployeeDashbord = ({data,logout}) => {
 console.log("Employee Dashboard Data:", data);
  return (
    <div>
      
      <Header data={data}   logout={logout} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashbord;
