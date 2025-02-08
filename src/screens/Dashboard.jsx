//import React, { useEffect } from 'react';
import '../assets/js/layout.js'; 
import '../assets/js/plugins.js'; 
import '../assets/css/style.css'
import { color } from 'motion/react';
const Dashboard = () => {
    return (
        <div>
            {/* Begin page */}
            <div id="layout-wrapper">
                <header id="page-topbar">
                    <div className="layout-width">
                        <div className="navbar-header">
                            <div className="d-flex">
                                <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger material-shadow-none" id="topnav-hamburger-icon">
                                    <span className="hamburger-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>
                            </div>

                            <div className="d-flex align-items-center">
                                
                                <div className="dropdown ms-sm-3 header-item topbar-user">
                                    <button type="button" className="btn material-shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="d-flex align-items-center">
                                            <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                                            <span className="text-start ms-xl-2">
                                                <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                                                <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">Founder</span>
                                            </span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        {/* item */}
                                        <a className="dropdown-item" href="pages-profile.html">
                                            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="auth-logout-basic.html">
                                            <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ========== App Menu ========== */}
                <div className="app-menu navbar-menu ">
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
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                                <li className="nav-item">
                                    <a className="nav-link menu-link nav-style" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                        <div>
                                            <i className="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Panel de Control</span>
                                        </div>
                                        
                                    </a>
                                    <div className="collapse menu-dropdown" id="sidebarDashboards">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <a href="dashboard-analytics.html" className="nav-link" data-key="t-analytics"> Analytics </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="dashboard-crm.html" className="nav-link" data-key="t-crm"> CRM </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link menu-link nav-style" href="widgets.html">
                                        <div>
                                            <i className="ri-group-fill"></i> <span data-key="t-widgets" >Estudiantes</span>
                                        </div>
                                        
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link menu-link nav-style" href="widgets.html">
                                        <div>
                                            <i className="ri-user-settings-fill"></i> <span data-key="t-widgets">Docentes</span>
                                        </div>
                                        
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link menu-link nav-style" href="widgets.html">
                                        <div>
                                            <i className="ri-folder-settings-fill"></i> <span data-key="t-widgets">Cursos</span>
                                        </div>
                                        
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-background"></div>
                </div>
                {/* Left Sidebar End */}

                {/* Vertical Overlay */}
                <div className="vertical-overlay"></div>

                {/* ============================================================== */}
                {/* Start right Content here */}
                {/* ============================================================== */}
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            {/* start page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                                        <h4 className="mb-sm-0">Panel de control</h4>
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

                    <footer className="footer">
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;