/**
 * A row of articles useful for displaying at the end of a news page to engage further reading.
 */

import NewsCard from "../../components/news-card"

const ArticleRow = ({articles}) => {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(article => (
            <NewsCard 
              key={article.articleUrl} // Använd en unik nyckel för varje element, här använder vi articleUrl
              imgUrl={article.imgUrl}
              articleUrl={article.articleUrl}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticleRow