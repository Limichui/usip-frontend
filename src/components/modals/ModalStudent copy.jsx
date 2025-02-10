const ModalStudent = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // No renderiza el modal si no está abierto

    return (
        <div className={`modal-overlay ${isOpen ? "show" : "hide"}`} onClick={onClose}>
            <div className="modal-dialog modal-lg"> 
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Nuevo Estudiante</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="nombre" className="col-form-label">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="apellido" className="col-form-label">Apellidos:</label>
                                        <input type="text" className="form-control" id="apellido" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="fecha_nacimiento" className="col-form-label">Fecha de nacimiento:</label>
                                        <input type="date" className="form-control" id="fecha_nacimiento" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="genero" className="col-form-label">Género:</label>
                                        <select className="form-select" id="genero">
                                            <option value="">Seleccione una opción</option>
                                            <option value="1">Masculino</option>
                                            <option value="2">Femenino</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="direccion" className="col-form-label">Dirección:</label>
                                        <input type="text" className="form-control" id="direccion" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="telefono" className="col-form-label">Teléfono:</label>
                                        <input type="text" className="form-control" id="telefono" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="col-form-label">Email:</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="fecha_inscripccion" className="col-form-label">Fecha de inscripción:</label>
                                        <input type="date" className="form-control" id="fecha_inscripccion" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalStudent;




