import React, { Component } from 'react';
import giphy from '../api/giphy';
import SearchBar from './SearchBar';
import GifList from '../Components/GifList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  onSearchSubmit = async (term) => {
    const response = await giphy.get('/v1/gifs/search', {
      params: {
        api_key: 'w5izDdpXD6u4CNRFXyBzKhsVF7NK8hhA',
        q: `${term}`,
        limit: 34,
      },
    });
    this.setState({ gifs: response.data.data });
  };
  render() {
    const { gifs } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <GifList gifs={gifs} />
      </div>
    );
  }
}

export default App;
