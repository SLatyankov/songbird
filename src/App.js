import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import AnswerOptions from './Components/AnswerOptions/AnswerOptions';
import Description from './Components/Description/Description';
import State from './State/State';

export default class App extends Component {

  count = 0;
  goToNextLevel = () => {
    State.level += 1;
    
    if (State.level< 7) {
      State.correctAnswer = State.birdSpecies[State.level - 1].birds[this.RandomNumber()]
      this.createAnswerArray();
    } else {
      console.log('the end')
    }

    console.log(State.correctAnswer)
  }

  RandomNumber = () => {
    return Math.floor(Math.random() * 6)
  }

  createAnswerArray() {
    let answerArray = State.birdSpecies[State.level - 1].birds.map((el) => {
    return <p className = "answer" key = {el.birdName} onClick = {this.colored}> <span count = {this.count++} className = "gray">&#8226;</span> {el.birdName}</p>
    })
    return answerArray;

  }

  colored(el) {
    if (State.correctAnswer.birdName === el.target.text) {
      el.target.className = 'green';
    } else {
      el.target.className = 'red';
    }
    
  }

  render() {

    return (
    <div className="App">
      <Header score = {State.score}/>
      <Question bird = {State.correctAnswer}
          isOpen = {State.isAnswerOpen}/>
      < div className = "App__playingField" >
        < AnswerOptions answers = {
          this.createAnswerArray()
        }
        />
        < Description 
          
        / >
      </div>
      
      < button className = "button__nextLevel" onClick = {this.goToNextLevel}> Следующий уровень </button>
    </div>
    )
  }
}

