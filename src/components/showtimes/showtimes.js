import "./showtimes.scss";

export default function Showtimes({ title, showtimes }) {
  return (
    <div className="showtimes__container">
      <p className="showtimes__title">{title}</p>
      <div className="showtimes__times-container">
        <p className="showtimes__times">{showtimes}</p>
      </div>
    </div>
  );
}
