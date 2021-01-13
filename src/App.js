import "./App.css";
import "h8k-components";
import Slides from "./components/Slides";

import React, { Component } from "react";

export default class App extends Component {
  slides = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises.",
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush.",
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight.",
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion.",
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!",
    },
  ];

  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  prevSlide = () => {
    this.setState({ index: (this.state.index - 1) % this.slides.length });
  };

  nextSlide = () => {
    this.setState({ index: (this.state.index + 1) % this.slides.length });
  };

  resetSlides = () => [this.setState({ index: 0 })];

  render() {
    return (
      <div>
        <Slides
          prevSlide={this.prevSlide}
          nextSlide={this.nextSlide}
          resetSlides={this.resetSlides}
          slides={this.slides}
          initialState={this.initialState}
          index={this.state.index}
        />
      </div>
    );
  }
}