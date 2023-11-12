import Button from "react-bootstrap/Button";
import css from './Btn.module.css'
const Btn = ({name ,handleClick}) => {
    let width = ''
    switch (name) {
        case 'Learn More':
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