import "./homePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import TrendingMovies from "../../components/trendingMovies/trendingMovies";
import TrendingOverviewPage from "../../components/trendingOverviewPage/trendingOverviewPage";
import recommendation from "../../assets/icons/8726315_question_circle_icon.png";
import movie from "../../assets/icons/2191561_movie_play_show_sound_video_icon.png";
import filmReel from "../../assets/icons/46994_film_reel_icon.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  const getTrendingMovies = async (pageNumber) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${pageNumber}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      return data.results;
    } catch (error) {
      console.error("Error fetching trending Movies", error);
      return [];
    }
  };

  useEffect(() => {
    const getTrendingMovie = async () => {
      const firstPageMovies = await getTrendingMovies(1);
      const secondPageMovies = await getTrendingMovies(2);

      setTrendingMovies([...firstPageMovies, ...secondPageMovies]);
    };
    getTrendingMovie();
  }, []);

  return (
    <section>
      <h1 className="features">Features</h1>
      <div className="features__container">
        <Link className="features__link" to="/recommendations">
          <div className="features__card">
            <img
              className="features__icon"
              src={recommendation}
              alt="recommendation icon"
            ></img>
            <h2 className="features__subheader">Recommendations</h2>
            <p className="features__content">
              Questionnaire with three questions to filter down and randomly
              pick three movies
            </p>
          </div>
        </Link>
        <Link className="features__link" to="/movies">
          <div className="features__card">
            <img className="features__icon" src={movie} alt="movie icon"></img>
            <h2 className="features__subheader">Movies</h2>
            <p className="features__content">
              A list of the top rated movies, along with an overview page
              describing the movie
            </p>
          </div>
        </Link>
        <Link className="features__link" to="/showtimes">
          <div className="features__card">
            <img
              className="features__icon"
              src={filmReel}
              alt="showtimes icon"
            ></img>
            <h2 className="features__subheader">Cinema Showtimes</h2>
            <p className="features__content">
              A dropdown of cities in the UK showing the latest films out now
              and the showtimes
            </p>
          </div>
        </Link>
      </div>
      <TrendingMovies trendingMovies={trendingMovies} />
      <TrendingOverviewPage trendingMovies={trendingMovies} />
    </section>
  );
}
