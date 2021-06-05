import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth';

export default class SiteNavbar extends React.Component {
render() {
    const { user } = this.props;
    return(
        <>
        <Link className="orange-ft brand-link hf" to='/'>Stills</Link>
        <div className="links-div">
            <Link className="link bf l-underline" to="/vote-p1">Vote</Link>
            <Link className="link bf l-underline" to="/add-p1">Add</Link>
            <Link className="link bf l-underline" to="/charts-p1">Charts</Link>
            <Auth user={user} />
        </div>
        </>
    )
}
}