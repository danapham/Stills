import React from 'react';
import ProfileSideNav from '../components/ProfileSideNav';
import { Form } from 'react-bootstrap';
import usersData from '../helpers/data/usersData';

export default class ProfileP1 extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        firebaseId: '',
        isActive: ''
    }

    componentDidMount() {
        usersData.getByFbId(this.props.user.uid).then((res) => {
            this.setState({
                firstName: res.firstName,
                lastName: res.lastName,
                email: res.email,
                imageUrl: res.imageUrl,
                firebaseId: res.firebaseId,
                isActive: res.isActive
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div className="profile-page">
            <ProfileSideNav />
            <div className="edit-profile">
                <h1 className="hf">Edit Profile</h1>
                <div className="pic-btn-div">
                <div style={{ backgroundImage: `url(${this.state.imageUrl})`}} className="pp1-user-pic"></div>
                <button className="pp1-edit-btn">Edit</button>
                </div>
                <Form className="user-form">
                    <Form.Group className="name-group first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" className="pp1-input" value={this.state.firstName} />
                    </Form.Group>
                    <Form.Group className="name-group">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" className="pp1-input" value={this.state.lastName} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className="pp1-input-email" value={this.state.email} />
                    </Form.Group>
                    <button type="submit" className="save-btn">Save</button>
                </Form>
            </div>
            </div>
        )
    }
}