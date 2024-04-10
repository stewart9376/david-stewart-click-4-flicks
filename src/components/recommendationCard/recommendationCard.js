import "./recommendationCard.scss";

export default function RecommendationCard({ poster, title }) {
  return (
    <section className="recommendation-card">
      <div className="recommendation-card__item">
        <img
          src={poster}
          className="recommendation-card__img"
          alt="movie poster"
        />
        <h5 className="recommendation-card__content">{title}</h5>
      </div>
    </section>
  );
}
