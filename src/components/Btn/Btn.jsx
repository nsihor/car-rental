import Button from "react-bootstrap/Button";
import css from './Btn.module.css';
import PropTypes from "prop-types";
const Btn = ({name ,handleClick}) => {
    let type = 'button';
    let width;
    switch (name) {
        case 'Learn more':
            width = '274px';
            break
        case 'Search':
            width = '136px'
            type = 'submit'
            break
        default:
            width = '274px'
            type = 'button'
            break
    }
        return(
    <Button variant="primary" type={type} style={{width}} className={css.btn} onClick={handleClick}>{name}</Button>
)}

export default Btn;

Btn.PropsType = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}