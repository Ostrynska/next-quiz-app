'use client';
import { useState } from 'react';

import { FaCheck } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

import styles from './Quiz.module.css';

const Quiz = ({ questions }) => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answersCount, setAnswersCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answerIdxColor, setAnswerIdxColor] = useState(
    Array(questions.length).fill(''),
  );

  const handleAnswer = (isCorrect, idx) => {
    if (!answered) {
      if (isCorrect) {
        setAnswersCount(prevCount => prevCount + 1);
      }
      setAnswerIdx(idx);
      setAnswered(true);

      const newanswerIdxColor = [...answerIdxColor];
      newanswerIdxColor[questionIdx] = isCorrect ? '#367e22' : '#ED4337';
      setAnswerIdxColor(newanswerIdxColor);
    }
  };

  const handleNextQuestion = () => {
    if (questionIdx < questions.length - 1) {
      setQuestionIdx(prevIndex => prevIndex + 1);
      setAnswerIdx(null);
      setAnswered(false);
    } else {
      alert('Quiz completed!');
      handleResetQuiz();
    }
  };

  const handleResetQuiz = () => {
    setQuestionIdx(0);
    setAnswersCount(0);
    setAnswerIdx(null);
    setAnswered(false);
    setAnswerIdxColor(Array(questions.length).fill(''));
  };

  const currentQuestion = questions[questionIdx];
  const totalQuestions = questions.length;

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Question {questionIdx + 1} of {totalQuestions}
      </h1>
      {currentQuestion && (
        <>
          <h2 className={styles.text}>{currentQuestion.question}</h2>
          <ul className={styles.answerList}>
            {currentQuestion.answers.map((answer, index) => (
              <li
                key={answer.text}
                className={`${styles.answer} ${
                  answerIdx === index
                    ? answerIdx.isCorrect
                      ? styles.correct
                      : styles.incorrect
                    : ''
                }`}
                onClick={() => handleAnswer(answer.isCorrect, index)}
              >
                <p>{answer.text}</p>
              </li>
            ))}
          </ul>
          <button className={styles.btn} onClick={handleNextQuestion}>
            Next
          </button>
          <div className={styles.answerCheckList}>
            {answerIdxColor.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={styles.answerCheck}
              >
                {color === '#367e22' && <FaCheck size={20} color="white" />}
                {color === '#ED4337' && <MdClose size={24} color="white" />}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Quiz;
