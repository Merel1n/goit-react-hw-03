import css from './ContactForm.module.css'
import { Formik, Form, Field } from 'formik'
// import * as Yup from "yup";

const initialValues = {
    userName: "",
    userNumber: ""
};
const ContactForm = ({onAddContact}) => {
    const handleSubmit = (values, actions) => {
    
    const contactObject = {
     name: values.userName,
     number: values.userNumber,
    };

    onAddContact(contactObject);

    console.log(values);
    actions.resetForm();
  };
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
            {/* {({ errors }) => (
                console.log(errors), */}
                <Form className={css.form}>
                    <label className={css.label}>Name</label>
                    <Field type="text" name="userName" className={css.input} />
                    <label className={css.label}>Number</label>
                    <Field type="tel" name="userNumber" className={css.input} />
                    <button type='submit' className={css.button}>Add contact</button>
                </Form>
            {/* )} */}
        </Formik>
    )
   
    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     onAddContact({
    //         name: evt.target.elements.text.name,
    //         tel: evt.target.elements.text.number,
    //         id : nanoid()
    //     });
    //     evt.target.reset();
    // }
    // return (
    //     <form className={css.form} onSubmit={handleSubmit}>
    //          <label htmlFor="name" className={css.label}>
    //             Name
    //             <input className={css.input} id='name' type="text" name="name" />
    //         </label>
    //         <label htmlFor="number" className={css.label}>
    //             Number
    //             <input className={css.input} id='number' type="tel" name="number" />
    //         </label>
    //         <button className={css.button} type='submit'>Add contact</button>
    //     </form>
    // )
   
}
export default ContactForm