import { useState, useEffect } from "react";
import { Outlet } from "react-router"; // Importa Outlet
import Navigator from "../components/navigation/Navigator.jsx"
import Header from "../components/fragments/Header.jsx"; 
import Footer from "../components/fragments/Footer.jsx"; 
import ModalStudent from "../components/modals/ModalStudent.jsx";
import '../assets/js/layout.js'; 
import '../assets/js/plugins.js'; 
import '../assets/css/style.css'

const Students = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Estado para manejar el despliegue del menú
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

    // Función para alternar el menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="30" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="30" />
                                </span>
                            </a>
                            {/* Light Logo */}
                            <a href="index.html" className="logo logo-light">
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
                                        <h4 className="mb-sm-0">Panel de Estudiantes</h4>
                                    </div>
                                </div>
                            </div>
                            {/* end page title */}

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header align-items-center d-flex">
                                            <h4 className="card-title mb-0 flex-grow-1">Registros</h4>
                                            <div className="flex-shrink-0">
                                                <div className="form-check form-switch form-switch-right form-switch-md">
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-sm btn-soft-primary"
                                                        data-bs-toggle="modal" 
                                                        onClick={openModal} // Llama a la función para abrir el modal
                                                    >
                                                        <i className="ri-add-line align-bottom me-1"></i> Registrar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div className="live-preview">
                                                <div className="table-responsive table-card">
                                                    <table className="table table-hover align-middle table-nowrap table-striped-columns mb-0">
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th scope="col">Nro</th>
                                                                <th scope="col">Nombre Completo</th>
                                                                <th scope="col">Fecha de Nacimiento</th>
                                                                <th scope="col">Género</th>
                                                                <th scope="col">Dirección</th>
                                                                <th scope="col">Teléfono</th>
                                                                <th scope="col">Corréo</th>
                                                                <th scope="col">Fecha de Inscripción</th>
                                                                <th scope="col" style={{ width: "100px" }}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {[
                                                                { id: "1", nombre: "Ana", apellido: "García", fecha_nacimiento: "2001-03-20", genero: "Femenino", direccion: "Calle del Sol 456", telefono: "555-987-6543", correo: "ana.garcia@example.com", fecha_inscripcion: "2024-07-26" },
                                                                { id: "2", nombre: "Carlos", apellido: "López", fecha_nacimiento: "1999-11-05", genero: "Masculino", direccion: "Avenida de la Luna 789", telefono: "555-101-1122", correo: "carlos.lopez@example.com", fecha_inscripcion: "2024-07-26" },
                                                                { id: "3", nombre: "Sofía", apellido: "Martínez", fecha_nacimiento: "2002-07-12", genero: "Femenino", direccion: "Plaza de las Flores 101", telefono: "555-223-3344", correo: "sofia.martinez@example.com", fecha_inscripcion: "2024-07-26" },
                                                            ].map((row, index) => (
                                                                <tr key={row.id}>
                                                                    <td>{row.id}</td>
                                                                    <td>{row.nombre} {row.apellido}</td>
                                                                    <td>{row.fecha_nacimiento}</td>
                                                                    <td>{row.genero}</td>
                                                                    <td>{row.direccion}</td>
                                                                    <td>{row.telefono}</td>
                                                                    <td>{row.correo}</td>
                                                                    <td>{row.fecha_inscripcion}</td>
                                                                    <td>
                                                                        <div className="hstack gap-3 fs-15">
                                                                            <a href="#" className="link-secondary"><i className="ri-edit-2-fill"></i></a>
                                                                            <a href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
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
            {/* ModalStudent Component */}
            {isModalOpen && <ModalStudent isOpen={isModalOpen} onClose={closeModal} />}
        </div>
    );
};

export default Students;