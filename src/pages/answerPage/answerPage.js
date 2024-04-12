import RecommendationCard from "../../components/recommendationCard/recommendationCard";
import "./answerPage.scss";

export default function AnswerPage({ recommendedMovies }) {
  console.log(recommendedMovies);
  return (
    <div className="answer-page">
      <h3 className="answer-page__subheader">Take your pick</h3>
      <div className="answer-page__wrapper">
        {recommendedMovies.map((recommendation) => (
          <div className="answer-page__card" key={recommendation.id}>
            <RecommendationCard
              key={recommendation.id}
              poster={recommendation.poster_path}
              title={recommendation.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
