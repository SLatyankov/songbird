import React, { Component } from 'react';
import './AnswerOptions.css'

export default class AnswerOptions extends Component {

  render() {

    return (
    <div className="AnswerOptions">
      {this.props.answers}
    </div>
    )
  }
}