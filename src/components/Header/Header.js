import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Nav className="mx-auto">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-link px-4" : "link px-4"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/review"
                            className={({ isActive }) =>
                                isActive ? "active-link px-4" : "link px-4"
                            }
                        >
                            Review
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "active-link px-4" : "link px-4"
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                isActive ? "active-link px-4" : "link px-4"
                            }
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active-link px-4" : "link px-4"
                            }
                        >
                            About
                        </NavLink>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;