import './Article.css'

function Article({ title, description, link, author, authorImg, source, posterURL, pushlishedTime }) {
  return (
    <article className="card">
      <div className="card__content">
        <p className="card__tag">{source}</p>
        <h3 className="card__title">
          <a className="card__title-link" href={link} target="_blank" rel="noreferrer">{title}</a>
        </h3>
        <p className="card__description">{description}</p>
        <footer className="card__content-footer">
          <div className="card__author">
            <img className="card__author-img" src={authorImg} width="24" height="24" alt="Avatar of the author" />
            <span className="card__author-name">{author}</span>
          </div>
          <time className="card__published-time" dateTime={pushlishedTime}>{pushlishedTime}</time>
        </footer>
      </div>

      <div className="card__poster">
        <img className="card__poster-img" src={posterURL} width="240" height="233" alt={title} />
      </div>
    </article>
  )
}

export default Article;