import {Field, Form, Formik} from "formik";
import css from './Searcher.module.css'
import clsx from "clsx";
import Btn from "../Btn/Btn";

const Searcher = ({handleSubmit}) => {
    const brandOptions = [
        "Buick",
        "Volvo",
        "HUMMER",
        "Subaru",
        "Mitsubishi",
        "Nissan",
        "Lincoln",
        "GMC",
        "Hyundai",
        "MINI",
        "Bentley",
        "Mercedes-Benz",
        "Aston Martin",
        "Pontiac",
        "Lamborghini",
        "Audi",
        "BMW",
        "Chevrolet",
        "Mercedes-Benz",
        "Chrysler",
        "Kia",
        "Land"
    ]

    return (
        <Formik initialValues={{brand: '', price: 0, mileageFrom: 0, mileageTo: 1000000}} onSubmit={handleSubmit}>
            <Form className={clsx(css.form, "input-group, mx-auto")}>
                <div className='row'>
                    <div className='col-2'>
                        <Field
                        className='form-select'
                        name='brand'
                        as='select'
                        placeholder='Choose the Brand'
                    >
                        {brandOptions.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
                        </Field>
                    </div>
                    <div className='col-2'>
                        <Field
                            className='form-select'
                            name='price'
                            as='select'
                            placeholder='To $'
                        >
                            {Array.from({ length: 7 }, (_, index) => (
                                <option key={index} value={30 + index * 10}>
                                    To {30 + index * 10}$
                                </option>
                            ))}
                        </Field>
                    </div>
                    <div className='col-2'>
                        <Field
                            className='form-control'
                            name='mileageFrom'
                            type='text'
                            placeholder='From'
                        />
                    </div>
                    <div className='col-2'>
                        <Field
                            className='form-control'
                            name='mileageTo'
                            type='text'
                            placeholder='To'
                        />
                    </div>
                    <div className='col-2'>
                        <Btn name='Search'/>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default Searcher;
