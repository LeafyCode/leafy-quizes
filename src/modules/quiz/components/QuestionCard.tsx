'use client';

import {Answer} from "@app/modules/quiz/components/Answer";
import {useState} from "react";

const answers: string[] = [
  'Nuwara Eliya',
  'Sri Jayawardenepura Kotte',
  'Rathnapura',
  'Galle'
]

export const QuestionCard = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')

  return (
    <div className={'w-[400px] h-[400px] bg-white rounded-md p-5 shadow-md'}>
      <p><strong>Question 1</strong> <span className={'text-sm'}>What is the capital of Sri Lanka?</span></p>

      <div className={'w-full h-0.5 bg-slate-800 mb-8'}></div>

      <p>Selected answer: {selectedAnswer}</p>

      {answers.map((answer) => {
        return <Answer answer={answer} key={answer}
          onClick={() => {
            setSelectedAnswer(answer)
          }}
        />
      })}
    </div>
  )
}