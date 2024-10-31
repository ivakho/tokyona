import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TourPage from "./pages/TourPage/TourPage";
import ExcursionsPage from "./pages/ExcursionsPage/ExcursionsPage";
import ExcursionPage from "./pages/ExcursionPage/ExcursionPage";
import CustomToursPage from "./pages/CustomToursPage/CustomToursPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router basename="/tokyona">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tours" element={<TourPage />} />
          <Route path="/excursions" element={<ExcursionsPage />} />
          <Route path="/excursions/:id" element={<ExcursionPage />} />
          <Route path="/custom_tours" element={<CustomToursPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
