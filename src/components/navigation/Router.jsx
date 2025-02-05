import Login from "../../screens/Login.jsx";

import { Route, Routes } from "react-router";

const Router = () =>  {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />

        </Routes>
    );
};

export default Router;