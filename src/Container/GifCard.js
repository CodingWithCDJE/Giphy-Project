import React, { Component } from 'react';

class GifCard extends Component {
  constructor(props) {
    super(props);

    this.gifRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }

  componentDidMount() {
    this.gifRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.gifRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { title, images } = this.props.gif;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.gifRef} alt={title} src={images.original.url} />
      </div>
    );
  }
}

export default GifCard;
