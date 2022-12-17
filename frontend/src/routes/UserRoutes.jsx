import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
function UserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    );
}

export default UserRoutes;
