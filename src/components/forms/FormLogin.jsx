import { useState } from "react";
import { useNavigate } from 'react-router';
import useForm from "../hooks/useForm.js";
import { login } from "../../api/loginApi.js";
import { useAuth } from "../../providers/AuthProvider.jsx";

const FormLogin = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate()
    
    const { formData, handleChange } = useForm({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(""); // Limpiar errores previos
        
        try {
            const { data } = await login(formData);

            if (typeof data == "object" && typeof data.token === "string") {
                // Guardar token
                setToken(data.token);

                // Redirigir al usuario
                navigate('/dashboard', { replace: true });
            } else {
                setError("Credenciales invalidos");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Error al iniciar sesión");
        }
    };

    return (
        <div className="auth-page-wrapper pt-5">
        {/* auth page bg */}
        <div
            className="auth-one-bg-position auth-one-bg"
            id="auth-particles"
        >
            <div className="bg-overlay"></div>
            <div className="shape">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1440 120"
            >
                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg>
            </div>
        </div>

        {/* auth page content */}
        <div className="auth-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <a href="/" className="d-inline-block auth-logo">
                                    <img src="./assets/images/logo-light.png" alt="" height="20" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulario */}
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-4 card-bg-fill">
                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h1 className="text-primary" style={{ fontSize: "20px", fontWeight: "bold" }}>
                                    Inicio de sesión
                                    </h1>
                                </div>
                                <div className="p-2 mt-4">
                                    <form onSubmit={handleSubmit}>
                                        {/* Mostrar error si existe */}
                                        {error && <div className="alert alert-danger">{error}</div>}

                                        {/* Usuario */}
                                        <div className="mb-3">
                                            <label className="form-label" style={{ fontWeight: "bold" }}>
                                            Usuario
                                            </label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Ingrese el nombre de usuario"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            />
                                        </div>

                                        {/* Contraseña */}
                                        <div className="mb-3">
                                            <label className="form-label" style={{ fontWeight: "bold" }}>
                                            Contraseña
                                            </label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="form-control"
                                                id="password"
                                                placeholder="Ingrese la contraseña"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            <button
                                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon material-shadow-none"
                                                type="button"
                                                id="password-addon"
                                                onClick={togglePasswordVisibility}
                                            >
                                                <i className={showPassword ? "ri-eye-off-fill align-middle" : "ri-eye-fill align-middle"}></i>
                                            </button>
                                            </div>
                                        </div>

                                        {/* Botón de envío */}
                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit">
                                            Ingresar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>
                        {/* end card */}
                    </div>
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </div>
        {/* end auth page content */}
        </div>
    );
};

export default FormLogin;
