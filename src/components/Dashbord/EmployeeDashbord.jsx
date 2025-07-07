import React from "react";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import Header from "../other/Header";

const EmployeeDashbord = () => {
  return (
    <div>
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashbord;
