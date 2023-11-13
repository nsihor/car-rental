import Card from "react-bootstrap/Card";
import css from './CarCard.module.css'
import sprite from '../../img/sprite.svg'
import Btn from "../Btn/Btn";
import {useDispatch} from "react-redux";
import {changeFavourite} from "../../redux/carsSlice";

const CarCard = ({data}) => {
    const dispatch = useDispatch();


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
                    <span>50$</span>
                </div>
                <div className={css.bottomText}>
                    <span className={css.word}>{data.city}</span>
                    <span className={css.word}>{data.country}</span>
                    <span className={css.word}>{data.rentalCompany}</span>
                    <span className={css.word}>{data.type}</span>
                    <span className={css.word}>{data.make}</span>
                    <span className={css.word}>{data.id}</span>
                    <span className={css.word}>{data.functionalities[0]}</span>
                </div>
                <Btn name='Learn more'/>
            </div>
        </Card>
    )
}

export default CarCard;