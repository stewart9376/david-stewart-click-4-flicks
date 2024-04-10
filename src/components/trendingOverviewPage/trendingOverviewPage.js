import "./trendingOverviewPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import netflixIcon from "../../assets/icons/netflix.png";
import amazonIcon from "../../assets/icons/amazon-prime-video.png";
import popcornIcon from "../../assets/icons/popcorn.png";

export default function TrendingOverviewPage() {
  const { id } = useParams();
  const [eachTrendingmovie, seteachTrendingMovie] = useState(null);

  useEffect(() => {
    const getTrendingMovieDetails = async () => {
      try {
        if (!id) return;
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US/&api_key=${process.env.REACT_APP_API_KEY}`
        );
        seteachTrendingMovie(data);
      } catch (error) {
        console.error("Error fetching trending movie details", error);
      }
    };

    getTrendingMovieDetails();
  }, [id]);

  if (!eachTrendingmovie) {
    return;
  }

  const ratingPercentage = eachTrendingmovie.vote_average * 10;

  return (
    <section className="overview-page">
      <div className="overview-page__wrapper">
        <div className="overview-page__container">
          <img
            src={`https://image.tmdb.org/t/p/original${eachTrendingmovie.poster_path}`}
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
          <h1 className="overview-page__title">{eachTrendingmovie.title}</h1>
          <p className="overview-page__release-date">
            Release Date: {eachTrendingmovie.release_date}
          </p>
          <p className="overview-page__overview">
            {eachTrendingmovie.overview}
          </p>
          <div className="overview-page__rating-container">
            <img className="overview-page__popcorn" src={popcornIcon} alt="" />
            <p className="overview-page__rating">
              {eachTrendingmovie.vote_average}
            </p>
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
