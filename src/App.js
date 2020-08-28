import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import AnswerOptions from './Components/AnswerOptions/AnswerOptions';
import Description from './Components/Description/Description';

export default class App extends Component {

  state = {
    score: 0,
    birdName: 'заглушка',
    birdLatinName: 'латинская заглушка',
    description: 'латинская заглушка латинская заглушкалатинская заглушкалатинская заглушка'
  }

  render() {
    return (
    <div className="App">
      <Header score = {this.state.score}/>
      <Question />
      <AnswerOptions />
      < Description 
      birdName = {this.state.birdName}  
      birdLatinName = {this.state.birdLatinName}
      description = {this.state.description}
      / >
      <button className = "button">Следующий уровень</button>
    </div>
    )
  }
}

