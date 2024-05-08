import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MoviesPage from "./pages/moviesPage/moviesPage.js";
import MovieOverviewPage from "./components/movieOverviewPage/movieOverviewPage.js";
import HomePage from "./pages/homePage/homePage.js";
import TrendingOverviewPage from "./components/trendingOverviewPage/trendingOverviewPage.js";
import RecommendationsPage from "./pages/recommendationsPage/recommendationsPage.js";
import PopcornLoader from "./components/popcornLoader/popcornLoader.js";
import AnswerPage from "./pages/answerPage/answerPage.js";
import ShowtimesPage from "./pages/showtimesPage/showtimesPage.js";
import Signup from "./pages/signup/signup.js";
import Login from "./pages/login/login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/:id" element={<TrendingOverviewPage />}></Route>
        <Route>
          <Route path="/recommendations" element={<RecommendationsPage />} />
        </Route>
        <Route path="/loading" element={<PopcornLoader />} />
        <Route path="/answers" element={<AnswerPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieOverviewPage />} />
        <Route>
          <Route path="/showtimes" element={<ShowtimesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
