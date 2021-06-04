import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteNavbar from '../components/SiteNavbar';
import Routes from '../helpers/Routes';

export default class App extends React.Component {
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