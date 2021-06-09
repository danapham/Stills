import React from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import ProfileSideNav from '../components/ProfileSideNav';
import { Form } from 'react-bootstrap';
import usersData from '../helpers/data/usersData';
import AppModal from '../components/AppModal';

export default class ProfileP1 extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        firebaseId: '',
        isActive: '',
        id: ''
    }

    componentDidMount() {
        usersData.getByFbId(this.props.user.uid).then((res) => {
            if (res !== undefined) {
                this.setState({
                    firstName: res.firstName,
                    lastName: res.lastName,
                    email: res.email,
                    imageUrl: res.imageUrl,
                    firebaseId: res.firebaseId,
                    isActive: res.isActive,
                    id: res.id
                })
            }
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'filename') {
            this.setState({
                imageUrl: ''
            });
            const storageRef = firebase.storage().ref();
            const imageRef = storageRef.child(`profilePhotos/${e.target.files[0].name}-${Date.now()}`);
            imageRef
            .put(e.target.files[0])
            .then((snapshot) => {
                snapshot.ref.getDownloadURL().then((imageUrl) => {
                    this.setState({
                        imageUrl
                    })
                    usersData.updateUser(this.state.firebaseId, {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        imageUrl: imageUrl,
                        firebaseId: this.state.firebaseId,
                        isActive: this.state.isActive,
                        id: this.state.id
                    })
                });
            })
            setTimeout(() => window.location.reload(), 2000);
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        usersData.updateUser(this.state.firebaseId, this.state)
    }

    render() {
        return(
            <div className="profile-page">
            <ProfileSideNav />
            <div className="edit-profile">
                <h1 className="hf">Edit Profile</h1>
                <div className="pic-btn-div">
                <div style={{ backgroundImage: `url(${this.state.imageUrl})`}} className="pp1-user-pic"></div>
                <AppModal btnName="Edit" btnClass="pp1-edit-btn" saveBtnName="Save" saveBtnType="submit" handleSubmit={this.handleSubmit}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="imageUrl">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control className="white-input" type="url" onChange={this.handleChange} value={this.state.imageUrl} required/>
                        </Form.Group>
                        <Form.Group className="flex-container-ctr">
                        <p className="or-p">or</p>
                        </Form.Group>
                        <Form.Group controlId="filename" className="flex-container-ctr">
                            <label className="a-form-btn">
                                <Form.Control type="file" onChange={this.handleChange} />
                                Choose Photo
                            </label>
                        </Form.Group>
                    </Form>
                </AppModal>
                </div>
                <Form className="user-form" onSubmit={this.handleSubmit}>
                    <Form.Group className="name-group first-name" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" className="pp1-input" value={this.state.firstName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="name-group" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" className="pp1-input" value={this.state.lastName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className="pp1-input-email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <button type="submit" className="save-btn">Save</button>
                </Form>
            </div>
            </div>
        )
    }
}