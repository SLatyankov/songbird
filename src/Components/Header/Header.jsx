import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="Header__wrapper">
      <div className="Header">
          <h1 className="logo">song<span className="logo__span">bird</span></h1>
          <span className="score">всего баллов: {this.props.score}</span>
      </div>
      <div className="level">
          <p className="level__Name level__Name_left">Разминка</p>
        <p className="level__Name active">Воробьиные</p>
        <p className="level__Name">Лесные птицы</p>
        <p className="level__Name">Певчие птицы</p>
        <p className="level__Name">Хищные птицы</p>
          <p className="level__Name level__Name_right">Морские птицы</p>
      </div>
    </div>)
  }
}