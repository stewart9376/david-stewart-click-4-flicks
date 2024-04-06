import { Link } from "react-router-dom";
import MoviesCard from "../moviesCard/moviesCard";
import "./moviesContent.scss";

export default function MoviesContent({ movies }) {
  return (
    <section className="movies">
      <h1 className="movies__header">Top Rated Movies</h1>
      <div className="movies__wrapper">
        {movies &&
          movies.map((movie) => (
            <div className="movies__card" key={movie.id}>
              <Link className="movies__link" to={`/movies/${movie.id}`}>
                <MoviesCard
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
