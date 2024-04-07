import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "../src/components/header/header.js";
import MoviesPage from "./pages/moviesPage/moviesPage.js";
import MovieOverviewPage from "./components/movieOverviewPage/movieOverviewPage.js";
import HomePage from "./pages/homePage/homePage.js";
import TrendingOverviewPage from "./components/trendingOverviewPage/trendingOverviewPage.js";
import RecommendationsPage from "./pages/recommendationsPage/recommendationsPage.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<TrendingOverviewPage />}></Route>
        <Route>
          <Route path="/recommendations" element={<RecommendationsPage />} />
        </Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieOverviewPage />} />
        <Route>{/* <Route path="/showtimesCinemas" element={} /> */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
