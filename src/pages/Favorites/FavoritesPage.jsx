import CarList from "../../components/CarList/CarList";
import {useSelector} from "react-redux";
import {getCars, getFavourite} from "../../redux/selectors";

const FavoritesPage = () => {
    const cars = useSelector(getCars);
    const favourites = useSelector(getFavourite)

    const isFavouriteInclude = (id) => favourites.includes(id)

    const filteredCars = cars
        .filter(car => isFavouriteInclude(car.id))
        .map(car => ({
            ...car,
            isFavourite: true,
        }));

    return <CarList data={filteredCars}/>
}

export default FavoritesPage;