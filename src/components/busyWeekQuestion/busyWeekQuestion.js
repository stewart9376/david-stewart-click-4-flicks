import "./busyWeekQuestion.scss";

export default function BusyWeekQuestion() {
  return (
    <div className="busy-week">
      <h3 className="busy-week__subheader">Question 3</h3>
      <h4 className="busy-week__question">
        Have you been busy this week? Both in your career and your day to day
        life?
      </h4>
      <div className="busy-week__container">
        <p className="busy-week__answer">A. Yes, my week has been manic</p>
        <p className="busy-week__answer">
          B. Somewhat, I have struggled for some downtime
        </p>
        <p className="busy-week__answer">
          C. No, I have had lots of downtime this week
        </p>
      </div>
    </div>
  );
}
