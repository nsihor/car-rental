import Searcher from "../../components/Searcher/Searcher";
import CarList from "../../components/CarList/CarList";
import {useSelector} from "react-redux";
import {getFilteredContacts, getFavourite} from "../../redux/selectors";

const CatalogPage = () => {
    const cars = useSelector(getFilteredContacts);
    const favourites = useSelector(getFavourite)

    const isFavouriteInclude = (id) => favourites.includes(id)

    const updatedCars = cars.map(car => ({
        id: car.id,
        img: car.img,
        make: car.make,
        model: car.model,
        year: car.year,
        city: car.address.split(', ')[1],
        country: car.address.split(', ')[2],
        rentalCompany: car.rentalCompany,
        type: car.type,
        functionalities: car.functionalities,
        isFavourite: isFavouriteInclude(car.id)
    }))

    return (
    <>
        <Searcher/>
        <CarList data={updatedCars}/>
    </>
)}

export default CatalogPage