import { NavLink } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <p className="header__logo">Click 4 Flicks</p>
        <nav className="header__navbar">
          <ul className="header__list">
            <NavLink to="/" className="header__link">
              <li>Recommendation Questionnaire</li>
              <li>Movies</li>
              <li>Cinema Showtimes</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
