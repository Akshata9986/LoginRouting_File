import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link>
                        <Link to="/login">Login</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link>
                        <Link to="/signup">SignUp</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar