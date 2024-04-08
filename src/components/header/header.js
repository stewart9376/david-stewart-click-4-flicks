import { Link, NavLink } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <p className="header__logo">Click 4 Flicks</p>
      </Link>
      <nav className="header__navbar">
        <ul className="header__list">
          <NavLink to="/recommendations" className="header__link">
            <li>Recommendations</li>
          </NavLink>
          <NavLink to="/movies" className="header__link">
            <li>Movies</li>
          </NavLink>
          <NavLink to="/showtimes" className="header__link">
            <li>Cinema Showtimes</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
