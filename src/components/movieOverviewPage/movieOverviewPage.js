import "./movieOverviewPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieOverviewPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        if (!id) return;
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
    <section className="overview-page">
      <div className="overview-page__wrapper">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          className="overview-page__img"
          alt="movie-poster"
        />
        <div className="overview=page__content">
          <h1 className="overview-page__title">{movie.title}</h1>
          <p className="overview-page__release-date">{movie.release_date}</p>
          <p className="overview-page__overview">{movie.overview}</p>
          <p className="overview-page__rating">{movie.vote_average}</p>
        </div>
      </div>
    </section>
  );
}
