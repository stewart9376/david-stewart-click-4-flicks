import { useEffect, useState } from "react";
import "./recommendationsPage.scss";
import axios from "axios";
import RecommendationCard from "../../components/recommendationCard/recommendationCard";

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState(null);
  const [moodAnswer, setMoodAnswer] = useState("");
  const [frustrationAnswer, setFrustrationAnswer] = useState("");
  const [busyWeekAnswer, setBusyWeekAnswer] = useState("");

  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5050/api/recommendations`
      );
      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching Recommendations", error);
      return [];
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const onMoodChangeValue = (event) => {
    setMoodAnswer(event.target.value);
  };

  const onFrustrationChangeValue = (event) => {
    setFrustrationAnswer(event.target.value);
  };

  const onBusyWeekChangeValue = (event) => {
    setBusyWeekAnswer(event.target.value);
  };
  if (!recommendations) {
    return <p>Loading...</p>;
  }
  const recommendFilm = recommendations.filter((recommendation) => {
    return (
      recommendation.genre === moodAnswer &&
      recommendation.happy_ending === frustrationAnswer &&
      recommendation.minutes <= busyWeekAnswer
    );
  });
  console.log(recommendFilm);

  const randomFilm =
    recommendFilm[Math.floor(Math.random() * recommendFilm.length)];

  return (
    <section className="recommendations">
      <h1 className="recommendations__header">Recommendations</h1>
      <div className="recommendations__container">
        {!moodAnswer && (
          <div className="recommendations__wrapper">
            <h3 className="recommendations__subheader">Question 1</h3>
            <h4 className="recommendations__question">
              How would you desribe your mood today ?
            </h4>
            <div
              className="recommendations__answer-container"
              onChange={onMoodChangeValue}
            >
              <input
                className="recommendations__answer"
                type="radio"
                value="Animation/Adventure"
                name="Genre"
              />{" "}
              Happy
              <input
                className="recommendations__answer"
                type="radio"
                value="Animation/Comedy"
                name="Genre"
              />{" "}
              Sad
              <input
                className="recommendations__answer"
                type="radio"
                value="Sci-Fi/Action"
                name="Genre"
              />{" "}
              Stressed
              <input
                className="recommendations__answer"
                type="radio"
                value="Romance/Drama"
                name="Genre"
              />{" "}
              Excited
            </div>
          </div>
        )}
        {moodAnswer && !frustrationAnswer && (
          <div className="recommendations">
            <h3 className="recommendations__subheader">Question 2</h3>
            <h4 className="recommendations__question">
              Did you experience moments of frustration or anxiety today ?
            </h4>
            <div
              className="recommendations__answer-container"
              onChange={onFrustrationChangeValue}
            >
              <input
                className="recommendations__answer"
                type="radio"
                value="true"
                name="Genre"
              />{" "}
              Yes
              <input
                className="recommendations__answer"
                type="radio"
                value="false"
                name="Genre"
              />{" "}
              No
            </div>
          </div>
        )}
        {moodAnswer && frustrationAnswer && !busyWeekAnswer && (
          <div className="recommendations">
            <h3 className="recommendations__subheader">Question 3</h3>
            <h4 className="recommendations__question">
              Have you been busy this week? Both in your career and your day to
              day life? ?
            </h4>
            <div onChange={onBusyWeekChangeValue}>
              <input
                className="recommendations__answer"
                type="radio"
                value={"<= 100"}
                name="minutes"
              />{" "}
              Yes, my week has been manic
              <input
                className="recommendations__answer"
                type="radio"
                value={">100 && <150"}
                name="minutes"
              />{" "}
              Somewhat, I have struggled for some downtime
              <input
                className="recommendations__answer"
                type="radio"
                value={">=150"}
                name="minutes"
              />{" "}
              No, I have had lots of downtime this week
            </div>
          </div>
        )}
        {moodAnswer && frustrationAnswer && busyWeekAnswer && (
          <div className="recommendations">
            <h3 className="recommendations__subheader">Recommended Movies</h3>
            <div className="recommendations__movie-list">
              {recommendFilm.map((recommendation) => (
                <div className="recommendations__card" key={recommendation.id}>
                  <RecommendationCard
                    key={recommendation.id}
                    poster={recommendation.poster_path}
                    title={recommendation.title}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
