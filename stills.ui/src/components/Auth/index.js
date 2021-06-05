import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Auth extends React.Component {
    loginClickEvent = (e) => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((cred) => {
            // const user = cred.additionalUserInfo.profile;
            if (cred.additionalUserInfo.isNewUser) {
                // const userInfo = {
                //     firebaseid: cred.user.uid,
                //     firstname: user.given_name,
                //     lastname: user.family_name,
                //     emailaddress: user.email,
                //     admin: false,
                //     isactive: true
                //   };
            }
        });
    };

    logoutClickEvent = () => {
        firebase.auth().signOut();
    }

    renderAuth = () => {
        const user = firebase.auth().currentUser;
        let auth;
        if (user) {
            auth = <NavDropdown title={<div className="user-pic"></div>} id="basic-nav-dropdown">
                        <Link to="profile-p1" className="bf nav-dropdown-link dropdown-item">See Profile</Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#" className="bf" onClick={this.logoutClickEvent}>Signout</NavDropdown.Item>
                    </NavDropdown>
        } else {
            auth = <i className="fas fa-sign-in-alt link" onClick={this.loginClickEvent}></i>
        }
        return auth;
    }

    render() {
        return(
            <>
            {this.renderAuth()}
            </>
        )
    }
}