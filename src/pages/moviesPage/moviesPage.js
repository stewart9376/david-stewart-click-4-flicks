import "./moviesPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieContent from "../../components/moviesContent/moviesContent";
import { useParams } from "react-router-dom";
import MovieOverviewPage from "../../components/movieOverviewPage/movieOverviewPage";
// const API = process.env.API;
// const API_KEY = process.env.API_KEY;

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US/&api_key=96cf67baca90e09252855c6a92226871`
      );
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section>
      <MovieContent movies={movies} />
      <MovieOverviewPage movies={movies} />
    </section>
  );
}
