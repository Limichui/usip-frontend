import { Link }  from "react-router";

const Navigator = () => {
    
    return (
        <nav className='navbar'>
            <div className="nav-links">
                <Link to="/" className="nav-link">Login</Link>
                <Link to="/dashboard" className="nav-link">Login</Link>
            </div>
        </nav>
    );
}

export default Navigator;