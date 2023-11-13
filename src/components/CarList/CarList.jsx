import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import CarCard from "../Card/CarCard";
import css from "./CarList.module.css"

const CarList = ({data}) => {
    const [noOfElement, setNoOfElement] = useState(12);
    const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true)

    const carSlice = data.slice(0, noOfElement)

    const loadMore = () => {
            setNoOfElement(prevState => prevState + 8)
    }

    useEffect(() => {
        if (noOfElement >= data.length ) {
            setIsLoadMoreVisible(false)
        } else setIsLoadMoreVisible(true)
    }, [noOfElement, data.length]);



    return (
        <Container>
            <ul className={css.list}>
                {carSlice.map(car =><li key={car.id}><CarCard data={car}/></li>)}
            </ul>
            {isLoadMoreVisible && <div className='my-5 py-4 w-100 d-flex justify-content-center'>
                <a onClick={loadMore} className='link-underline-primary'>Load more</a>
            </div>}
        </Container>
    )
}

export default CarList