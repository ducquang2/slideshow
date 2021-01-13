import React, { Component } from "react";

export default class Slides extends Component {
  render() {
    const item = this.props.slides[this.props.index];
    const index = this.props.index;
    return (
      <div>
        <div id="navigation" className="text-center">
          <button onClick={this.props.resetSlides} className="small outlined">
            Restart
          </button>
          <button
            onClick={this.props.prevSlide}
            disabled={index === 0}
            className="small"
          >
            Prev
          </button>
          <button
            onClick={this.props.nextSlide}
            disabled={index === this.props.slides.length - 1}
            className="small"
          >
            Next
          </button>
        </div>
        <div id="slide" className="card text-center">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
}