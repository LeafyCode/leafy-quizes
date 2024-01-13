interface AnswerProps {
  answer: string;
  onClick: () => void;
}

export const Answer = ({ answer, onClick } : AnswerProps) => {

  return (
    <div onClick={onClick} className={'border-2 rounded-md text-sm p-2 mb-4'}>{answer}</div>
  )
}