import React, { Component } from 'react';
import '../layout/app.css';
import {Header} from './Header'

export const MOVIE_NERDS_API_URL = 'http://localhost:5000'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

