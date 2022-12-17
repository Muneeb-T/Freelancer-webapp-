import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AuthRoutes from './routes/AuthRoutes';
import UserRoutes from './routes/UserRoutes';
import './index.css'
function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/*' element={<UserRoutes />}></Route>
                        <Route path='/auth/*' element={<AuthRoutes />}></Route>
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}
export default App;
