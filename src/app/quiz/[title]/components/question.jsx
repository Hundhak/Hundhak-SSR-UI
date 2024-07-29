/**
 * A component that represents a question.
 */
"use client"

import { useState } from "react"

const Question = ({ prompt, options, answerIndex, setAnswerIndex }) => {

  return (
    <div className="p-6 rounded-lg mb-6 "> 
      <h2 className="text-2xl font-bold mb-4">{prompt}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className={`flex items-center gap-2 cursor-pointer ${answerIndex === index ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`} onClick={() => setAnswerIndex(index)}>
            <div className={`w-4 h-4 rounded-full border ${answerIndex === index ? "bg-primary border-primary" : "border-input"}`} />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question