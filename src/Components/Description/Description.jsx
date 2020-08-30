import React, { Component } from 'react';
import './Description.css';
import silhouette from './../../img/silhouette.jpg';

export default class Description extends Component {

  render() {
    if (this.props.bird) {
      return (
        <div className="Description">
          <div className="Description__wrapper">
            <img className="Description__birdPhoto" src={silhouette} alt='silhouette' />
            <div className="Description__right_block">
              <p className="Description__birdName">{this.props.bird.birdName}</p>
              <hr></hr>
              <p className="Description__birdDescription">{this.props.bird.birdLatinName}</p>
              <hr></hr>
              <p>player</p>
            </div>
          </div>
          <p className="Description__birdDescription">{this.props.bird.description}</p>
        </div>
      )
    } else {
      return <p>кликай по птицам</p>
    }
  }
}