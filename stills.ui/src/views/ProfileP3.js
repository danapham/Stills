import React from 'react';
import ProfileSideNav from '../components/ProfileSideNav';
import photosData from '../helpers/data/photosData';

export default class ProfileP3 extends React.Component {
    state = {
        photos: []
    }

    componentDidMount() {
        photosData.getByFbId(this.props.user.uid).then((res) => this.setState({ photos: res }))
    }

    render() {
        return(
            <div className="profile-page">
            <ProfileSideNav />
            <div className="edit-profile">
                <h1 className="hf">Uploaded Photos</h1>
                <div className="pp2-photos-div">
                {this.state.photos.map((p) => <div key={p.id} className="pp2-photo-div">
                                                <img className="pp2-photo" src={p.photoUrl} alt={p.title}/>
                                                </div>)}
                </div>
            </div>
            </div>
        )
    }
}