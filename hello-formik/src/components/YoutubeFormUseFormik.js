import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid email").required('Required'),
    channel: Yup.string().required('Required')
});


const YoutubeFormUseFormik = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('Submitted form', values)
        },
        validationSchema
    });
    // console.log(formik.values);
    console.log('visited fields', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name'
                       {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? formik.errors.name: ''}

                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email'
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? formik.errors.email: ''}

                <label htmlFor="channel">Channel</label>
                <input type="text" id='channel' name='channel'
                       {...formik.getFieldProps('channel')}
                />
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