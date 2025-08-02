"use client";
import { useState, useRef } from "react";
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
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const formRef = useRef(null);

  const scrollToTop = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      // Additional scroll up to ensure header is fully visible
      setTimeout(() => {
        window.scrollBy({
          top: -100,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

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
      // Scroll to top of form before transitioning
      scrollToTop();
      
      // Small additional delay to ensure scroll completes before transition
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
      }, 300);
    }, 500);
  };

  const handleNext = () => {
    scrollToTop();
    setTimeout(() => {
      if (returnToSummary) {
        setReturnToSummary(false);
        setShowSummary(true);
      } else if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowSummary(true);
      }
    }, 300);
  };

  const handlePrevious = () => {
    scrollToTop();
    setTimeout(() => {
      if (currentQuestion > 0) {
        setCurrentQuestion(prev => prev - 1);
      }
    }, 300);
  };

  const handleEdit = (questionIndex) => {
    scrollToTop();
    setCurrentQuestion(questionIndex);
    setReturnToSummary(true);
    setTimeout(() => {
      setShowSummary(false);
    }, 300);
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
        <div className="contest-submission-screen">
          <div className="contest-submission-content">
            <h3>Securing Your Entry...</h3>
            <div className="contest-padlock-animation">
              <div className="contest-padlock-placeholder">
                <i className="icon-lock" style={{ fontSize: '4rem', color: '#ff6b35' }}></i>
                <div className="contest-loading-dots">
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
        <div className="contest-question-container">
          <div className="contest-question-header">
            <h2 className="contest-summary-title">Review Your Predictions</h2>
          </div>
          <div className="contest-summary-grid">
            {questions.map((question, index) => (
              <div 
                key={index} 
                className="contest-summary-item"
                onClick={() => handleEdit(index)}
              >
                <div className="contest-summary-question-info">
                  <div className="contest-summary-question-title">Q{index + 1}: {question.question}</div>
                  <div className="contest-summary-answer-text">{answers[index + 1]?.text || 'No answer selected'}</div>
                </div>
                <button className="contest-summary-edit-btn">Edit</button>
              </div>
            ))}
          </div>
          <div className="contest-summary-total">
            <h4>Total Score: {calculateTotalScore().toLocaleString()}</h4>
          </div>
          <div className="contest-summary-actions">
            <button 
              className="contest-submit-btn"
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
    <div className="contest-entry-form" ref={formRef}>
      <div className="contest-entry-header">
        <h3>Contest Entry Form</h3>
        <div className="contest-progress-indicator">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <div className="contest-progress-bar">
            <div 
              className="contest-progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="contest-question-container">
        <div className="contest-question-header">
          <h4>{currentQ.question}</h4>
        </div>

        <div className="contest-options-grid">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              className={`contest-option-button ${
                isAnswered && isAnswered.optionIndex === index ? 'selected' : ''
              }`}
              onClick={() => handleAnswerSelect(currentQ.id, index, option.points)}
            >
              <span className="contest-option-text">{option.text}</span>
              <span className="contest-option-points">{option.points}</span>
            </button>
          ))}
        </div>

        <div className="contest-navigation-buttons">
          {currentQuestion > 0 && (
            <button 
              className="contest-back-button"
              onClick={handlePrevious}
            >
              ← Back to Previous Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}