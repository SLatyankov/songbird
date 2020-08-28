import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import AnswerOptions from './Components/AnswerOptions/AnswerOptions';
import Description from './Components/Description/Description';

function App() {

  return (
    <div className="App">
      <Header />
      <Question />
      <AnswerOptions />
      <Description />
      <button className = "button">Next Level</button>
    </div>
  );
}

export default App;
