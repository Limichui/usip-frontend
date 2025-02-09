import Dashboard from "../../screens/Dashboard.jsx";
import Students from "../../screens/Students.jsx"
import Teachers from "../../screens/Teachers.jsx"
import Courses from "../../screens/Courses.jsx"
import Login from "../../screens/Login.jsx";

import { Route, Routes } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute.jsx";

const Router = () =>  {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/students" element={<Students />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/courses" element={<Courses />} />
            </Route>
        </Routes>
    );
};

export default Router;