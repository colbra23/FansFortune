"use client";
import { useState } from "react";
import Image from "next/image";

const questions = [
  {
    id: 1,
    type: "Win-Draw-Win",
    question: "Match Result",
    options: [
      { text: "Brann", points: 280 },
      { text: "Draw", points: 340 },
      { text: "Red Bull Salzburg", points: 200 }
    ]
  },
  {
    id: 2,
    type: "Correct Score",
    question: "Correct Score",
    options: [
      { text: "Brann 1 - 0", points: 1200 },
      { text: "Brann 2 - 0", points: 1400 },
      { text: "Brann 2 - 1", points: 1000 },
      { text: "Brann 3 - 0", points: 2600 },
      { text: "Brann 3 - 1", points: 1500 },
      { text: "Brann 3 - 2", points: 1800 },
      { text: "Draw 0 - 0", points: 1400 },
      { text: "Draw 1 - 1", points: 700 },
      { text: "Draw 2 - 2", points: 1000 },
      { text: "Draw 3 - 3", points: 2600 },
      { text: "Draw 4 - 4", points: 15100 },
      { text: "Draw 5 - 5", points: 20000 },
      { text: "Red Bull Salzburg 1 - 0", points: 1000 },
      { text: "Red Bull Salzburg 2 - 0", points: 1200 },
      { text: "Red Bull Salzburg 2 - 1", points: 850 },
      { text: "Red Bull Salzburg 3 - 0", points: 1500 },
      { text: "Red Bull Salzburg 3 - 1", points: 1300 },
      { text: "Red Bull Salzburg 3 - 2", points: 1500 },
      { text: "Any Other Score", points: 500 }
    ]
  },
  {
    id: 3,
    type: "Both Teams To Score",
    question: "Both Teams To Score",
    options: [
      { text: "Yes", points: 145 },
      { text: "No", points: 263 }
    ]
  },
  {
    id: 4,
    type: "Winning Margin",
    question: "Winning Margin",
    options: [
      { text: "Brann to win by exactly 1 goal", points: 505 },
      { text: "Brann to win by exactly 2 goals", points: 880 },
      { text: "Brann to win by exactly 3 goals", points: 2050 },
      { text: "Brann to win by 4 or more goals", points: 4300 },
      { text: "0-0 Draw", points: 1725 },
      { text: "Score Draw", points: 425 },
      { text: "Red Bull Salzburg to win by exactly 1 goal", points: 410 },
      { text: "Red Bull Salzburg to win by exactly 2 goals", points: 650 },
      { text: "Red Bull Salzburg to win by exactly 3 goals", points: 1250 },
      { text: "Red Bull Salzburg to win by 4 or more goals", points: 2100 }
    ]
  },
  {
    id: 5,
    type: "Over/Under Goals",
    question: "Over/Under Goals",
    options: [
      { text: "Over 1.5 Goals", points: 140 },
      { text: "Under 1.5 Goals", points: 282 },
      { text: "Over 2.5 Goals", points: 234 },
      { text: "Under 2.5 Goals", points: 156 },
      { text: "Over 3.5 Goals", points: 460 },
      { text: "Under 3.5 Goals", points: 117 },
      { text: "Over 4.5 Goals", points: 850 },
      { text: "Under 4.5 Goals", points: 105 }
    ]
  },
  {
    id: 6,
    type: "Team To Score the First Goal",
    question: "Team To Score the First Goal",
    options: [
      { text: "Brann", points: 212 },
      { text: "Red Bull Salzburg", points: 176 },
      { text: "No Goals", points: 1725 }
    ]
  },
  {
    id: 7,
    type: "Time Markets",
    question: "Lead at 10-20-30-60 Minutes",
    options: [
      { text: "Brann at 10 minutes", points: 790 },
      { text: "Draw at 10 minutes", points: 120 },
      { text: "Red Bull Salzburg at 10 minutes", points: 670 },
      { text: "Brann at 20 minutes", points: 495 },
      { text: "Draw at 20 minutes", points: 153 },
      { text: "Red Bull Salzburg at 20 minutes", points: 410 },
      { text: "Brann at 30 minutes", points: 400 },
      { text: "Draw at 30 minutes", points: 186 },
      { text: "Red Bull Salzburg at 30 minutes", points: 322 },
      { text: "Brann at 60 minutes", points: 308 },
      { text: "Draw at 60 minutes", points: 285 },
      { text: "Red Bull Salzburg at 60 minutes", points: 237 }
    ]
  },
  {
    id: 8,
    type: "Anytime Own Goal",
    question: "Anytime Own Goal",
    options: [
      { text: "Yes", points: 630 },
      { text: "No", points: 104 }
    ]
  },
  {
    id: 9,
    type: "Corner Markets",
    question: "Corner Markets - Total Over Corners",
    options: [
      { text: "Exactly 0 Corners", points: 20100 },
      { text: "4 Or More Corners", points: 100 },
      { text: "5 Or More Corners", points: 101 },
      { text: "6 Or More Corners", points: 103 },
      { text: "7 Or More Corners", points: 108 },
      { text: "8 Or More Corners", points: 117 }
    ]
  },
  {
    id: 10,
    type: "Anytime Goalscorer",
    question: "Anytime Goalscorer",
    options: [
      { text: "Saever Magnusson", points: 375 },
      { text: "Eggert Gudmundsson", points: 400 },
      { text: "Ulrik Mathisen", points: 400 },
      { text: "Felix Myhre", points: 500 },
      { text: "Joachim Soltvedt", points: 550 },
      { text: "Dorgeles Nene", points: 280 },
      { text: "Edmund Baidoo", points: 288 },
      { text: "Adam Daghim", points: 310 },
      { text: "Oscar Gloukh", points: 330 },
      { text: "Stefan Lainer", points: 900 }
    ]
  }
];

