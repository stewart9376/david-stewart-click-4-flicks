import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "../src/components/header/header.js";
import MoviesPage from "./pages/moviesPage/moviesPage.js";
import MovieOverviewPage from "./components/movieOverviewPage/movieOverviewPage.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={} */}
        <Route>{/* <Route path="/recommendations" element={} /> */}</Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieOverviewPage />} />
        <Route>{/* <Route path="/showtimesCinemas" element={} /> */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
