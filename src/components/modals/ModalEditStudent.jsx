import React, { useState, useEffect } from 'react';
import { studentUpdate } from "../../api/studentsApi.js";

const ModalEditStudent = ({ isOpen, onClose, estudiante, onUpdate }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        genero: '',
        direccion: '',
        telefono: '',
        correo: '',
        fecha_inscripcion: ''
    });

    // Carga los datos del estudiante en el formulario
    useEffect(() => {
        if (estudiante) {
            const formatFecha = (fecha) => {
                if (!fecha) return "";
                const date = new Date(fecha);
                const year = date.getUTCFullYear();
                const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Mes en UTC
                const day = String(date.getUTCDate()).padStart(2, "0"); // Día en UTC
                return `${year}-${month}-${day}`;
            };
            setFormData({
                ...estudiante,
                fecha_nacimiento: formatFecha(estudiante.fecha_nacimiento),
                fecha_inscripcion: formatFecha(estudiante.fecha_inscripcion),
            });
        }
    }, [estudiante]);

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        const updatedStudent = await studentUpdate(estudiante.id_estudiante, formData);
        
        if (!updatedStudent || !updatedStudent.id_estudiante) {
            console.error("La API no devolvió los datos actualizados correctamente.");
            return;
        }

        console.log("Datos actualizados recibidos:", updatedStudent);
        onUpdate(updatedStudent); // Actualizar en Students.jsx
        onClose(); // Cerrar modal
    } catch (error) {
        console.error("Error al actualizar los datos:", error);
    }
    };

    if (!isOpen) return null;

    return (
        <div className={`modal fade ${isOpen ? "show d-block" : ""}`} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="myLargeModalLabel">Editar Estudiante</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            {/* Campos del formulario */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nombre" className="col-form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="nombre" value={formData.nombre} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="apellido" className="col-form-label">Apellidos:</label>
                                    <input type="text" className="form-control" id="apellido" value={formData.apellido} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="fecha_nacimiento" className="col-form-label">Fecha de nacimiento:</label>
                                    <input type="date" className="form-control" id="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="genero" className="col-form-label">Género:</label>
                                    <select className="form-select" id="genero" value={formData.genero} onChange={handleChange} required>
                                        <option value="">Seleccione una opción</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="direccion" className="col-form-label">Dirección:</label>
                                    <input type="text" className="form-control" id="direccion" value={formData.direccion} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="telefono" className="col-form-label">Teléfono:</label>
                                    <input type="text" className="form-control" id="telefono" value={formData.telefono} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="correo" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="correo" value={formData.correo} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="fecha_inscripcion" className="col-form-label">Fecha de inscripción:</label>
                                    <input type="date" className="form-control" id="fecha_inscripcion" value={formData.fecha_inscripcion} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                                <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEditStudent;



