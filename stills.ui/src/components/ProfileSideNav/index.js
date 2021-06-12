import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileSideNav extends React.Component {
    render() {
        return(
            <div className="profile-side-nav">
            <Link to='/profile-p1' className="psn-link">Edit Profile</Link>
            <Link to='/profile-p2' className="psn-link">Liked Photos</Link>
            <Link to='/profile-p3' className="psn-link">Uploaded Photos</Link>
            </div>
        )
    }
}