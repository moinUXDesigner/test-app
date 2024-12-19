import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <Link to="/"  className="navbar-brand">APTRANSCO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" id="navbarSupportedContent">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">APTRANSCO</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <Link className="nav-link" to="/" >Home</Link>
                            </li>
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <Link className="nav-link" to="/aptcontact">APT Contacts</Link>
                            </li>
                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                <Link className="nav-link" to="/credits">Credits</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;