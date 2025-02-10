import React, { useState } from 'react';
import axios from 'axios';
import { students } from "../../api/studentsApi.js";


const ModalStudent = ({ isOpen, onClose }) => {
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
        e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
        try {
            const response = await students(formData); // Envía los datos a la API
            console.log('Respuesta del servidor:', response.data);
            onClose(); // Cierra el modal después de enviar los datos
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    if (!isOpen) return null; // Evita renderizar si no está abierto

    return (
        <div className={`modal fade ${isOpen ? "show d-block" : ""}`} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog modal-lg"> 
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="myLargeModalLabel">Nuevo estudiante</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}> {/* Asocia el evento onSubmit al formulario */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nombre" className="col-form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="nombre" value={formData.nombre} onChange={handleChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="apellido" className="col-form-label">Apellidos:</label>
                                    <input type="text" className="form-control" id="apellido" value={formData.apellido} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="fecha_nacimiento" className="col-form-label">Fecha de nacimiento:</label>
                                    <input type="date" className="form-control" id="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="genero" className="col-form-label">Género:</label>
                                    <select className="form-select" id="genero" value={formData.genero} onChange={handleChange}>
                                        <option value="">Seleccione una opción</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="direccion" className="col-form-label">Dirección:</label>
                                    <input type="text" className="form-control" id="direccion" value={formData.direccion} onChange={handleChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="telefono" className="col-form-label">Teléfono:</label>
                                    <input type="text" className="form-control" id="telefono" value={formData.telefono} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="correo" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="correo" value={formData.correo} onChange={handleChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="fecha_inscripcion" className="col-form-label">Fecha de inscripción:</label>
                                    <input type="date" className="form-control" id="fecha_inscripcion" value={formData.fecha_inscripcion} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Registrar</button> {/* Botón de tipo submit */}
                                <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalStudent;






