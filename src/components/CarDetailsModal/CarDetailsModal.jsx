import css from "../Card/CarCard.module.css";
import modalCss from "./CarDetailsModal.module.css"
import clsx from "clsx";
import PropTypes from "prop-types";

const CarDetailsModal = ({data}) => {
    const splitRentalConditions = data.rentalConditions.split('\n')
    const splitAge = splitRentalConditions[0].split(' ')

    return (
        <div className={modalCss.wrapper}>
            <img alt='car' className={clsx(modalCss.img, 'card-img-top mb-3')} src={data.img} />
            <div className={css.title}>
                <div>
                    <span>{data.make}</span>{' '}<span className={css.model}>{data.model}</span><span>, {data.year}</span>
                </div>
            </div>
            <div className={modalCss.afText}>
                <span className={css.word}>{data.city}</span>
                <span className={css.word}>{data.country}</span>
                <span className={css.word}>Id:{data.id}</span>
                <span className={css.word}>Year:{data.year}</span>
                <span className={css.word}>Type:{data.type}</span>
                <span className={css.word}>Fuel Consumption:{data.fuelConsumption}</span>
                <span className={css.word}>Engine Size:{data.engineSize}</span>
            </div>
            <p className={modalCss.description}>{data.description}</p>
            <span className={modalCss.af}>Accessories and functionalities:</span>
            <p className={modalCss.afText}>
                {data.accessories.map(accessory => <span className={css.word}>{accessory}</span>)}
                {data.functionalities.map(functionality => <span className={css.word}>{functionality}</span>)}
            </p>
            <span className={modalCss.af}>Rental conditions:</span>
            <p className={modalCss.conditionsText}>
                <span className={modalCss.condition}>{splitAge[0]} {splitAge[1]} <span className={css.model}>{splitAge[2]}</span></span>
                <span className={modalCss.condition}>{splitRentalConditions[1]}</span>
                <span className={modalCss.condition}>{splitRentalConditions[2]}</span>
                <span className={modalCss.condition}>Mileage: <span className={css.model}>{data.mileage}</span></span>
                <span className={modalCss.condition}>Price: <span className={css.model}>{data.rentalPrice}</span></span>
            </p>
            <a href="tel:+380730000000" className={clsx(modalCss.link, 'bg-primary')}>Rental car</a>
        </div>
    )
}

export default CarDetailsModal;

CarDetailsModal.PropsType = {
    data: PropTypes.array
}