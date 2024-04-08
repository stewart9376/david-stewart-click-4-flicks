import { useEffect, useState } from "react";
import BusyWeekQuestion from "../../components/busyWeekQuestion/busyWeekQuestion";
import FrustationQuestion from "../../components/frustationQuestion /frustationQuestion";
import MoodQuestion from "../../components/moodQuestion/moodQuestion";
import "./recommendationsPage.scss";
import axios from "axios";

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
    console.log(event.target.value);
    setMoodAnswer(event.target.value);
  };

  const onFrustrationChangeValue = (event) => {
    console.log(event.target.value);
    setFrustrationAnswer(event.target.value);
  };

  const onBusyWeekChangeValue = (event) => {
    console.log(event.target.value);
    setFrustrationAnswer(event.target.value);
  };

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
                value="Superhero/Action"
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
                value="Animation/Comedy"
                name="Genre"
              />{" "}
              Yes, Multiple times
              <input
                className="recommendations__answer"
                type="radio"
                value="Sci-Fi/Action"
                name="Genre"
              />{" "}
              Yes, once or twice
              <input
                className="recommendations__answer"
                type="radio"
                value="Superhero/Action"
                name="Genre"
              />{" "}
              No, not at all
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
                value="Animation/Comedy"
                name="minutes"
              />{" "}
              Yes, my week has been manic
              <input
                className="recommendations__answer"
                type="radio"
                value="Sci-Fi/Action"
                name="minutes"
              />{" "}
              Somewhat, I have struggled for some downtime
              <input
                className="recommendations__answer"
                type="radio"
                value="Superhero/Action"
                name="minutes"
              />{" "}
              No, I have had lots of downtime this week
            </div>
          </div>
        )}
        {/* <FrustationQuestion />
        <BusyWeekQuestion /> */}
      </div>
    </section>
  );
}
