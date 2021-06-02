import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../helpers/Routes';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}