import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";

import AdminDashbord from "./components/Dashbord/AdminDashbord";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log("Auth Data:", authData);
  




  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "employee@me.com" && password == "123") {
      setUser("employee");
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
