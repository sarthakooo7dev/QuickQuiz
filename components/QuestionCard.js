/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import Quest_data from '../data/data'

const QuestionCard = ({ HandleResultStatus }) => {
  // # States and there use:-
  //    -> currentQuestion: used to track current question displayed
  //    -> selectedOptions: used to track all the options selected by user
  //    -> scoreArray : used to track scores by having boolean values according to options selected
  //    -> seconds : used to dec. seconds for the timer
  //    -> timerBar: used to dec. as seconds dec. for div(element below seconds)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([
    ...Array(Quest_data.length),
  ])
  const [scoreArray, setScoreArray] = useState([...Array(Quest_data.length)])
  const [seconds, setSeconds] = useState(59)
  const [timerBar, setTimerBar] = useState(100)

  // #note: Dec. timer is achieved with useffect with setInterval

  useEffect(() => {
    console.log(seconds, '--useeffect')
    setTimerBar(timerBar - 1.6)
    if (seconds === 0) {
      HandleSubmit()
    }

    var timer = setInterval(() => {
      setSeconds(seconds - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds])

  // #Helper fnc - It is uesd to handle prev & next clicks

  const HandleClick = (clickVal) => {
    if (clickVal === 'next') {
      setCurrentQuestion(currentQuestion + 1)
    }

    if (clickVal === 'prev') {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  // #Helper fnc - It is uesd to handle click on options

  const HandleOptionsClick = (optionVal, optiontext) => {
    const newArrOptions = [...selectedOptions]
    newArrOptions[currentQuestion] = optiontext
    setSelectedOptions(newArrOptions)

    const newArrScores = [...scoreArray]
    newArrScores[currentQuestion] = optionVal
    setScoreArray(newArrScores)

    console.log(newArrScores, '-- current scores')
    console.log(newArrOptions, '--options selected by user')
  }

  // #Helper fnc - It is uesd to handle submit.It calculates totals score and changes result Status.
  const HandleSubmit = () => {
    const result = scoreArray.reduce((acc, curr) => {
      if (curr === true) {
        acc = acc + 10
      }
      return acc
    }, 0)
    HandleResultStatus(result)
    console.log(result, '=== result')
  }

  return (
    <div className="main_comp bd-r">
      {/* #timer section */}

      <div className="bd-g timer">
        00:{seconds}
        <div
          className="timerBar"
          style={{
            background: 'green',
            height: '0.4rem',
            width: `${timerBar}%`,
            transition: 'width 0.5s',
          }}
        ></div>
      </div>

      {/* Main component where questions is displayed */}
      <div className="quest_container">
        <div className="quest_text ">
          <h2>
            <span className="clr">{currentQuestion + 1}</span> / 5
          </h2>
          <h2>Q : {Quest_data[currentQuestion].quest}</h2>
        </div>

        <div className="quest_options ">
          <ul className="">
            {Quest_data[currentQuestion].options.map((val, index) => {
              return (
                <li
                  className="li_options"
                  key={val.id}
                  onClick={() => HandleOptionsClick(val.isCorrect, val.text)}
                >
                  <span>{String.fromCharCode(65 + index)}.</span> {val.text}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="btns ">
          <button
            className="btn_blue"
            disabled={currentQuestion === 0}
            onClick={() => HandleClick('prev')}
          >
            {' '}
            prev
          </button>
          <button
            className="btn_blue"
            disabled={currentQuestion === Quest_data.length - 1}
            onClick={() => HandleClick('next')}
          >
            next
          </button>
          {currentQuestion === Quest_data.length - 1 ? (
            <button className="btn_green" onClick={HandleSubmit}>
              Submit
            </button>
          ) : (
            ' '
          )}
        </div>
      </div>

      {/* Selected options section */}

      <div className="sel_options_container">
        <h2 className="heading">Options Selected</h2>
        {selectedOptions.map((val, index) => {
          return (
            <div className="sel_options_val">
              {index + 1}. {val}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionCard
