/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import React from 'react';

export default class Home extends React.Component {

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
            <div className="home-info-div">
                <h1>Welcome to Stills: a photographer’s tool.</h1>
                <h2>Post a photo.</h2>
                <h3>Gauge reactions.</h3>
                <h4>Vote for your favorites.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet pretium dolor, a consectetur est. Nam vitae felis a magna cursus sollicitudin non non orci. Vestibulum bibendum purus ac quam congue condimentum. Aliquam non egestas risus. Etiam laoreet dignissim orci sit amet consectetur. Phasellus quis nibh sollicitudin, eleifend quam non, aliquet mi. Nulla sed pulvinar massa, et varius elit. Aliquam dictum sit amet tortor id finibus. Aenean imperdiet interdum ante, id rhoncus velit varius quis. Vivamus lacinia sollicitudin viverra. Cras pretium dignissim neque, vitae feugiat lorem vehicula non. Praesent odio mauris, fringilla quis tortor in, accumsan facilisis urna. Duis nec orci sed leo tristique efficitur. Aenean quis bibendum lacus.</p>
                <p>Morbi tincidunt ornare tortor eget dignissim. Nunc eleifend nisl neque, id pharetra tortor mollis at. Sed pharetra porttitor malesuada. Mauris vitae maximus augue, eget pulvinar nibh. Vivamus tincidunt, dui et lobortis varius, ante dolor fermentum dolor, ut efficitur purus massa elementum ex. Donec et neque facilisis risus mattis mollis. Etiam vehicula justo id quam efficitur malesuada at quis lacus. Nam ullamcorper diam ac urna faucibus porttitor. Etiam porttitor nisi ut ligula semper fermentum. In venenatis pretium turpis, vel hendrerit augue pellentesque non.</p>
                <p>Vivamus aliquet urna non pharetra aliquet. Sed venenatis consequat mauris, non pulvinar libero molestie eget. Ut vitae elementum lorem. Cras suscipit nulla in risus venenatis tincidunt. Nunc purus magna, dictum pulvinar bibendum vel, posuere a turpis. Vivamus vulputate quam non nunc sagittis, non interdum lacus molestie. Nullam ut neque pretium, porta lectus eu, gravida mi. Vivamus facilisis elit nec eros sollicitudin convallis. Nullam quis dictum mauris, sed imperdiet ex. Cras eleifend sem in nisl tincidunt gravida volutpat ac mauris. Vestibulum vitae arcu maximus, tempor mauris id, mattis mauris. In hac habitasse platea dictumst.</p>
            <div className="h-button-div">
            <button className="h-button"><Link to="/add-p1" className="h-button-link">Submit a photo</Link></button>
            <button className="h-button"><Link to="/vote-p1" className="h-button-link">Start voting</Link></button>
            </div>
            </div>
            </>
        )
    }
}