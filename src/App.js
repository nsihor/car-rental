import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import MainPage from "./pages/Main/MainPage.jsx";
import CatalogPage from "./pages/Catalog/CatalogPage.jsx";
import FavoritesPage from "./pages/Favorites/FavoritesPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
