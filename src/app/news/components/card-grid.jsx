import NewsCard from "./news-card";
import { articles } from "../newsArticles";


const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
    {articles.map(article => (
      <NewsCard 
        key={article.articleUrl} // Använd en unik nyckel för varje element
        imgUrl={article.imgUrl}
        articleUrl={article.articleUrl}
        title={article.title}
        content={article.content}
        author={article.author}
        date={article.date}
      />
    ))}
  </div>
  )
}

export default CardGrid