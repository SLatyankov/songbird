import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
  
  render() {

    let levels = this.props.levelName.map((el, ind) => {
      let clazzName = "level__Name";
      if (ind === 0) { clazzName += " level__Name_left"};
      if (ind === 5) { clazzName += " level__Name_right" };
      if (ind === this.props.level-1) { clazzName += " active" }
      return <p className={clazzName}>{el}</p>
});

    return (
      <div className="Header__wrapper">
        <div className="Header">
          <h1 className="logo">song<span className="logo__span">bird</span></h1>
          <span className="score">всего баллов: {this.props.score}</span>
        </div>
        <div className="level">
 {levels}
        </div>
      </div>)
  }
}

// 'Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'          
/* <p className="level__Name level__Name_left">Разминка</p>
          <p className="level__Name active">Воробьиные</p>
          <p className="level__Name">Лесные птицы</p>
          <p className="level__Name">Певчие птицы</p>
          <p className="level__Name">Хищные птицы</p>
          <p className="level__Name level__Name_right">Морские птицы</p>*/