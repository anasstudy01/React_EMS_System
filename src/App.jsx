import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";

import AdminDashbord from "./components/Dashbord/AdminDashbord";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null);
  const data = useContext(AuthContext);
  console.log("AuthContext data:", data?.employees|| "No data yet");  
  console.log("AuthContext data:", data?.admin || "Admin data not loaded");

  const handleLogin = (email, password) => {
    if (email == data.admin[0].email && password == data.admin[0].password) {
      console.log("admin login");
      setUser({ email, role: "admin" });
    } else if (data.employees.find(emp => emp.email === email && emp.password === password)) {
      console.log("employee login");
      setUser({ email, role: "employee" });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div>
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user && user.role === "employee" && <EmployeeDashbord />}
        {user && user.role === "admin" && <AdminDashbord />}
      </div>
    </>
  );
};

export default App;
