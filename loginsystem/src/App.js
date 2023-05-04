import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import NavBar from './component/NavBar'
import {Route , Routes} from 'react-router-dom'
const App = () => {
  return (
    
      <>
      <NavBar/>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          


        </Routes>
      </>
    
  )
}

export default App