import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
function AuthRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
        </Routes>
    );
}

export default AuthRoutes;
