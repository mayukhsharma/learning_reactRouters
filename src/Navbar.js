import React from "react";
import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="navbar">
        <div className="links">
            <Link to="/">About</Link>
            <Link  to="/exercises">Exercises</Link>
            <Link  to="/diet">Diet</Link>
            <Link  to="/contact">Contact</Link>
            </div>
            </nav>
    );
}
export default Navbar;