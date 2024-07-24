import NewsCard from "./news-card";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

//Just mock artcles for now.
//TODO: Create a micro service to call upon to get the articles.
const articles = [
  {
    imgUrl: "/images/news-placeholder.webp",
    articleUrl: "/article1",
    title: "Tips för en Lycklig Hundpromenad",
    content: "Upptäck de bästa tipsen för att säkerställa att din hund njuter av varje promenad. Från att välja rätt koppel till att hitta hundvänliga parker, vi har allt du behöver."
  },
  {
    imgUrl: "/images/news-placeholder.webp",
    articleUrl: "/article2",
    title: "Hälsosamma Hunddieter",
    content: "Lär dig om de bästa dieterna för din hunds hälsa. Vi diskuterar olika matalternativ, näringsbehov i olika livsstadier och hur du håller din hund i toppform."
  },
  {
    imgUrl: "/images/news-placeholder.webp",
    articleUrl: "/article3",
    title: "Träna Din Valp",
    content: "Få de senaste råden om att träna din valp. Från grundläggande kommandon till avancerade tricks, ta reda på hur du effektivt tränar din fyrbenta vän."
  },
  {
    imgUrl: "/images/news-placeholder.webp",
    articleUrl: "/article4",
    title: "Bästa Hundvänliga Platserna",
    content: "Utforska de bästa hundvänliga platserna i ditt område. Från parker till kaféer, upptäck ställen där du och din hund kan ha roligt tillsammans."
  }
];


const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
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
  )
}

export default CardGrid