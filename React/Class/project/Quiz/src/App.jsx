import { useState } from 'react'
import './App.css'

function App() {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)


  const questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correct: 1
    },
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correct: 2
    },
    {
      question: 'What is 10 - 3?',
      options: ['5', '6', '7', '8'],
      correct: 2
    },
    {
      question: 'What is the largest planet?',
      options: ['Saturn', 'Mars', 'Jupiter', 'Venus'],
      correct: 2
    }
  ]

  const handleAnswer = (index) => {
    if (index === questions[currentQ].correct) {
      setScore(score + 1)
    }
    const nextQ = currentQ + 1
    if (nextQ < questions.length) {
      setCurrentQ(nextQ)
    } else {
      setShowScore(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQ(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="container">
      <h1>Simple Quiz</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={restartQuiz} className="btn">Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-section">
          <div className="progress">Question {currentQ + 1}/{questions.length}</div>
          <h2>{questions[currentQ].question}</h2>
          <div className="options">
            {questions[currentQ].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="btn"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
