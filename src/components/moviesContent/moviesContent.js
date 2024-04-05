import MoviesCard from "../moviesCard/moviesCard";
import "./moviesContent.scss";

export default function MoviesContent({ movies }) {
  return (
    <section className="movies">
      <h1 className="movies__subheader">Top Rated Movies</h1>
      <div className="movies__wrapper">
        {movies &&
          movies.map((movie) => (
            <div className="movies__card">
              <MoviesCard
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
