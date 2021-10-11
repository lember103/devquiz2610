import * as React from 'react'
import { useState } from 'react'

export default function NewQuestion({
  answers,
  handleAnswerTextInput,
  handleAnswerCorrectStatusChange,
}) {
  return (
    <form className="question">
      <textarea placeholder="Insert your Question here...." />
      <section>
        {answers.map((answer, index) => (
          <section>
            <p>Answer {index + 1}</p>
            <input
              onChange={e => {
                handleAnswerTextInput(e, index)
              }}
              className="answer-1-text"
              value={answer.answerText}
            />
            <p>Is Correct?</p>
            <input
              type="radio"
              name={'new-question'}
              checked={answer.correct}
              onChange={e => {
                handleAnswerCorrectStatusChange(e, index)
              }}
            />
          </section>
        ))}
      </section>
    </form>
  )
}
