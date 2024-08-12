/**
 * A component that represents a question.
 */

const Question = ({ prompt, options, questionIndex, selectedAnswers, handleAnswerSelect }) => {

  return (
    <div className="p-6 rounded-lg mb-6 "> 
      <h2 className="text-2xl font-bold mb-4">{prompt}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className={`flex items-center gap-2 cursor-pointer ${selectedAnswers[questionIndex] === index ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`} onClick={() => handleAnswerSelect(questionIndex, index)}>
            <div className={`w-4 h-4 rounded-full border ${selectedAnswers[questionIndex] === index ? "bg-primary border-primary" : "border-input"}`} />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question