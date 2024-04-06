import "./moviesPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieContent from "../../components/moviesContent/moviesContent";
import MovieOverviewPage from "../../components/movieOverviewPage/movieOverviewPage";
// const API = process.env.API;
// const API_KEY = process.env.API_KEY;

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);

  const fetchMovies = async (pageNumber) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}&api_key=96cf67baca90e09252855c6a92226871`
      );
      return data.results;
    } catch (error) {
      console.error("Error fetching Movies", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchMoviesData = async () => {
      const firstPageMovies = await fetchMovies(1);
      const secondPageMovies = await fetchMovies(2);
      const thirdPageMovies = await fetchMovies(3);

      setMovies([...firstPageMovies, ...secondPageMovies, ...thirdPageMovies]);
    };
    fetchMoviesData();
  }, []);

  return (
    <section>
      <MovieContent movies={movies} />
      <MovieOverviewPage movies={movies} />
    </section>
  );
}
