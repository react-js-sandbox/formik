import React from 'react';
import {useFormik} from "formik";

const YoutubeForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('Submitted form', values)
        },
        validate: values => {
            let errors = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!validateEmail(values.email)) {
                errors.email = 'Is not correct';
            }
            if (!values.channel) {
                errors.channel = 'Required';
            }
            return errors;
        }
    });
    // console.log(formik.values);
    console.log('visited fields', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur}
                       value={formik.values.name}/>
                {formik.touched.name && formik.errors.name ? formik.errors.name: ''}

                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}
                       value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? formik.errors.email: ''}

                <label htmlFor="channel">Channel</label>
                <input type="text" id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur}
                       value={formik.values.channel}/>
                {formik.touched.channel && formik.errors.channel ? formik.errors.channel: ''}

                <button type='Submit'>Submit</button>
            </form>
        </div>
    );
};

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default YoutubeForm;