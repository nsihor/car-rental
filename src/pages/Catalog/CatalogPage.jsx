import Searcher from "../../components/Searcher/Searcher";
import CarList from "../../components/CarList/CarList";
import {useSelector} from "react-redux";
import {getFilteredContacts, getFavourite} from "../../redux/selectors";

const CatalogPage = () => {
    const cars = useSelector(getFilteredContacts);
    const favourites = useSelector(getFavourite)

    const isFavouriteInclude = (id) => favourites.includes(id)

    const updatedCars = cars.map(car => ({
        ...car,
        isFavourite: isFavouriteInclude(car.id),
    }))

    return (
    <>
        <Searcher/>
        <CarList data={updatedCars}/>
    </>
)}

export default CatalogPage