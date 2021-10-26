import Article from '../Article/Article';
import './ArticlesList.css';

function ArticlesList({ articles }) {
  console.log(articles);
  return (
    <div className="articles">
      {
        articles.map(article => (
          <Article
            title={article.title}
            author={article.author}
            link={article.url}
            authorImg='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            description={(article.description.length > 100) ? (article.description.substring(0, 100) + '...') : article.description}
            posterURL={article.urlToImage}
            pushlishedTime={article.publishedAt.substring(0, 10)}
            source={article.source.name}
          />
        ))
      }
    </div>
  )
}

export default ArticlesList;