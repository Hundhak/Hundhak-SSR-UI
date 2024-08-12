/**
 * Individual news page.
 */
"use client"
import NewsArticle from "./components/article"
import ArticleRow from "./components/article-row"
import { articles } from "../newsArticles"
import { rowArticles } from "../newsArticles"


const NewsPage = ({ params }) => {

  const article = articles.find(article => article.articleUrl === params.url)

  if(!article) {
    return <div>Article not found.</div>
  }

  return (
    <div>
      <NewsArticle
      img={article.imgUrl}
      title={article.title}
      author={article.author}
      date={article.date}
      content={article.content}
      />
      <ArticleRow articles={rowArticles} />
    </div>
  )
}

export default NewsPage