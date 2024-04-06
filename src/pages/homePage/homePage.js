import "./homePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import TrendingMovies from "../../components/trendingMovies/trendingMovies";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  const getTrendingMovies = async (pageNumber) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${pageNumber}&/&api_key=96cf67baca90e09252855c6a92226871`
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
      <TrendingMovies trendingMovies={trendingMovies} />
    </section>
  );
}
