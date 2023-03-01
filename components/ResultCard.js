import React from 'react'
import { Link } from 'react-router-dom'

const ResultCard = ({ finalScore }) => {
  return (
    <div className="result_card ">
      <h2>Thanks for taking,the Quiz</h2>
      <h2>
        Your Score : <span className="clr">{finalScore}</span>{' '}
      </h2>
      <Link to="/" className="Link_btn">
        Play Again
      </Link>
    </div>
  )
}

export default ResultCard
