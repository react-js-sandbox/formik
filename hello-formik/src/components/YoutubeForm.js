import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid email").required('Required'),
    channel: Yup.string().required('Required')
});
const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    }
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
                <ErrorMessage name='name' component={TextError}/>

                <label htmlFor="email">Email</label>
                <Field type="text" id='email' name='email'/>
                <ErrorMessage name='email'>
                    {errMsg =>
                        <div className='error'>{errMsg}</div>
                    }
                </ErrorMessage>

                <label htmlFor="channel">Channel</label>
                <Field type="text" id='channel' name='channel'/>
                <ErrorMessage name='channel'/>

                <label htmlFor="comments">Comments</label>
                <Field as='textarea' type="text" id='comments' name='comments'/>

                <label htmlFor="address">Address</label>
                <Field id='address' name='address'>
                    {(props) => {
                        console.log('props', props)
                        const {field, form, meta} = props;
                        return <div><input type='text' id='address' {...field}/>
                            {meta.touched && meta.error ? <div>meta.error</div> : null}
                        </div>
                    }}
                </Field>

                <label htmlFor="facebook">Facebook</label>
                <Field type="text" id='facebook' name='social.facebook'/>

                <label htmlFor="twitter">Twitter</label>
                <Field type="text" id='twitter' name='social.twitter'/>

                <button type='Submit'>Submit</button>
            </Form>
        </Formik>
    );
};
export default YoutubeForm;