/**
 * A header for each quiz.
 */
import { Button } from "@/components/ui/button"

const QuizHeader = ({ title, startQuest }) => {
  return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Välkomen till quiz om {title}</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">Testa din kunskap om {title}</p>
          <Button variant="secondary" className="mt-6" onClick={startQuest}>
            Starta
          </Button>
        </div>
      </div>
  )
}

export default QuizHeader