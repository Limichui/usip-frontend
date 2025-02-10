import { useState, useEffect } from "react";
import { Outlet } from "react-router"; // Importa Outlet
import Navigator from "../components/navigation/Navigator.jsx"
import Header from "../components/fragments/Header.jsx"; 
import Footer from "../components/fragments/Footer.jsx"; 
import '../assets/js/layout.js'; 
import '../assets/js/plugins.js'; 
//import '../assets/js/app.js'; 
import '../assets/css/style.css'

const Dashboard = () => {

    // Estado para manejar el despliegue del menú
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    // Función para alternar el menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cargar los scripts después de que el componente se monte
    useEffect(() => {
        import('../assets/js/app.js').then(module => {
            if (module.default) module.default();
        });
    }, []); // El array vacío asegura que esto se ejecute solo una vez, después del montaje

    return (
        <div>
            {/* Begin page */}
            <div id="layout-wrapper">
                <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                
                {/* ========== App Menu ========== */}
                <div className={`app-menu navbar-menu ${isMenuOpen ? "menu-open" : ""}`}>
                    {/* LOGO */}
                    
                        <div className="navbar-brand-box">
                            {/* Dark Logo */}
                            <a href="/dashboard" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="30" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="30" />
                                </span>
                            </a>
                            {/* Light Logo */}
                            <a href="/dashboard" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="30" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="30" />
                                </span>
                            </a>
                            <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                                <i className="ri-record-circle-line"></i>
                            </button>
                        </div>

                        <div id="scrollbar">
                            <div className="container-fluid">
                                <div id="two-column-menu"></div>
                                <Navigator />
                            </div>
                        </div>

                        <div className="sidebar-background"></div>
                    
                </div>
                {/* Left Sidebar End */}

                {/* Vertical Overlay */}
                <div className={`vertical-overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}></div>

                {/* ============================================================== */}
                {/* Start right Content here */}
                {/* ============================================================== */}
                <div className={`main-content ${isMenuOpen ? "expanded" : "full-width"}`}>
                    <div className="page-content">
                        <div className="container-fluid">
                            {/* Outlet: Aquí se renderiza el contenido de la ruta actual */}
                            <Outlet />

                            {/* start page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                                        <h4 className="mb-sm-0">Panel de control</h4>
                                    </div>
                                </div>
                            </div>
                            {/* end page title */}

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card" style={{ height: "75vh" }}>
                                        <div className="card-body" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <div className="live-preview">
                                                <img 
                                                    src="./assets/images/logo.png" 
                                                    alt="Logo" 
                                                    style={{
                                                        maxHeight: "300px",
                                                        minHeight: "150px",
                                                        height: "auto",
                                                        width: "100%",
                                                        objectFit: "contain"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer isMenuOpen={isMenuOpen} />
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;