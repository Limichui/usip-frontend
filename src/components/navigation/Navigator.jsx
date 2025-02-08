import { Link }  from "react-router";

const Navigator = () => {
    
    return (
        <nav className='navbar'>
            <div className="nav-links">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/students" className="nav-link">Estudiantes</Link>
                <Link to="/teachers" className="nav-link">Docentes</Link>
                <Link to="/courses" className="nav-link">Cursos</Link>
            </div>
        </nav>
    );
}

export default Navigator;