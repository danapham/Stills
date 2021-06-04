import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class SiteNavbar extends React.Component {
render() {
    return(
        <>
        <Link className="orange-ft brand-link hf" to='/'>Stills</Link>
        <div className="links-div">
            <Link className="link bf l-underline" to="/vote-p1">Vote</Link>
            <Link className="link bf l-underline" to="/add-p1">Add</Link>
            <Link className="link bf l-underline" to="/charts-p1">Charts</Link>
            <NavDropdown title={<div className="user-pic"></div>} id="basic-nav-dropdown">
                <Link to="profile-p1" className="bf nav-dropdown-link dropdown-item">See Profile</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" className="bf">Signout</NavDropdown.Item>
            </NavDropdown>
        </div>
        </>
    )
}
}