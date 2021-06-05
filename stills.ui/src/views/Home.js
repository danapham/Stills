import React from 'react';

export default class Home extends React.Component {
    state = {

    }

    render() {
        return(
            <>
            <div className="home-photo-div">
                <div className="h-photo-1">
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/stills-3790f.appspot.com/o/sitePhotos%2F401.jpg?alt=media&token=1fc3d130-8217-472f-b8fe-8e8e23748207"
                    alt="girl wearing striped hat"
                    className="h-img"
                    />
                </div>
                <div className="h-photo-2">
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/stills-3790f.appspot.com/o/sitePhotos%2Ffilament-colorful-insect-art-tracey-capone-photography-fine-invertebrate-pest-arthropod-wing-macro-membrane_960_2048x.jpg?alt=media&token=099b7aa9-13d7-4d88-bc6b-626e942e472b"
                    alt="orange insect"
                    className="h-img"
                    />
                </div>
                <div className="h-photo-3">
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/stills-3790f.appspot.com/o/sitePhotos%2Ftravel-photography-tips-768x512.jpg?alt=media&token=8d05f293-83b5-4fe8-af59-dc247e494e43"
                    alt="girl walking along gravel path on mountain"
                    className="h-img"
                    />
                </div>
                <div className="h-photo-4">
                    <img
                    src="https://firebasestorage.googleapis.com/v0/b/stills-3790f.appspot.com/o/sitePhotos%2Fbest-european-cities-for-photography-paris.jpg?alt=media&token=68c9e1a6-d856-4599-ad9b-3761699a88a7"
                    alt="buildings in paris"
                    className="h-img"
                    />
                </div>
            </div>
            </>
        )
    }
}