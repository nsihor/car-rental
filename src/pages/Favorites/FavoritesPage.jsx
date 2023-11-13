import CarList from "../../components/CarList/CarList";
import {useSelector} from "react-redux";
import {getCars, getFavourite} from "../../redux/selectors";
import {useEffect} from "react";

const FavoritesPage = () => {
    const cars = useSelector(getCars);
    const favourites = useSelector(getFavourite)

    const isFavouriteInclude = (id) => favourites.includes(id)

    const filteredCars = cars
        .filter(car => isFavouriteInclude(car.id))
        .map(car => ({
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
            isFavourite: true,
        }));

    useEffect(() => {
        console.log(filteredCars)
    }, [filteredCars]);

    return <CarList data={filteredCars}/>
}

export default FavoritesPage;