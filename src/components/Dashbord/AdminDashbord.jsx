import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import Alltask from "../other/Alltask";

const AdminDashbord = ({logout}) => {
  return (
    <>
      <div className="w-full h-screen p-10">
        <Header logout={logout} />
        <CreateTask/>
        <Alltask/>
      </div>
    </>
  );
};

export default AdminDashbord;
