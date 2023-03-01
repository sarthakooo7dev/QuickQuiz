import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  const [username, setUserName] = useState('Demo')
  const [email, setEmail] = useState('demo@gmail.com')

  return (
    <div>
      <div className="Home">
        <div className="hm_info ">
          <h2>Enhance your knowledge,let's QuickQuiz</h2>
          <p>Play one min games & win rewards !!</p>
        </div>
        <div className="hm_content">
          <div className="hm_card ">
            <div>
              <input
                type="text"
                id="inputTag"
                placeholder=" Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="inputTag"
                placeholder=" Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Link
              className="Link_btn"
              to="/quiz"
              state={{ username: username, email: email }}
            >
              Done
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
