import React, { Component } from 'react';
import './AnswerOptions.css'

export default class AnswerOptions extends Component {

  answerArray = 'answerArray'
  render() {


    return (
    <div className="AnswerOptions">
      {this.answerArray}
    </div>
    )
  }
}