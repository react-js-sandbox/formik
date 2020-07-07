import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid email").required('Required'),
    channel: Yup.string().required('Required')
});
const initialValues = {
    name: '',
    email: '',
    channel: ''
};
const onSubmit = values => {
    console.log('Submitted form', values)
};

const YoutubeForm = () => {

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <label htmlFor="name">Name</label>
                <Field type="text" id='name' name='name'/>
                <ErrorMessage name='name'/>

                <label htmlFor="email">Email</label>
                <Field type="text" id='email' name='email'/>
                <ErrorMessage name='email'/>

                <label htmlFor="chazxlnnel">Channel</label>
                <Field type="text" id='channel' name='channel'/>
                <ErrorMessage name='channel'/>

                <button type='Submit'>Submit</button>
            </Form>
        </Formik>
    );
};
export default YoutubeForm;