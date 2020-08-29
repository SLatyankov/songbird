import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import AnswerOptions from './Components/AnswerOptions/AnswerOptions';
import Description from './Components/Description/Description';
import State from './State/State';

export default class App extends Component {

  render() {
    return (
    <div className="App">
      <Header score = {State.score}/>
      <Question />
      < div className = "App__playingField" >
        <AnswerOptions />
        < Description 
          birdName = {State.birdName}  
          birdLatinName = {State.birdLatinName}
          description = {State.description}
        / >
      </div>
      
      < button className = "button__nextLevel" > Следующий уровень </button>
    </div>
    )
  }
}

