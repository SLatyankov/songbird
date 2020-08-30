import React, { Component } from 'react';
import './Description.css';
import silhouette from './../../img/silhouette.jpg';

export default class Description extends Component {
  render() {
    return (
    <div className="Description">
        <div className="Description__wrapper">
          <img className="Description__birdPhoto" src={silhouette} alt='silhouette' />
          <div className="Description__right_block">
            <p className="Description__birdName">{this.props.birdName}</p>
            <hr></hr>
            <p className="Description__birdDescription">{this.props.birdLatinName}</p>
            <hr></hr>
            <p>player</p>
          </div>  
        </div>
        <p className="Description__birdDescription">{this.props.description}</p>  
    </div>
    )
  }
}