export default function ContestEntryForm({ onSubmissionSuccess }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [showSubmission, setShowSubmission] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [returnToSummary, setReturnToSummary] = useState(false);

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((total, answer) => total + (answer.points || 0), 0);
  };

  const handleAnswerSelect = (questionId, optionIndex, points) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        optionIndex,
        points,
        text: questions[questionId - 1].options[optionIndex].text
      }
    }));
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (returnToSummary) {
        // If we came from summary, return to summary after editing
        setReturnToSummary(false);
        setShowSummary(true);
      } else if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowSummary(true);
      }
    }, 500);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleEdit = (questionIndex) => {
    setCurrentQuestion(questionIndex);
    setReturnToSummary(true);
    setShowSummary(false);
  };

  const handleSubmit = () => {
    setShowSummary(false);
    setShowSubmission(true);
    
    // Show padlock animation for 3 seconds, then show success
    setTimeout(() => {
      setShowSubmission(false);
      // Call the parent callback to show the rest of the contest details
      if (onSubmissionSuccess) {
        onSubmissionSuccess();
      }
    }, 3000);
  };

  const getTotalScore = () => {
    return Object.values(answers).reduce((total, answer) => total + answer.points, 0);
  };

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ?.id];

  if (showSuccess) {
    return (
      <div className="contest-entry-form">
        <div className="success-screen">
          <div className="success-content">
            <div className="success-icon">
              <i className="icon-check-circle" style={{ fontSize: '4rem', color: '#28a745' }}></i>
            </div>
            <h3>Entry Successfully Submitted!</h3>
            <p>Your predictions have been locked in. Good luck!</p>
            <p><strong>Total Score: {getTotalScore().toLocaleString()}</strong></p>
            <button 
              className="tf-button style-1"
              onClick={() => window.location.reload()}
            >
              Enter Another Contest
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showSubmission) {
    return (
      <div className="contest-entry-form">
        <div className="submission-screen">
          <div className="submission-content">
            <h3>Securing Your Entry...</h3>
            <div className="padlock-animation">
              <div className="padlock-placeholder">
                <i className="icon-lock" style={{ fontSize: '4rem', color: '#ff6b35' }}></i>
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <p>Your predictions are being locked in our secure system.</p>
          </div>
        </div>
      </div>
    );
  }

  if (showSummary) {
    return (
      <div className="contest-entry-form">
        <div className="question-container">
          <div className="question-header">
            <h2 className="question-title">Review Your Predictions</h2>
          </div>
          <div className="options-grid">
            {questions.map((question, index) => (
              <button 
                key={index} 
                className="option-button"
                onClick={() => handleEdit(index)}
              >
                <div className="option-text">
                  <div className="question-number">Q{index + 1}: {question.question}</div>
                  <div className="selected-answer">{answers[index + 1]?.text || 'No answer selected'}</div>
                </div>
                <div className="option-points">Edit</div>
              </button>
            ))}
          </div>
          <div className="summary-total">
            <h3>Total Score: {calculateTotalScore().toLocaleString()}</h3>
          </div>
          <div className="summary-actions">
            <button 
              className="continue-editing-btn"
              onClick={() => setShowSummary(false)}
            >
              Continue Editing
            </button>
            <button 
              className="submit-btn"
              onClick={handleSubmit}
            >
              Submit Entry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contest-entry-form">
      <div className="entry-header">
        <h3>Contest Entry Form</h3>
        <div className="progress-indicator">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="question-container">
        <div className="question-header">
          <h4>{currentQ.question}</h4>
          <span className="question-type">{currentQ.type}</span>
        </div>

        <div className="options-grid">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                isAnswered && isAnswered.optionIndex === index ? 'selected' : ''
              }`}
              onClick={() => handleAnswerSelect(currentQ.id, index, option.points)}
            >
              <span className="option-text">{option.text}</span>
                    <span className="option-points">{option.points}</span>
            </button>
          ))}
        </div>

        <div className="navigation-buttons">
          {currentQuestion > 0 && (
            <button 
              className="back-button"
              onClick={handlePrevious}
            >
              ← Back to Previous Question
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .contest-entry-form {
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .entry-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .entry-header h3 {
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .progress-indicator {
          margin-bottom: 1rem;
        }

        .progress-indicator span {
          display: block;
          margin-bottom: 0.5rem;
          color: #666;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b35, #f7931e);
          transition: width 0.3s ease;
        }

        .question-container {
          animation: slideIn 0.3s ease-in-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .question-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .question-header h4 {
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .question-type {
          background: #f0f0f0;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: #666;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .option-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 1.5rem;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          min-height: 80px;
        }

        .option-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
        }

        .option-button.selected {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
        }

        .option-text {
          font-weight: 500;
          color: white;
          font-size: 1.1rem;
        }

         .option-points {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1.4rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        } }

        .option-button.selected .option-points {
          background: rgba(255, 255, 255, 0.3);
        }

        .navigation-buttons {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .back-button {
          background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .back-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        .summary-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 2rem;
        }

        /* Hide tickets sold section specifically when summary is showing */
        .summary-modal ~ .tickets-sold-section {
          display: none !important;
        }

        .summary-content {
          background: #0f1419;
          border-radius: 20px;
          padding: 3rem;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid #2d3748;
        }

        .summary-title {
          text-align: center;
          color: white;
          margin-bottom: 3rem;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 1.5rem;
          border: 1px solid #2d3748;
          border-radius: 12px;
          background: #1a202c;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          min-height: 80px;
        }

        .summary-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          border-color: #4a5568;
        }   .summary-question-info {
          flex: 1;
          margin-right: 1rem;
          text-align: left;
        }

        .summary-question-title {
          font-weight: 600;
          color: #ff6b35;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .summary-answer-text {
          color: #a0aec0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .summary-edit-btn {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 80px;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .summary-edit-btn:hover {
          background: linear-gradient(135deg, #e55a2b, #e8851a);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }

        .no-answer-item {
          background: #fff3cd;
          border-color: #ffeaa7;
        }

        .no-answer-item:hover {
          background: #ffeaa7;
        }

        .no-answer-text {
          color: #856404;
          font-style: italic;
        }

        .summary-total {
          text-align: center;
          padding: 2rem;
          background: #1a202c;
          border: 1px solid #2d3748;
          border-radius: 15px;
          margin: 2rem 0;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .summary-total h4 {
          color: #ff6b35;
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
        }

        .summary-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .summary-actions button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 180px;
        }

        .summary-actions .tf-button.style-2 {
          background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
        }

        .summary-actions .tf-button.style-1 {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        }

        .summary-actions button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .summary-actions button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .submission-screen, .success-screen {
          text-align: center;
          padding: 3rem 2rem;
        }

        .submission-content, .success-content {
          max-width: 400px;
          margin: 0 auto;
        }

        .padlock-animation {
          margin: 2rem 0;
        }

        .padlock-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .loading-dots {
          display: flex;
          gap: 0.5rem;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff6b35;
          animation: bounce 1.4s ease-in-out infinite both;
        }

        .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loading-dots span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        .success-icon {
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .options-grid {
            grid-template-columns: 1fr;
          }
          
          .navigation-buttons {
            flex-direction: column;
          }
          
          .summary-answer {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

