import React, { Component } from 'react';
import './Question.css'

export default class Question extends Component {
  render() {
    return (
    <div className="Question">
      <img src="#" alt="bird" className="bird__photo"/>
      <div className="right_block">
        <p className="bird__name">*****</p>
        <hr></hr>
        <player>player</player>
      </div>
    </div>
    )
  }
}