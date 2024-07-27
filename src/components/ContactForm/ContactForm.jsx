import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styles from "./ContactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 sumbols')
    .required('This field is required'),
    number: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 sumbols')
    .required('This field is required'),
})

export default function ContactForm(){
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        dispatch(addContact({
            ...values,
            id: nanoid(),
        }))
        resetForm();
    }

    
    return (
        <Formik
        initialValues={{ 
            name: '',
            number: '',
        }
    }
    onSubmit={handleSubmit}
    validationSchema={ContactSchema}>

        <Form className={styles.form}>
            <div className={styles.formGroup}>
                <label>Name
                <Field className={styles.field} type="text" name="name"></Field>
                <ErrorMessage name="name" component="div"/>
                </label>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="number">Number
                <Field className={styles.field} type="phone" name="number"></Field>
                <ErrorMessage name="number" component="div" />
                </label>
            </div>
            <button className={styles.btn} type="submit" >Add contact</button>
        </Form>
    </Formik>
    )
}
