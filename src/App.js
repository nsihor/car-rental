import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/Main/MainPage";
import CatalogPage from "./pages/Catalog/CatalogPage";
import FavoritesPage from "./pages/Favorites/FavoritesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favourites" element={<FavoritesPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
