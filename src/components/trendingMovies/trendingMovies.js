import { Link } from "react-router-dom";
import "./trendingMovies.scss";
import TrendingMoviesCard from "../trendingMoviesCard/trendingMoviesCard";

export default function TrendingMovies({ trendingMovies }) {
  return (
    <section className="trending-movies">
      <h1 className="trending-movies__header">Trending Movies</h1>
      <div className="trending-movies__wrapper">
        {trendingMovies &&
          trendingMovies.map((trendingMovie) => (
            <div className="trending-movies__card" key={trendingMovie.id}>
              <Link
                className="trending-movies__link"
                to={`/${trendingMovie.id}`}
              >
                <TrendingMoviesCard
                  key={trendingMovie.id}
                  poster={trendingMovie.poster_path}
                />
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
