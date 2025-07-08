import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashbord/EmployeeDashbord'


import AdminDashbord from './components/Dashbord/AdminDashbord'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
// useEffect(()=>{
// //  getLocalStorage()
//   setLocalStorage()
// }, [])

const [user, setUser] = useState(null);


const handleLogin =(email,password)=>{
  if(email == "admin@example.com" && password == "123"){
    console.log("admin login")
    setUser({ email, role: "admin" });
  } else if(email == "employee@example.com" && password == "123"){
     console.log("employee login")
    
    setUser({ email, role: "employee" });
  }
  else {
    console.log("Invalid credentials");
  }
}



  return (
    
    <>
<div>

  {!user?<Login handleLogin={handleLogin} />:""}
  {user && user.role === "employee" && <EmployeeDashbord />}
  {user && user.role === "admin" && <AdminDashbord />}


</div>











    </>
  )
}

export default App