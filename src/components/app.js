import React, { Component } from 'react';

import SearchBar from 'searchbar';
import WeatherList from 'weatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
