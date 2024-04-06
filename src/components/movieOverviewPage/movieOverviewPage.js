import "./movieOverviewPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import netflixIcon from "../../assets/icons/netflix.png";
import amazonIcon from "../../assets/icons/amazon-prime-video.png";
import popcornIcon from "../../assets/icons/popcorn.png";

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

  const ratingPercentage = movie.vote_average * 10;

  return (
    <section className="overview-page">
      <div className="overview-page__wrapper">
        <div className="overview-page__container">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="overview-page__img"
            alt="movie-poster"
          />
          <div className="overview-page__icons">
            <p className="overview-page__info">Available to watch on:</p>
            <img className="overview-page__icon" src={netflixIcon} alt="" />
            <img className="overview-page__icon" src={amazonIcon} alt="" />
          </div>
        </div>
        <div className="overview=page__content">
          <h1 className="overview-page__title">{movie.title}</h1>
          <p className="overview-page__release-date">
            Release Date: {movie.release_date}
          </p>
          <p className="overview-page__overview">{movie.overview}</p>
          <div className="overview-page__rating-container">
            <img className="overview-page__popcorn" src={popcornIcon} alt="" />
            <p className="overview-page__rating">{movie.vote_average}</p>
          </div>
          <div
            className="overview-page__ratingBar"
            style={{ width: `${ratingPercentage}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
