import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";

import AdminDashbord from "./components/Dashbord/AdminDashbord";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import AcceptTask from "./components/TaskList/AcceptTask";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // console.log("Auth Data:", authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  //   useEffect(()=>{
  // if(authData){
  //   const loggedInUser =localStorage.getItem("loggedInUser");
  //   if(loggedInUser){
  //     setUser(loggedInUser.role);
  //   }
  // }

  //   },[authData])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser({ role: "employee" });

        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        localStorage.setItem("loggedInUserData", JSON.stringify(employee));
      } else {
        alert("Invalid credentials");
      }
    }
  };
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUserData");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role == "admin" ? (
        <AdminDashbord  logout={logout} />
      ) : user?.role == "employee" ? (
        <EmployeeDashbord  logout={logout} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
