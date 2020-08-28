import React from 'react';
import './App.css';
import Question from './Variables/State';
import RandomNumber from './Scripts/Random';
import Button from './Buttons/Button';

function App() {
  let x = RandomNumber();
  function newQuestion(params) {
    x = RandomNumber();
    console.log(x);
  }
  return (
    <div className="App">
      <main className="App-main">
        <h1>Тренировка глаголов</h1>
        <h2 className= 'question'>{Question[x]}</h2>
        <Button onClick={newQuestion} />
      </main>
    </div>
  );
}

export default App;
