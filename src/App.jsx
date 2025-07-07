import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashbord/EmployeeDashbord'


import AdminDashbord from './components/Dashbord/AdminDashbord'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
useEffect(()=>{
 getLocalStorage()
  // setLocalStorage()
}, [])

  return (
    
    <>
<div>
  <Login />  
  <EmployeeDashbord />
  <AdminDashbord/>


</div>











    </>
  )
}

export default App