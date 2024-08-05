/**
 * Individual page for each quiz
 */

"use client"
import QuizHeader from "./components/quiz-header"
import QuizForm from "./components/quiz-form"
import { useState } from "react"

const IndividualQuizPage = ({ params: { url } }) => {

  const [isStarted, setIsStarted] = useState(false)

  const startQuest = () => { setIsStarted(true)}

  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
      <div className={`${isStarted ? "hidden" : ""}`}>
        <QuizHeader title={url} startQuest={startQuest}/>
      </div>
      <div className={`${isStarted ? "block" : "hidden"}`}>
        <QuizForm/>
      </div>
    </div>
  )
}

export default IndividualQuizPage