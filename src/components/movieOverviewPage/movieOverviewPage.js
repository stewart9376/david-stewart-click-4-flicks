import "./movieOverviewPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieOverviewPage({ movies }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US/&api_key=96cf67baca90e09252855c6a92226871`
        );
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details", error);
      }
    };

    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <section className="overviewPage">
      <h1 className="overviewPage__title">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        className="overviewPage__img"
        alt="movie-poster"
      />
      <p className="overviewPage__release-date">{movie.release_date}</p>
      <p className="overviewPage__overview">{movie.overview}</p>
      <p className="overviewPage__rating">{movie.vote_average}</p>
    </section>
  );
}
