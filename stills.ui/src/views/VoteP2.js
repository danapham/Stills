/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import photosData from '../helpers/data/photosData';

export default class VoteP2 extends React.Component {
    state = {
        photos: [],
        photo1: {},
        photo2: {}
    }

    componentDidMount() {
        photosData
            .getByCategoryId(this.props.location.state)
            .then((photos) => {
                this.setState({ photos });
                this.getTwoRandomPhotos(photos)
            });
    }

    getTwoRandomPhotos = (photos) => {
        let photo1 = {};
        let photo2 = {};
        while (photo1.id === photo2.id) {
            photo1 = photos[Math.floor(Math.random() * photos.length)];
            photo2 = photos[Math.floor(Math.random() * photos.length)];
        }
        this.setState({
            photo1, photo2
        })
    }

    handleClick = (e) => {
        const { photos } = this.state;
        this.getTwoRandomPhotos(photos);
        const selected = e.target.id;
        const updatedPhoto = {
            userId: Number(this.state[selected].userId),
            categoryId: Number(this.state[selected].categoryId),
            title: this.state[selected].title,
            photoUrl: this.state[selected].photoUrl,
            totalVotes: Number(++this.state[selected].totalVotes),
            id: Number(this.state[selected].id)
        }
        photosData.updatePhoto(updatedPhoto.id, updatedPhoto);
    }

    render() {
        const { photo1, photo2 } = this.state;
        return(
            <div className="vote-page-2">
            <h1 className="hf vp2-header">Which do you like more?</h1>
            <div className="vp2-photos-div">
                <div className="vp2-photo1-div">
                    <img className="vp2-photo" id="photo1" src={photo1.photoUrl} alt={photo1.title} onClick={this.handleClick} />
                </div>
                <p className="hf vp2-or">or</p>
                <div className="vp2-photo2-div">
                    <img className="vp2-photo" id="photo2" src={photo2.photoUrl} alt={photo2.title} onClick={this.handleClick} />
                </div>
            </div>
            </div>
        )
    }
}