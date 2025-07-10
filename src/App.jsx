import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";

import AdminDashbord from "./components/Dashbord/AdminDashbord";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

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
      const employee = authData.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser({ role: "employee" });
       
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
        // localStorage.setItem("loggedInUserData", JSON.stringify(employee));
     
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role == 'admin' ?  <AdminDashbord /> : (user?.role == 'employee' ? <EmployeeDashbord data ={loggedInUserData}
       /> : null)}

    </>
  );
};

export default App;
