import React, { Component } from 'react';
import silhouette from './../../img/silhouette.jpg';
import './Question.css'

export default class Question extends Component {
  render() {
    return (
    <div className="Question">
      <img className="silhouette" src={silhouette} alt='silhouette' />
      <div className="Question__right_block">
        <p className="bird__name">******</p>
        <hr className="Question__hr"></hr>
        <player>player</player>
      </div>
    </div>
    )
  }
}