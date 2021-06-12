import React from 'react';
import photosData from '../helpers/data/photosData';

export default class ChartsP1 extends React.Component {
    state = {
        photos: []
    }

    componentDidMount() {
        photosData.getTopVoted().then((res) => this.setState({ photos: res }))
    }

    render() {
        return(
            <div className="charts-p1">
            <h1 className="hf">Top 10 Photos</h1>
            <div className="cp1-photos-div">
                {this.state.photos.map((p) => (
                    <div className="cp1-photo-div" key={p.id}>
                        <img src={p.photoUrl} alt={p.title} className="cp1-photo" />
                    </div>
                ))}
            </div>
            </div>
        )
    }
}