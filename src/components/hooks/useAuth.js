import { useEffect } from "react";
import { useNavigate } from "react-router";

const useAuth = () => {
    const navigate = useNavigate();
    //const token = localStorage.getItem("token");
    //console.log(token);
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            // Si no hay token, redirige al login
            console.log("Entro aqui");
            navigate("/");
        }
    }, [navigate]);
};

export default useAuth;