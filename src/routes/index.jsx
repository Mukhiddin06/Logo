import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Users, AddUser, SingleUser, Companies } from '../pages'


function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Users/>} />
        <Route path='/companies' element={<Companies/>} />
        <Route path='/users/add' element={<AddUser/>} />
        <Route path='/users/:id' element={<SingleUser/>} />
        <Route path='/users/:id/update' element={<AddUser/>} />
    </Routes>
  )
}

export default CustomRoutes