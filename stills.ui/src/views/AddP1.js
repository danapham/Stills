import firebase from 'firebase/app';
import 'firebase/storage';
import React from 'react';
import { Form } from 'react-bootstrap';
import categoriesData from '../helpers/data/categoriesData';
import usersData from '../helpers/data/usersData';
import photosData from '../helpers/data/photosData';

export default class AddP1 extends React.Component {
    state = {
        title: '',
        categoryId: '',
        photoUrl: '',
        categories: [],
        user: {}
    }

    componentDidMount() {
        categoriesData.getAllCategories().then((categories) => this.setState({ categories }));
        usersData.getByFbId(this.props.user.uid).then((user) => this.setState({ user }));
    }

    handleChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'filename') {
            this.setState({
                photoUrl: ''
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

    handleSubmit = (e) => {
        e.preventDefault();

        const newPhoto = {
            title: this.state.title,
            categoryId: Number(this.state.categoryId),
            photoUrl: this.state.photoUrl,
            totalVotes: 0,
            userId: Number(this.state.user.id)
        }

        console.log(newPhoto);

        photosData.addPhoto(newPhoto);
    }

    render() {
        const { categories } = this.state;
        return(
            <div className="add-page">
                <Form className="add-form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.title} required/>
                    </Form.Group>
                    <Form.Group controlId="categoryId">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} value={this.state.categoryId} required>
                            <option value="" disabled defaultValue hidden>Select a category</option>
                            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option> )}
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