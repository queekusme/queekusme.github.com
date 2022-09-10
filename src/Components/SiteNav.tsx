import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default function SiteNav()
{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <Navbar color="dark" dark expand="md">
            <Container>
                <NavbarBrand href="/">queekus.com</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://docs.google.com/spreadsheets/d/1j_j66dSuO2WUfHwfGYWleSU1uLlmhVzJEHJTVEzrvWo">Roller Derby Officials CV</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/queekusme">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://anniekennedy.itch.io/">itch.io Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}