import BusyWeekQuestion from "../../components/busyWeekQuestion/busyWeekQuestion";
import FrustationQuestion from "../../components/frustationQuestion /frustationQuestion";
import MoodQuestion from "../../components/moodQuestion/moodQuestion";
import "./recommendationsPage.scss";

export default function RecommendationsPage() {
  return (
    <section>
      <h1 className="recommendations__header">Recommendations</h1>
      <div className="questionnaire">
        <MoodQuestion />
        <FrustationQuestion />
        <BusyWeekQuestion />
      </div>
    </section>
  );
}
