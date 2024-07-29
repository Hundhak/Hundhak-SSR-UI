/**
 * A grid for displaying the current quizzes and games.
 */

import QGCard from "./qg-card"

const items = [
  {
    imgUrl: '/images/quiz-stock.webp',
    title: 'Hundras Quiz',
    description: 'Testa dina kunskaper om olika hundraser!',
    content: 'Hur många hundraser känner du till? Ta vårt quiz och se hur bra du är på att känna igen olika raser.',
    type: "quiz"
  },
  {
    imgUrl: '/images/quiz-stock.webp',
    title: 'Valpvård',
    description: 'Lär dig om valpar och deras vård.',
    content: 'Hur mycket vet du om att ta hand om en valp? Gör vårt quiz och lär dig mer om valpvård.',
    type: "quiz"
  },
  {
    imgUrl: '/images/game-stock.webp',
    title: 'Fånga Bollen',
    description: 'Hjälp hunden att fånga så många bollar som möjligt.',
    content: 'Ett roligt och utmanande spel där du hjälper hunden att fånga bollar. Hur många kan du fånga?',
    type: "game"
  },
  {
    imgUrl: '/images/game-stock.webp',
    title: 'Hund Agility',
    description: 'Träna din hund i en agilitybana.',
    content: 'Testa dina färdigheter och träna din hund genom en spännande agilitybana. Kan du klara alla hinder?',
    type: "game"
  },
  {
    imgUrl: '/images/quiz-stock.webp',
    title: 'Hundens Hälsa Quiz',
    description: 'Hur mycket vet du om hundens hälsa?',
    content: 'Ta reda på hur mycket du vet om hundens hälsa och välmående genom vårt quiz.',
    type: "quiz"
  },
  {
    imgUrl: '/images/game-stock.webp',
    title: 'Matdags',
    description: 'Hjälp hunden att hitta sin mat.',
    content: 'Ett spel där du hjälper hunden att navigera genom ett rum för att hitta sin matskål. Kan du hitta vägen?',
    type: "game"
  }
]


const QuizAndGameGrid = ({ selectedCategory }) => {

  const gameFooter = "Spela"
  const quizFooter = "Gör quiz"
  const filteredItems = items.filter(item => {
    if(selectedCategory === "") return true
    return item.type === selectedCategory
  })

  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-3 lg:px-8 xl:grid-cols-4">
      {filteredItems.map(item => (
        <QGCard key={item.title} imgUrl={item.imgUrl} title={item.title} description={item.description} content={item.content} footer={item.type === "game" ? gameFooter : quizFooter}/>
      ))}
    </div>
  )
}

export default QuizAndGameGrid