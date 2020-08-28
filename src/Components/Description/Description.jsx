import React, { Component } from 'react';
import './Description.css'

export default class Description extends Component {
  render() {
    return (
    <div className="Description">
        <div className="Description__wrapper">
          <img src="#" alt="bird" className="bird__photo" />
          <div className="right_block">
            <p className="bird__name">{this.props.birdName}</p>
            <hr></hr>
            <p className="bird__name">{this.props.birdLatinName}</p>
            <hr></hr>
            <player>player</player>
            <p className="bird__name">{this.props.description}</p>
          </div>
        </div>
    </div>
    )
  }
}