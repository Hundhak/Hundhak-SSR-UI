/**
 * The form containing the quizzes.
 */
"use client"

import Question from "./question"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionIndex]: answerIndex
    }))
  }

  const calculateCorrectAnswers = (selectedAnswers, correctAnswers) => {
    let noOfCorrect = 0
    for (let i = 0; i < correctAnswers.length; i++) {
      if(selectedAnswers[i] === correctAnswers[i].answer) {
        noOfCorrect++
      }
    }
    setTotalCorrectAnswers(noOfCorrect)
  }

  const submit = () => {
    setIsSubmitted(true)
    calculateCorrectAnswers(selectedAnswers, questions)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px6 lg:px-8 border-2 rounded-lg">
      {isSubmitted ?
       <h1 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resultat</h1>:
       <h1 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quiz</h1> }
      {questions.map((question, index) => (
        <div key={index} className={`${currentQuestion === index && !isSubmitted ? "" : "hidden"}`}>
        <Question 
        key={index} 
        prompt={question.prompt} 
        options={question.options} 
        questionIndex={currentQuestion}
        selectedAnswers={selectedAnswers}
        handleAnswerSelect={handleAnswerSelect}
        />
        </div>
      ))}
      <div className="flex justify-between items-center mt-8">
        {currentQuestion > 0 && isSubmitted == false && (
          <Button variant="secondary" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Föregående</Button>
        )}
        {currentQuestion < questions.length - 1 && selectedAnswers[currentQuestion] !== undefined && isSubmitted == false && (
          <Button variant="secondary" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Nästa</Button>
        )}
        {currentQuestion === questions.length - 1 && selectedAnswers[currentQuestion] !== undefined && isSubmitted == false && (
          <Button onClick={() => submit()}>Skicka in</Button>
        )}
      </div>
      {isSubmitted && (
        <div>
          <p className="text-2xl text-gray-600 font-bold mb-4">Du fick {totalCorrectAnswers} antal rätt av {questions.length}</p>
          <div className="space-y-2">
            {questions.map((question, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                    className={`w-4 h-4 rounded-full ${
                      selectedAnswers[index] === question.answer ? "bg-green-500 border-green-500" : "bg-red-500 border-red-500"
                    } border`}
                  />
                  <span className={`${selectedAnswers[index] === question.answer ? "text-green-500" : "text-red-500"}`}>{question.prompt}</span>
              </div>
            ))}
          </div>
          <Button className="mt-8">
            <Link href={"/vovvenoje"}>Tillbaka till vovvenöje</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default QuizForm