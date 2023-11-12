import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
// import CarCard from "../Card/CarCard";

const Hero = () => (
    <div className='d-flex align-items-center' style={{height: '75vh'}}>
        <Container>
            <h1 className='h1 fw-bold'>Car Rental</h1>
            <p>Раді вас бачити на нашому сайті, тут ви зможете арендувати автомобіль на будь який смак.
                <br/>Щоб обрати автомобіль перейдійть за{" "}
                <Link className='link-dark' to={'/catalog'}>посиланням.</Link></p>
            {/*<CarCard/>*/}
        </Container>
    </div>
)

export default Hero;