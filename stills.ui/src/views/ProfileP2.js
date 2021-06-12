import React from 'react';
import ProfileSideNav from '../components/ProfileSideNav';
import likedPhotosData from '../helpers/data/likedPhotosData';

export default class ProfileP2 extends React.Component {
    state = {
        photos: []
    }

    componentDidMount() {
        likedPhotosData.getByFbId(this.props.user.uid).then((res) => this.setState({ photos: res }))
    }

    render() {
        return(
            <div className="profile-page">
            <ProfileSideNav />
            <div className="edit-profile">
                <h1 className="hf">Liked Photos</h1>
                <div className="pp2-photos-div">
                    {this.state.photos.map((p) => <div key={p.id} className="pp2-photo-div"><img className="pp2-photo" src={p.photo.photoUrl} alt={p.photo.title}/></div>)}
                </div>
            </div>
            </div>
        )
    }
}