import React from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase from 'firebase/app';

export default class AddP1 extends React.Component {
    state = {
        title: '',
        category: '',
        photoUrl: ''
    }

    handleChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'filename') {
            this.setState({
                photo: ''
            });
            const storageRef = firebase.storage().ref();
            const imageRef = storageRef.child(`userPhotos/${e.target.files[0].name}-${Date.now()}`);
            imageRef.put(e.target.files[0]).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((photoUrl) => {
                    this.setState({ photoUrl });
                });
            });
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    render() {
        return(
            <div className="add-page">
                <Form className="add-form">
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.title} required/>
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} value={this.state.category} required>
                            <option value="" disabled selected hidden>Select a category</option>
                            <option value="category">category</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="photoUrl">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="url" onChange={this.handleChange} value={this.state.photoUrl} required/>
                    </Form.Group>
                    <Form.Group controlId="filename">
                        <Form.Control type="file" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                    <button type="submit">
                    Submit
                    </button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}