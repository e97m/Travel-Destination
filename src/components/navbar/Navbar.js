import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
        <div className="navbar">
        <Link to="/"><button className="navBtn">Home</button></Link>
        <Link to="/test"><button className="navBtn">test</button></Link>
        </div>
        </>
    );
}

export default Navbar;