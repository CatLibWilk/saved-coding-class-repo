import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link 
        to="/"
        className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
    >
     <div className="navbar-brand" >Pupster</div>
     </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

            <li className="nav-item active">
                <Link
                    to="/"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    About
                </Link>
            </li>

            <li className="nav-item active">
                <Link
                    to="/discover"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    Discover
                </Link>
            </li>

            <li className="nav-item active">
                <Link
                    to="/search"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    Search
                </Link>
            </li>




            
            </ul>
        </div>
    </nav>
    );


export default Navbar;
