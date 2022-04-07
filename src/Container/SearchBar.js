import React, { Component } from 'react';
import '../css/SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      keyWord: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.keyWord);
  }

  render() {
    const { keyWord } = this.state;
    return (
      <div className='searchbar-container'>
        <form onSubmit={this.onFormSubmit} className='searchbar-form'>
          <div className='searchbar-field'>
            <label className='searchbar-label'>
              <b>Giphy Search</b>
            </label>
            <input
              className='searchbar-input-field'
              type='text'
              value={keyWord}
              onChange={(e) => this.setState({ keyWord: e.target.value })}
            />
            <input type='submit' className='searchbar-input-submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
