import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Chat from '../pages/Chat'
import PrivateRoutes from './PrivateRoutes'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/chat" element={<PrivateRoutes><Chat/></PrivateRoutes>} />
    </Routes>
  )
}

export default AllRoutes