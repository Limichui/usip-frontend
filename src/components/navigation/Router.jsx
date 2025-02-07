import Dashboard from "../../screens/Dashboard.jsx";
import Login from "../../screens/Login.jsx";

import { Route, Routes } from "react-router";

const Router = () =>  {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
    );
};

export default Router;