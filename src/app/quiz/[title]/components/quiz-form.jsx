/**
 * The form containing the quizzes.
 */
"use client"
import Quiz from "../../page"
import Question from "./question"
import { useState } from "react"
import { Button } from "@/components/ui/button"

//Placeholder for now.
// TODO: Have a micro service that handles the questions.
const questions = [
  {
    prompt: "Vilken är den minsta hundrasen i världen?",
    options: ["Chihuahua", "Pomeranian", "Yorkshireterrier", "Dachshund"],
    answer: 0,
  },
  {
    prompt: "Vilken hundras är känd för sin blåsvarta tunga?",
    options: ["Golden Retriever", "Chow Chow", "Dalmatiner", "Beagle"],
    answer: 1,
  },
  {
    prompt: "Vilken hundras är känd för sin utmärkta luktsinne och används ofta som polishund?",
    options: ["Tax", "Bloodhound", "Cocker Spaniel", "Boxer"],
    answer: 1,
  },
  {
    prompt: "Vilken hundras är känd för sitt vänliga och sällskapliga temperament?",
    options: ["Pitbull", "Rottweiler", "Golden Retriever", "Chihuahua"],
    answer: 2,
  },
  {
    prompt: "Vilken hundras har sitt ursprung i Japan och är känd för sin lojalitet?",
    options: ["Akita", "Samoyed", "Basenji", "Shiba Inu"],
    answer: 0,
  },
  {
    prompt: "Vilken hundras är känd för att vara stor och har ett milt temperament?",
    options: ["Mastiff", "Chihuahua", "Pomeranian", "Mops"],
    answer: 0,
  }
]


const QuizForm = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answerIndex, setAnswerIndex] = useState(null)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionIndex]: answerIndex
    }))
  }

  const advanceQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setAnswerIndex(null)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px6 lg:px-8">
      <h1 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quiz</h1>
      {questions.map((question, index) => (
        <div className={`${currentQuestion === index ? "" : "hidden"}`}>
        <Question 
        key={index} 
        prompt={question.prompt} 
        options={question.options} 
        answerIndex={answerIndex}
        setAnswerIndex={setAnswerIndex}
        />
        </div>
      ))}
      <div className="flex justify-between items-center mt-8">
        {currentQuestion > 0 && (
          <Button variant="secondary" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Föregående</Button>
        )}
        {currentQuestion < questions.length - 1 && answerIndex !== null && (
          <Button variant="secondary" onClick={advanceQuestion}>Nästa</Button>
        )}
        {currentQuestion === questions.length - 1 && answerIndex !== null && (
          <Button onClick={() => setIsSubmitted(true)}>Skicka in</Button>
        )}
      </div>
    </div>
  )
}

export default QuizForm