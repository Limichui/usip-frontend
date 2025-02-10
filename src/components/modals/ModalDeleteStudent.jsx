const ModalDelete = ({ isOpen, onClose, onConfirm, student }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay-delete">
            <div className="modal-content-delete">
                <h2>Confirmar eliminación</h2>
                <p>¿Seguro que deseas eliminar a {student?.nombre} {student?.apellido}?</p>
                <div className="modal-actions">
                    <button onClick={onClose} className="btn btn-secondary">Cancelar</button>
                    <button onClick={onConfirm} className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;