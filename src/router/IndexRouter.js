import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from '../views/Login/Login'
import Home from '../views/sandbox/Home/Home'
import UserList from '../views/sandbox/user-manage/UserList' 
import RightList from '../views/sandbox/right-manage/RightList'

import RoleList from '../views/sandbox/right-manage/RoleList'


import NewsSandBox from '../views/sandbox/NewsSandBox'
export default function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>

            <Route path="/" element={<NewsSandBox/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/user-manage/list" element={<UserList/>}/>
            <Route path="/right-manage/role/list" element={<RoleList/>}/>
            <Route path="/right-manage/right/list" element={<RightList/>}/>
            <Route path="/login" element={<Login/>}></Route>



            </Route>
            </Routes>
        </BrowserRouter>
    )
}
