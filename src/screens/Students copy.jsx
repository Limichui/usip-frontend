import { useState, useEffect } from "react";
import { Outlet } from "react-router"; // Importa Outlet
import Navigator from "../components/navigation/Navigator.jsx"
import Header from "../components/fragments/Header.jsx"; 
import Footer from "../components/fragments/Footer.jsx"; 
import ModalStudent from "../components/modals/ModalStudent.jsx";
import ModalEditStudent from "../components/modals/ModalEditStudent.jsx";
import { getStudents, deleteStudent } from "../api/studentsApi.js";

import '../assets/js/layout.js'; 
import '../assets/js/plugins.js'; 
import '../assets/css/style.css'

const Students = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Estado para manejar el despliegue del menú
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
    const [students, setStudents] = useState([]); // Estado para almacenar los datos de la API
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Para el modal de edición
    const [estudianteEditando, setEstudianteEditando] = useState(null); // Estado para el estudiante en edición
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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

    // Función para obtener los estudiantes
    const fetchStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (error) {
            setError("Error al cargar los datos");
        } finally {
            setLoading(false);
        }
    };

    // Función para abrir el modal en modo edición
    const handleEdit = (estudiante) => {
        setEstudianteEditando(estudiante);
        setIsEditModalOpen(true);
    };

    // Función para eliminar estudiante
    const handleDelete = async (id_estudiante) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
            try {
                await deleteStudent(id_estudiante);
                setStudents(students.filter(student => student.id_estudiante !== id_estudiante));
                alert("Estudiante eliminado con éxito");
            } catch (error) {
                console.error("Error al eliminar el estudiante:", error);
                alert("Error al eliminar el estudiante: " + error.message);
            }
        }
    };

    // Cargar los scripts y obtener los datos después de que el componente se monte
    useEffect(() => {
        import('../assets/js/app.js').then(module => {
            if (module.default) module.default();
        });
        fetchStudents(); // Llama a la API aquí
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
                                                            {students.length > 0 ? (
                                                                students.map((row, index) => (
                                                                    <tr key={row.id}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{row.nombre} {row.apellido}</td>
                                                                        <td>{new Date(row.fecha_nacimiento).toLocaleDateString('es-ES')}</td>
                                                                        <td>{row.genero}</td>
                                                                        <td>{row.direccion}</td>
                                                                        <td>{row.telefono}</td>
                                                                        <td>{row.correo}</td>
                                                                        <td>{new Date(row.fecha_inscripcion).toLocaleDateString('es-ES')}</td>
                                                                        <td>
                                                                            <div className="hstack gap-3 fs-15">
                                                                                <button onClick={() => handleEdit(row)} className="btn btn-link link-secondary p-0 border-0">
                                                                                    <i className="ri-edit-2-fill"></i>
                                                                                </button>
                                                                                <button onClick={() => handleDelete(row.id_estudiante)} className="btn btn-link link-danger p-0 border-0">
                                                                                    <i className="ri-delete-bin-5-line"></i>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            ) : (
                                                                <tr>
                                                                    <td colSpan="9" className="text-center">Cargando datos...</td>
                                                                </tr>
                                                            )}  
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
            {isModalOpen && <ModalStudent isOpen={isModalOpen} onClose={closeModal}/>}
            {isModalOpen && <ModalEditStudent isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} estudiante={estudianteEditando}/>}
        </div>
    );
};

export default Students;