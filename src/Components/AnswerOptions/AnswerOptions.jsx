import React, { Component } from 'react';
import './AnswerOptions.css'

export default class AnswerOptions extends Component {

  answerArray = 'answerArray'
  render() {


    return (
    <ul className="AnswerOptions">
      {this.answerArray}
    </ul>
    )
  }
}