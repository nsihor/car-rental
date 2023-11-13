import {Field, Form, Formik} from "formik";
import css from './Searcher.module.css'
import clsx from "clsx";
import Btn from "../Btn/Btn";
import brandOptions from "../../helpers/options";
import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/carsSlice";

const Searcher = () => {
    const dispatch = useDispatch();

    return (
        <Formik initialValues={{brand: ''}} onSubmit={(values) => dispatch(setFilter(values.brand))}>
            <Form className={clsx(css.form, "input-group, mx-auto d-flex justify-content-center gap-3")}>
                <div>
                    <Field
                        className='form-select'
                        name='brand'
                        as='select'
                        placeholder='Choose the Brand'
                    >
                        {brandOptions.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
                    </Field>
                </div>
                <Btn name='Search'/>
            </Form>
        </Formik>
    );
}

export default Searcher;
//
// <div className='col-2'>
//     <Field
//         className='form-select'
//         name='price'
//         as='select'
//         placeholder='To $'
//     >
//         {Array.from({ length: 7 }, (_, index) => (
//             <option key={index} value={30 + index * 10}>
//                 To {30 + index * 10}$
//             </option>
//         ))}
//     </Field>
// </div>
// <div className='col-2'>
//     <Field
//         className='form-control'
//         name='mileageFrom'
//         type='text'
//         placeholder='From'
//     />
// </div>
// <div className='col-2'>
//     <Field
//         className='form-control'
//         name='mileageTo'
//         type='text'
//         placeholder='To'
//     />
// </div>
