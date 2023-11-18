import  React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
   }
   return errors;
    };

const Form = () => {
            const formik = useFormik({
                initialValues: {
                    email: '',
                },
           
                validate,
              }); 

    return (<>
    <form onSubmit={formik.handleSubmit}>
        <div className='email'>
            <div className='emailid'><input style={{border:formik.errors.email ?  '1.5px solid hsl(354, 100%, 66%)': '1.5px solid hsl(223, 87%, 63%)'}} name="email" type="email" placeholder="Your email address..." onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            </div>
            <div className='button'>
                <button type="submit">Notify Me</button>
            </div>
        </div>
    </form>
</>)
}

export default Form;