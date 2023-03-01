import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import ResultCard from '../components/ResultCard'
import { useLocation } from 'react-router-dom'

const QuizPage = () => {
  const [resultStatus, setResultStatus] = useState(false)
  const [finalScore, setFinalScores] = useState(0)

  const location = useLocation()
  const { username, email } = location.state

  const HandleResultStatus = (result) => {
    setFinalScores(result)
    setResultStatus(true)
  }

  return (
    <div className="q_page bd-r">
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
