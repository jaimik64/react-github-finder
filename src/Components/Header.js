import React, {useState, useContext} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap'

import { Link } from 'react-router-dom'
import { UserContext } from '../context/userContext'

export default function Header() {
    const context = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    Gitfire App
                </Link>
            </NavbarBrand>

            <NavbarText className="text-white pl-4">
                {
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>
            
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar >
                <Nav className="ml-auto flt" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={() => {context.setUser(null)}} className="text-white">Log Out</NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink className="text-white" tag={Link} to="/signup" >
                                    SignUp
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-white" tag={Link} to="/signin" >
                                    Sign In
                                </NavLink>
                            </NavItem>
                            </>
                        )  
                    } 
                </Nav>
            </Collapse>
        </Navbar>
    )
}
