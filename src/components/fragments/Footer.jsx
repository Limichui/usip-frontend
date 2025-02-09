import React from "react";

const Footer = ({ isMenuOpen }) => {
    return (
        <footer className={`footer ${isMenuOpen ? "" : "full-width"}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        © Sistema de Gestión Estidaintil USIP.
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end d-none d-sm-block">
                            Diseñado & Desarrollado por: Grupo 4
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;