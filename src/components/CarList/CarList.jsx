import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCars} from "../../redux/operations";
import {getCars} from "../../redux/selectors";
import Container from "react-bootstrap/Container";
import CarCard from "../Card/CarCard";
import css from "./CarList.module.css"

const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(getCars);

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
        functionalities: car.functionalities
    }))


    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    useEffect(() => {
        console.log(cars)
    }, [cars]);


    return (
        <Container>
            <ul className={css.list}>
                {updatedCars.map(car =><li key={car.id}><CarCard data={car}/></li>)}
            </ul>
        </Container>
    )
}

export default CarList