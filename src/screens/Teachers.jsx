import { useState, useEffect } from "react";
import { Outlet } from "react-router"; // Importa Outlet
import Navigator from "../components/navigation/Navigator.jsx"
import Header from "../components/fragments/Header.jsx"; 
import Footer from "../components/fragments/Footer.jsx"; 
import '../assets/js/layout.js'; 
import '../assets/js/plugins.js'; 
import '../assets/css/style.css'

const Students = () => {
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
                                        <h4 className="mb-sm-0">Panel de Docentes</h4>
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
                                                    <button type="button" className="btn btn-sm btn-soft-primary">
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
                                                                <th scope="col" style={{ width: "46px" }}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="cardtableCheck" />
                                                                        <label className="form-check-label" htmlFor="cardtableCheck"></label>
                                                                    </div>
                                                                </th>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Avatar</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Total</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col" style={{ width: "100px" }}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {[
                                                                { id: "VL2110", avatar: "avatar-1.jpg", name: "William Elmore", date: "07 Oct, 2021", total: "$24.05", status: "Paid" },
                                                                { id: "VL2109", avatar: "avatar-2.jpg", name: "Georgie Winters", date: "07 Oct, 2021", total: "$26.15", status: "Paid" },
                                                                { id: "VL2108", avatar: "avatar-3.jpg", name: "Whitney Meier", date: "06 Oct, 2021", total: "$21.25", status: "Refund" },
                                                                { id: "VL2107", avatar: "avatar-4.jpg", name: "Justin Maier", date: "05 Oct, 2021", total: "$25.03", status: "Paid" },
                                                            ].map((row, index) => (
                                                                <tr key={row.id}>
                                                                    <td>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" id={`cardtableCheck0${index + 1}`} />
                                                                            <label className="form-check-label" htmlFor={`cardtableCheck0${index + 1}`}></label>
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="#" className="fw-medium">#{row.id}</a></td>
                                                                    <td>
                                                                        <div className="d-flex gap-2 align-items-center">
                                                                            <div className="flex-shrink-0">
                                                                                <img src={`assets/images/users/${row.avatar}`} alt="" className="avatar-xs rounded-circle" />
                                                                            </div>
                                                                            <div className="flex-grow-1">Jordan Kennedy</div>
                                                                        </div>
                                                                    </td>
                                                                    <td>{row.name}</td>
                                                                    <td>{row.date}</td>
                                                                    <td>{row.total}</td>
                                                                    <td><span className={`badge bg-${row.status === "Paid" ? "success" : "danger"}`}>{row.status}</span></td>
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
        </div>
    );
};

export default Students;