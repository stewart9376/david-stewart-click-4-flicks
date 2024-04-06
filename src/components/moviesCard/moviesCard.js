import "./moviesCard.scss";

export default function MoviesCard({ poster, title }) {
  return (
    <section className="card">
      <div className="card__item">
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          className="card__img"
          alt=""
        />
        <h5 className="card__content">{title}</h5>
      </div>
    </section>
  );
}
