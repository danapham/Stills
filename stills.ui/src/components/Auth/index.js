import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import usersData from '../../helpers/data/usersData';

export default class Auth extends React.Component {
    loginClickEvent = (e) => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((cred) => {
            const user = cred.additionalUserInfo.profile;
            if (cred.additionalUserInfo.isNewUser) {
                const userInfo = {
                    firebaseId: cred.user.uid,
                    firstName: user.given_name,
                    lastName: user.family_name,
                    imageUrl: cred.user.photoURL,
                    email: user.email,
                    isactive: true
                };
                usersData.addUser(userInfo);
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
            auth = <NavDropdown title={<div style={{ backgroundImage: `url(${this.props.user.photoURL})`}} className="user-pic"></div>} id="basic-nav-dropdown">
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