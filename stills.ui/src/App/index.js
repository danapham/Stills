import firebase from 'firebase/app';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteNavbar from '../components/SiteNavbar';
import Routes from '../helpers/Routes';
import fbConnection from '../helpers/data/connection';

fbConnection();

export default class App extends React.Component {
  state = {
    user: ''
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => sessionStorage.setItem('token', token));
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    })
  };

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App black-bg">
        <BrowserRouter>
          <SiteNavbar />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}