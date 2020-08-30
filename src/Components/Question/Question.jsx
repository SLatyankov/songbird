import React, { Component } from 'react';
import silhouette from './../../img/silhouette.jpg';
import './Question.css'

export default class Question extends Component {
  render() {

    return (
      <div className="Question">
        <img className="silhouette" src={this.props.isOpen ? process.env.PUBLIC_URL + this.props.bird.birdPhoto : silhouette} alt='silhouette' />
        <div className="Question__right_block">
          <p className="bird__name">{
            this.props.isOpen ?
              this.props.bird.birdName :
              '******'}</p>
          <hr className="Question__hr"></hr>
          <audio controls>
            <sourse src={process.env.PUBLIC_URL + this.props.bird.birdSound} type='audio/mpeg'></sourse>
          </audio>
        </div>
      </div>
    )
  }
}

