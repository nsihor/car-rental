import {Route, Routes} from "react-router-dom";
import {lazy, Suspense, useEffect} from "react";
import {fetchCars} from "./redux/operations";
import {useDispatch} from "react-redux";
import Loader from './components/Loader/Loader';
import Layout from "./components/Layout/Layout";


const CatalogPage = lazy(() => import('./pages/Catalog/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));
const MainPage = lazy(() => import('./pages/Main/MainPage'));

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favourites" element={<FavoritesPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
