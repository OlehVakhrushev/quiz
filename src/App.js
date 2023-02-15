import React, {useEffect, useState} from 'react';
import france from './pitures/france.jpg'
import currency from './pitures/currency.jpg'
import mountain from './pitures/mountain.jpg'
import ocean from './pitures/ocean.jpg'
import desert from './pitures/desert.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


    const questions = [
        {
            question: "What is the capital of France?",
            answers: [
                {text: "Paris", correct: true},
                {text: "London", correct: false},
                {text: "Berlin", correct: false},
                {text: "Rome", correct: false}
            ],
            image: france
        },
        {
            question: "What is the currency of Japan?",
            answers: [
                {text: "Yen", correct: true},
                {text: "Euro", correct: false},
                {text: "Dollar", correct: false},
                {text: "Pound", correct: false}
            ],
            image: currency
        },
        {
            question: "What is the tallest mountain in the world?",
            answers: [
                {text: "Mount Everest", correct: true},
                {text: "K2", correct: false},
                {text: "Lhotse", correct: false},
                {text: "Makalu", correct: false}
            ],
            image: mountain
        },
        {
            question: "What is the largest ocean in the world?",
            answers: [
                {text: "Pacific Ocean", correct: true},
                {text: "Atlantic Ocean", correct: false},
                {text: "Indian Ocean", correct: false},
                {text: "Arctic Ocean", correct: false}
            ],
            image: ocean
        },
        {
            question: "What is the biggest desert in the world?",
            answers: [
                {text: "Saharan Desert", correct: true},
                {text: "Gobi Desert", correct: false},
                {text: "Kalahari Desert", correct: false},
                {text: "Atacama Desert", correct: false}
            ],
            image: desert
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (currentQuestion === questions.length) {
            const newScore = numCorrectAnswers / questions.length * 100;
            setScore(newScore);
        }
    }, [currentQuestion, numCorrectAnswers, questions.length]);

    const handleAnswerClick = (answer) => {
        if (answer.correct) {
            setNumCorrectAnswers(numCorrectAnswers + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className="App">
            <h1 className="quiz-title">Quiz App</h1>
            <div className="question-container">
                <h2 className="question-number">Question {currentQuestion + 1} of {questions.length}</h2>
                <div className="image-container">
                    <img src={questions[currentQuestion].image} height='250' width='400' alt="Question"/>
                </div>
                <h3 className="question-text">{questions[currentQuestion].question}</h3>
                <div className="d-grid gap-2">
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <div key={index} className="answer">
                            <button
                                className={`btn btn-secondary btn-lg ${answer.correct ? "correct" : ""}`}
                                onClick={() => handleAnswerClick(answer)}
                            >
                                {answer.text}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {currentQuestion === questions.length ? (
                <div className="results">
                    <h2>You scored {score} out of {questions.length}</h2>
                </div>
            ) : null}
        </div>
    );
}

export default App;