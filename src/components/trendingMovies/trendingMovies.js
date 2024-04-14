import { Link } from "react-router-dom";
import "./trendingMovies.scss";
import TrendingMoviesCard from "../trendingMoviesCard/trendingMoviesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrendingMovies({ trendingMovies }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 800,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="trending-movies">
      <h1 className="trending-movies__header">Trending Movies</h1>
      <Slider {...settings} className="trending-movies__wrapper">
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
      </Slider>
    </div>
  );
}
