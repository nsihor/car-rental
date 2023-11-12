import Button from "react-bootstrap/Button";
import css from './Btn.module.css';
import PropTypes from "prop-types";
const Btn = ({name ,handleClick}) => {
    let width = '';
    switch (name) {
        case 'Learn more':
            width = '274px';
            break
        case 'Rental car':
            width = '168px';
            break
        case 'Search':
            width = '136px'
            break
        default:
            width = ''
            break
    }
        return(
    <Button variant="primary" style={{width}} className={css.btn} onClick={handleClick}>{name}</Button>
)}

export default Btn;

Btn.PropsType = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}