import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import useAuth from "../components/hooks/useAuth.js"
import Navigator from "../components/navigation/Navigator.jsx";
import Header from "../components/fragments/Header.jsx";
import Footer from "../components/fragments/Footer.jsx";
import ModalStudent from "../components/modals/ModalStudent.jsx";
import ModalEditStudent from "../components/modals/ModalEditStudent.jsx";
import ModalDelete from "../components/modals/ModalDeleteStudent.jsx";
import { getStudents, deleteStudent } from "../api/studentsApi.js";

import "../assets/css/style.css";

const Students = () => {
    useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);
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
            setError(error.message); // Mostrar mensaje real del error
        } finally {
            setLoading(false);
        }
    };

    const handleAddStudent = (newStudent) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setIsEditModalOpen(true);
    };

    const handleUpdateStudent = (updatedStudent) => {
        if (!updatedStudent || !updatedStudent.id_estudiante) {
            console.error("Datos incorrectos recibidos en handleUpdateStudent:", updatedStudent);
            return;
        }
        setStudents((prevStudents) =>
            prevStudents.map((s) =>
                s.id_estudiante === updatedStudent.id_estudiante ? updatedStudent : s
            )
        );
    };

    const handleDelete = async () => {
        if (!studentToDelete) return;

        try {
            await deleteStudent(studentToDelete.id_estudiante);
            setStudents(prevStudents => prevStudents.filter(student => student.id_estudiante !== studentToDelete.id_estudiante));
            console.log("Estudiante eliminado con éxito");
        } catch (error) {
            console.log("Error al eliminar el estudiante: " , error.message);
        } finally {
            setIsDeleteModalOpen(false);
            setStudentToDelete(null);
        }
    };

    const openDeleteModal = (student) => {
        setStudentToDelete(student);
        setIsDeleteModalOpen(true);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            <div id="layout-wrapper">
                <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                <div className={`app-menu navbar-menu ${isMenuOpen ? "menu-open" : ""}`}>
                    <div className="navbar-brand-box">
                        <a href="/dashboard" className="logo logo-dark">
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
                                                                <td>{row.fecha_nacimiento?.split("T")[0] || "N/A"}</td>
                                                                <td>{row.genero}</td>
                                                                <td>{row.direccion}</td>
                                                                <td>{row.telefono}</td>
                                                                <td>{row.correo}</td>
                                                                <td>{row.fecha_inscripcion?.split("T")[0] || "N/A"}</td>
                                                                <td>
                                                                    <div className="hstack gap-3 fs-15">
                                                                        <button onClick={() => handleEdit(row)} className="btn btn-link link-secondary p-0 border-0">
                                                                            <i className="ri-edit-2-fill"></i>
                                                                        </button>
                                                                        <button onClick={() => openDeleteModal(row)} className="btn btn-link link-danger p-0 border-0">
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

            {isModalOpen && <ModalStudent isOpen={isModalOpen} onClose={closeModal} onAdd={handleAddStudent} />}
            {isEditModalOpen && <ModalEditStudent 
                                    isOpen={isEditModalOpen} 
                                    onClose={() => setIsEditModalOpen(false)} 
                                    estudiante={selectedStudent}
                                    onUpdate={handleUpdateStudent}
                                />
            }
            {isDeleteModalOpen && (
                <ModalDelete 
                    isOpen={isDeleteModalOpen} 
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={handleDelete}
                    student={studentToDelete}
                />
            )}
        </div>
    );
};

export default Students;

