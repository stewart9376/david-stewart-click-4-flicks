import "./recommendationCard.scss";

export default function RecommendationCard({ poster, title }) {
  return (
    <section className="card">
      <div className="card__item">
        <img src={poster} className="card__img" alt="movie poster" />
        <h5 className="card__content">{title}</h5>
      </div>
    </section>
  );
}
