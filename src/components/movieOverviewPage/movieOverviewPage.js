import "./movieOverviewPage.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import netflixIcon from "../../assets/icons/netflix.png";
import amazonIcon from "../../assets/icons/amazon-prime-video.png";
import ratingIcon from "../../assets/icons/rate.png";

export default function MovieOverviewPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        if (!id) return;
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US/&api_key=${process.env.REACT_APP_API_KEY}`
        );
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details", error);
      }
    };

    getMovieDetails();
  }, [id]);

  if (!movie) {
    return;
  }

  const ratingPercentage = (movie.vote_average * 10).toFixed(0) + "%";

  return (
    <section className="overview-page">
      <div className="overview-page__wrapper">
        <div className="overview-page__container">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="overview-page__img"
            alt="movie-poster"
          />
          <p className="overview-page__info">Available to watch on:</p>
          <div className="overview-page__icons">
            <Link
              className="header__link"
              to="https://www.netflix.com/"
              target="_blank"
            >
              <img
                className="overview-page__icon"
                src={netflixIcon}
                alt="netflix link"
              />
            </Link>
            <Link
              className="header__link"
              to="https://www.amazon.co.uk/gp/video/primesignup/"
              target="_blank"
            >
              <img
                className="overview-page__icon"
                src={amazonIcon}
                alt="amazon link"
              />
            </Link>
          </div>
        </div>
        <div className="overview=page__content">
          <h1 className="overview-page__title">{movie.title}</h1>
          <p className="overview-page__release-date">
            Release Date: {movie.release_date}
          </p>
          <p className="overview-page__overview">{movie.overview}</p>
          <div className="overview-page__rating-container">
            <img className="overview-page__popcorn" src={ratingIcon} alt="" />
            <p className="overview-page__rating">
              User Rating: {ratingPercentage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
