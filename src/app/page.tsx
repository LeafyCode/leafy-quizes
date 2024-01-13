import {QuestionCard} from "@app/modules/quiz/components/QuestionCard";


export default function Home() {
  return (
    <div className={'text-slate-800 h-14 bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen flex items-center justify-center'}>
      <div>
        <h1 className={'text-white text-center mb-4 font-bold text-xl'}>Leafy Quizzes</h1>

        <QuestionCard></QuestionCard>
      </div>
    </div>
  )
}
