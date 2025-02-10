import React from "react";

const Header = ({ isMenuOpen, toggleMenu }) => {
    return (
        <header id="page-topbar" className={isMenuOpen ? "" : "expanded-header"}>
            <div className="layout-width">
                <div className="navbar-header">
                    <div className="d-flex">
                        <button
                            type="button"
                            className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger material-shadow-none"
                            id="topnav-hamburger-icon"
                            onClick={toggleMenu}
                        >
                            <span className={`hamburger-icon ${isMenuOpen ? "" : "open"}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="dropdown ms-sm-3 header-item topbar-user">
                            <button
                                type="button"
                                className="btn material-shadow-none"
                                id="page-header-user-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="d-flex align-items-center">
                                    <img
                                        className="rounded-circle header-profile-user"
                                        src="/assets/images/users/avatar-default.jpg"
                                        alt="Header Avatar"
                                    />
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                                            Admin
                                        </span>
                                        <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">
                                            Administrador
                                        </span>
                                    </span>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="pages-profile.html">
                                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>{" "}
                                    <span className="align-middle">Profile</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="auth-logout-basic.html">
                                    <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
                                    <span className="align-middle" data-key="t-logout">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;