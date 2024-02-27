import react from "react";
import { useState } from "react";

const Quiz = () => {
  const Questions = [
    {
      id: 1,
      quest: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      answer: "Kolkata",
    },
    {
      id: 2,
      quest: "What is the capital of USA?",
      options: ["Texas", "Newyork", "Washington DC", "Washington"],
      answer: "Washington DC",
    },
  ];
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(1);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (question < Questions.length) {
      setQuestion(question + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {showResult ? (
        <div>
          <h2>Your Score is {score}</h2>
          <button
            onClick={() => {
              setScore(0);
              setQuestion(1);
              setShowResult(false);
            }}
          >
            Restrat Quiz
          </button>
        </div>
      ) : (
        <>
          <h2>
            Question {question}/{Questions.length}
          </h2>
          {Questions.map((q, index) => {
            console.log(q);
            return (
              <div>
                <p>{q.quest}</p>

                {q.options.map((option) => (
                  <button onClick={() => handleAnswer(option === q.answer)}>
                    {option}
                  </button>
                ))}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Quiz;
