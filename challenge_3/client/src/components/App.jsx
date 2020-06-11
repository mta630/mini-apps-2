import React, { useState, useEffect } from 'react';
import Pins from './Pins.jsx';
import axios from 'axios';
import $ from 'jquery';

const App = () => {
  const [score, setScore] = useState(0)
  const [turn, setTurn] = useState(1)
  const [miniTurn, setMiniTurn] = useState(1)
  const [scores, setScores] = useState([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]])

  const handlePin = (value) => {
    if (miniTurn === 1 && value === '10') {
      $(`#miniBoxf${turn}-${miniTurn}`).text('X')
      $(`#miniBoxf${turn}-2`).text('-')
      var temp = scores;
      temp[turn - 1][0] = 10;
      setScores(temp);
      var totalScore = 0;
      scores.forEach((score, i) => {
        if (score[0] === 10) {
          totalScore += (10 + scores[i+1][0] + scores[i+1][1]);
        } else if (score[1] === 10) {
          totalScore += (10 + scores[i+1][0]);
        } else {
          totalScore += score[0] + score[1];
        }
      })
      setScore(totalScore);
      $(`#score-${turn}`).text(score);
      setTurn(turn+1);
    } else if (miniTurn === 2 && value === '10') {
      $(`#miniBoxf${turn}-2`).text('/')
      var temp = scores;
      temp[turn - 1][1] = 10;
      setScores(temp);
      scores.forEach((score, i) => {
        if (score[0] === 10) {
          totalScore += (10 + scores[i+1][0] + scores[i+1][1]);
        } else if (score[1] === 10) {
          totalScore += (10 + scores[i+1][0]);
        } else {
          totalScore += score[0] + score[1];
        }
      })
      setScore(totalScore);
      $(`#score-${turn}`).text(score);
      setTurn(turn+1);
      setMiniTurn(miniTurn-1);
    } else if (miniTurn === 1) {
      $(`#miniBoxf${turn}-${miniTurn}`).text(value)
      var temp = scores;
      temp[turn - 1][0] = Number(value);
      setScores(temp);
      scores.forEach((score, i) => {
        if (score[0] === 10) {
          totalScore += (10 + scores[i+1][0] + scores[i+1][1]);
        } else if (score[1] === 10) {
          totalScore += (10 + scores[i+1][0]);
        } else {
          totalScore += score[0] + score[1];
        }
      })
      setScore(totalScore);
      $(`#score-${turn}`).text(score);
      setMiniTurn(miniTurn+1);
    } else if (miniTurn === 2) {
      $(`#miniBoxf${turn}-${miniTurn}`).text(value)
      var temp = scores;
      temp[turn - 1][0] = Number(value);
      setScores(temp);
      scores.forEach((score, i) => {
        if (score[0] === 10) {
          totalScore += (10 + scores[i+1][0] + scores[i+1][1]);
        } else if (score[1] === 10) {
          totalScore += (10 + scores[i+1][0]);
        } else {
          totalScore += score[0] + score[1];
        }
      })
      setScore(totalScore);
      $(`#score-${turn}`).text(score);
      setTurn(turn+1);
      setMiniTurn(miniTurn-1);
    }
  }


  return (
    <>
    <Pins
    handlePin={handlePin.bind(this)}
    />
    <div className="scoreboard-container">
      <div className="frames" id="f1"><div className="miniBox" id="miniBoxf1-1"></div><div className="miniBox" id="miniBoxf1-2"></div><div id="score-1" className="score"></div></div>
      <div className="frames" id="f2"><div className="miniBox" id="miniBoxf2-1"></div><div className="miniBox" id="miniBoxf2-2"></div><div id="score-2" className="score"></div></div>
      <div className="frames" id="f3"><div className="miniBox" id="miniBoxf3-1"></div><div className="miniBox" id="miniBoxf3-2"></div><div id="score-3" className="score"></div></div>
      <div className="frames" id="f4"><div className="miniBox" id="miniBoxf4-1"></div><div className="miniBox" id="miniBoxf4-2"></div><div id="score-4" className="score"></div></div>
      <div className="frames" id="f5"><div className="miniBox" id="miniBoxf5-1"></div><div className="miniBox" id="miniBoxf5-2"></div><div id="score-5" className="score"></div></div>
      <div className="frames" id="f6"><div className="miniBox" id="miniBoxf6-1"></div><div className="miniBox" id="miniBoxf6-2"></div><div id="score-6" className="score"></div></div>
      <div className="frames" id="f7"><div className="miniBox" id="miniBoxf7-1"></div><div className="miniBox" id="miniBoxf7-2"></div><div id="score-7" className="score"></div></div>
      <div className="frames" id="f8"><div className="miniBox" id="miniBoxf8-1"></div><div className="miniBox" id="miniBoxf8-2"></div><div id="score-8" className="score"></div></div>
      <div className="frames" id="f9"><div className="miniBox" id="miniBoxf9-1"></div><div className="miniBox" id="miniBoxf9-2"></div><div id="score-9" className="score"></div></div>
      <div className="frames" id="f10"><div className="miniBox" id="miniBoxf10-1"></div><div className="miniBox" id="miniBoxf10-2"></div><div id="score-10" className="score"></div></div>
    </div>
    </>
  )
}

export default App;

