import "./trendingMoviesCard.scss";

export default function TrendingMoviesCard({ poster }) {
  return (
    <section className="trending-card">
      <div className="trending-card__item">
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          className="trending-card__img"
          alt=""
        />
      </div>
    </section>
  );
}
