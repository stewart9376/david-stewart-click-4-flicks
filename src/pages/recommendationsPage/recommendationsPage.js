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
  return (
    <section className="recommendations">
      <h1 className="recommendations__header">Recommendations</h1>
      <div className="recommendations__container">
        {!moodAnswer && (
          <div className="mood">
            <h3 className="mood__subheader">Question 1</h3>
            <h4 className="mood__question">
              How would you desribe your mood today ?
            </h4>
            <div onChange={onMoodChangeValue}>
              <input type="radio" value="Superhero/Action" name="Genre" /> Happy
              <input type="radio" value="Animation/Comedy" name="Genre" /> Sad
              <input type="radio" value="Sci-Fi/Action" name="Genre" /> Stressed
              <input type="radio" value="Romance/Drama" name="Genre" /> Excited
            </div>
          </div>
        )}
        {moodAnswer && !frustrationAnswer && (
          <div className="mood">
            <h3 className="mood__subheader">Question 1</h3>
            <h4 className="frustration__question">
              Did you experience moments of frustration or anxiety today ?
            </h4>
            <div onChange={onFrustrationChangeValue}>
              <input type="radio" value="Animation/Comedy" name="Genre" /> Yes,
              Multiple times
              <input type="radio" value="Sci-Fi/Action" name="Genre" /> Yes,
              once or twice
              <input type="radio" value="Superhero/Action" name="Genre" /> No,
              not at all
            </div>
          </div>
        )}
        {/* <FrustationQuestion />
        <BusyWeekQuestion /> */}
      </div>
    </section>
  );
}
