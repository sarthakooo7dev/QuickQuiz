import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import ResultCard from '../components/ResultCard'
import { useLocation } from 'react-router-dom'

const QuizPage = () => {
  const [resultStatus, setResultStatus] = useState(false)
  const [finalScore, setFinalScores] = useState(0)

  // #using location state to get username & email from home page Link to
  const location = useLocation()
  const { username, email } = location.state

  // # Helper fnc -- it is used to get result status(i.e if true result card displayed)
  const HandleResultStatus = (result) => {
    setFinalScores(result)
    setResultStatus(true)
  }

  // #note: component QuestionCard & ResultCard are rendered as per resultStatus condition.
  return (
    <div className="q_page ">
      <div className="user_info">
        <h1>Hey,{username}</h1>
        <p>{email}</p>
      </div>
      {resultStatus ? (
        <ResultCard finalScore={finalScore} />
      ) : (
        <QuestionCard HandleResultStatus={HandleResultStatus} />
      )}
    </div>
  )
}

export default QuizPage
