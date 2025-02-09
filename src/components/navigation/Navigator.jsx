import React from "react";
import { Link }  from "react-router";

const Navigator = () => {
    
    return (
        <ul className="navbar-nav" id="navbar-nav">
            <li className="menu-title"><span data-key="t-menu">Menu</span></li>

            <li className="nav-item">
                <Link to="/dashboard" className="nav-link menu-link nav-style">
                    <div>
                        <i className="ri-dashboard-2-line"></i>{" "}
                        <span data-key="t-widgets">Panel de Control</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/students" className="nav-link menu-link nav-style">
                    <div>
                        <i className="ri-group-fill"></i>{" "}
                        <span data-key="t-widgets">Estudiantes</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/teachers" className="nav-link menu-link nav-style">
                    <div>
                        <i className="ri-user-settings-fill"></i>{" "}
                        <span data-key="t-widgets">Docentes</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/courses" className="nav-link menu-link nav-style">
                    <div>
                        <i className="ri-folder-settings-fill"></i>{" "}
                        <span data-key="t-widgets">Cursos</span>
                    </div>
                </Link>
            </li>
        </ul>
    );
};

export default Navigator;