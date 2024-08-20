import Card from "react-bootstrap/Card";
import css from './CarCard.module.css'
import sprite from '../../img/sprite.svg'
import Btn from "../Btn/Btn";
import {useDispatch} from "react-redux";
import {changeFavourite} from "../../redux/carsSlice";
import {useState} from "react";
import BasicModalWindow from "../BasicModalWindow/BasicModalWindow";
import CarDetailsModal from "../CarDetailsModal/CarDetailsModal";
import PropTypes from "prop-types";

const CarCard = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch();
    const splitAddress = data.address.split(', ');

    const handleModalSwitch = () => setIsModalOpen(prevState => !prevState);

    return (
        <Card className={css.card}>
            <Card.Img variant="top" className={css.img} src={data.img} />
            {!data.isFavourite ?
                <svg onClick={() => dispatch(changeFavourite(data.id))} className={css.svg}>
                    <use href={sprite + '#normal'}></use>
                </svg> :
                <svg onClick={() => dispatch(changeFavourite(data.id))} className={css.svg}>
                    <use href={sprite + '#active'}></use>
                </svg>
            }
            <div>
                <div className={css.title}>
                    <div>
                        <span>{data.make}</span>{' '}<span className={css.model}>{data.model}</span><span>, {data.year}</span>
                    </div>
                    <span>{data.rentalPrice}</span>
                </div>
                <div className={css.bottomText}>
                    <span className={css.word}>{splitAddress[1]}</span>
                    <span className={css.word}>{splitAddress[2]}</span>
                    <span className={css.word}>{data.rentalCompany}</span>
                    <span className={css.word}>{data.type}</span>
                    <span className={css.word}>{data.make}</span>
                    <span className={css.word}>{data.id}</span>
                    <span className={css.word}>{data.functionalities[0]}</span>
                </div>
                <Btn name='Learn more' handleClick={handleModalSwitch}/>
            </div>
            {isModalOpen && <BasicModalWindow onClose={handleModalSwitch}><CarDetailsModal data={data}/></BasicModalWindow>}
        </Card>
    )
}

export default CarCard;

CarCard.PropsType = {
    data: PropTypes.array
}