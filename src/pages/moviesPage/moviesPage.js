import "./moviesPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieContent from "../../components/moviesContent/moviesContent";
import MovieOverviewPage from "../../components/movieOverviewPage/movieOverviewPage";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async (pageNumber) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}&api_key=${process.env.REACT_APP_API_KEY}`
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
      setMovies(firstPageMovies.slice(0, 16));
      setFilteredMovies(firstPageMovies.slice(0, 16));
    };

    fetchMoviesData();
  }, []);

  useEffect(() => {
    if (movies) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  const handleLoadMore = async () => {
    const nextPageMovies = await fetchMovies(currentPage + 1);
    setMovies((prevMovies) => [...prevMovies, ...nextPageMovies.slice(0, 16)]);
    setCurrentPage(currentPage + 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section>
      <div className="searchbar">
        <input
          className="searchbar__search"
          name="search"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <MovieContent movies={filteredMovies} />
      <div className="load">
        <button className="load__button" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
      <MovieOverviewPage />
    </section>
  );
}
