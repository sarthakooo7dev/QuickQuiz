import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import QuizPage from './Pages/QuizPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  )
}

export default App
