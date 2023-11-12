import Card from "react-bootstrap/Card";
import clsx from "clsx";
import css from './CarCard.module.css'
import sprite from '../../img/sprite.svg'
import Btn from "../Btn/Btn";

const CarCard = ({data, isFavourite = false, onFavouriteClick}) => (
    <Card className={css.card}>
        <Card.Img variant="top" className={css.img} src={data.img} />
        {!isFavourite ?
            <svg onClick={onFavouriteClick} className={css.svg}>
                <use href={sprite + '#normal'}></use>
            </svg> :
            <svg onClick={onFavouriteClick} className={css.svg}>
                <use href={sprite + '#active'}></use>
            </svg>
        }
        <div className={css.bottom}>
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
                <span className={clsx(css.word, css.lastWord)}>{data.functionalities[0]}</span>
            </div>
            <Btn name='Learn more'/>
        </div>
    </Card>
)

export default CarCard;