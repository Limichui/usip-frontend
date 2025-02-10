import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navigator from "../components/navigation/Navigator.jsx";
import Header from "../components/fragments/Header.jsx";
import Footer from "../components/fragments/Footer.jsx";
import ModalStudent from "../components/modals/ModalStudent.jsx";
import ModalEditStudent from "../components/modals/ModalEditStudent.jsx";
import { getStudents, deleteStudent } from "../api/studentsApi.js";

import "../assets/css/style.css";

const Students = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [estudianteEditando, setEstudianteEditando] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const data = await getStudents();
            setStudents(data);
            setError(null);
        } catch (error) {
            setError("Error al cargar los datos");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (estudiante) => {
        setEstudianteEditando(estudiante);
        setIsEditModalOpen(true);
    };

    const handleDelete = async (id_estudiante) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
            try {
                await deleteStudent(id_estudiante);
                setStudents(students.filter(student => student.id_estudiante !== id_estudiante));
                alert("Estudiante eliminado con éxito");
            } catch (error) {
                alert("Error al eliminar el estudiante: " + error.message);
            }
        }
    };


    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await getStudents();  // Ajusta esta función según cómo traigas los datos
                if (Array.isArray(response) && response.length > 0) {
                    setStudents(response); // Asigna la lista de estudiantes al estado
                } else {
                    console.log('No hay estudiantes o los datos no son un array válido');
                }
            } catch (error) {
                console.error("Error al cargar estudiantes:", error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <div id="layout-wrapper">
                <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                <div className={`app-menu navbar-menu ${isMenuOpen ? "menu-open" : ""}`}>
                    <div className="navbar-brand-box">
                        <a href="/" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="/assets/images/logo-sm.png" alt="Logo" height="30" />
                            </span>
                            <span className="logo-lg">
                                <img src="/assets/images/logo-light.png" alt="Logo" height="30" />
                            </span>
                        </a>
                    </div>

                    <div id="scrollbar">
                        <div className="container-fluid">
                            <div id="two-column-menu"></div>
                            <Navigator />
                        </div>
                    </div>

                    <div className="sidebar-background"></div>
                </div>

                <div className={`vertical-overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}></div>

                <div className={`main-content ${isMenuOpen ? "expanded" : "full-width"}`}>
                    <div className="page-content">
                        <div className="container-fluid">
                            <Outlet />

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h4 className="card-title mb-0">Registros</h4>
                                            <button className="btn btn-sm btn-soft-primary" onClick={openModal}>
                                                <i className="ri-add-line"></i> Registrar
                                            </button>
                                        </div>

                                        <div className="card-body">
                                            {error && <p className="text-danger">{error}</p>}
                                            <div className="table-responsive">
                                                <table className="table table-hover">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Nro</th>
                                                            <th>Nombre Completo</th>
                                                            <th>Fecha de Nacimiento</th>
                                                            <th>Género</th>
                                                            <th>Dirección</th>
                                                            <th>Teléfono</th>
                                                            <th>Correo</th>
                                                            <th>Fecha de Inscripción</th>
                                                            <th>Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {students.length > 0 ? students.map((row, index) => (
                                                            <tr key={row.id_estudiante}>
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
                                                        )) : <tr><td colSpan="9">Cargando...</td></tr>}
                                                    </tbody>
                                                </table>
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

            {isModalOpen && <ModalStudent isOpen={isModalOpen} onClose={closeModal} />}
            {isEditModalOpen && <ModalEditStudent 
                                    isOpen={isEditModalOpen} 
                                    onClose={() => setIsEditModalOpen(false)} 
                                    estudiante={estudianteEditando} 
                                />
            }
        </div>
    );
};

export default Students;
