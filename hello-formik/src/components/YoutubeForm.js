import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid email").required('Required'),
    channel: Yup.string().required('Required')
});
const initialValues = {
    name: 'User',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const savedValues = {
    name: 'Laura',
    email: 'laura_palmer@peaks.com',
    channel: 'youtube',
    comments: 'Hi there',
    address: 'twin peaks',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const onSubmit = (values, onSubmitProps) => {
    console.log('Submitted form', values);
    console.log('onSubmitProps', onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};

const validateComments = value => {
    let error;
    if (!value) {
        error = "Required !!!";
    }
    return error;
};

const YoutubeForm = () => {
    const [formValues, setFormValues] = useState(null);

    return (
        <Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}
                enableReinitialize
            // validateOnMount={true}
            // validateOnChange={false}
        >
            {
                formik => {
                    return (
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
                            <Field as='textarea' type="text" id='comments' name='comments' validate={validateComments}/>
                            <ErrorMessage name='comments' component={TextError}/>

                            <label htmlFor="address">Address</label>
                            <FastField id='address' name='address'>
                                {(props) => {
                                    console.log("Field render")
                                    console.log('props', props)
                                    const {field, form, meta} = props;
                                    return <div><input type='text' id='address' {...field}/>
                                        {meta.touched && meta.error ? <div>meta.error</div> : null}
                                    </div>
                                }}
                            </FastField>

                            <label htmlFor="facebook">Facebook</label>
                            <Field type="text" id='facebook' name='social.facebook'/>

                            <label htmlFor="twitter">Twitter</label>
                            <Field type="text" id='twitter' name='social.twitter'/>

                            <label htmlFor="primaryPh">Ph. primary</label>
                            <Field type="text" id='primaryPh' name='phoneNumbers[0]'/>

                            <label htmlFor="secondaryPh">Sec. primary</label>
                            <Field type="text" id='secondaryPh' name='phoneNumbers[1]'/>

                            <label>Ph numbers</label>
                            <FieldArray name='phNumbers'>
                                {
                                    (fieldArrayProps) => {
                                        // console.log('fieldArrayProps', fieldArrayProps);
                                        const {push, remove, form} = fieldArrayProps;
                                        const {values} = form;
                                        const {phNumbers} = values;
                                        console.log('form.errors', form.errors)

                                        return <div>
                                            {
                                                phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`}/>
                                                        {index > 0 &&
                                                        <button type='button' onClick={() => remove(index)}>-</button>}
                                                        <button type='button' onClick={() => push('')}>+</button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                }
                            </FieldArray>

                            {/*<button type='button' onClick={() => formik.validateField('comments')}>Validate comments*/}
                            {/*</button>*/}
                            {/*<button type='button' onClick={() => formik.validateForm()}>Validate all</button>*/}

                            {/*<button type='button' onClick={() => formik.setFieldTouched('comments')}>Visit comments*/}
                            {/*</button>*/}
                            {/*<button type='button' onClick={() => formik.setTouched({*/}
                            {/*    name: true,*/}
                            {/*    email: true,*/}
                            {/*    channel: true,*/}
                            {/*    comments: true*/}
                            {/*})}>Visit fields*/}
                            {/*</button>*/}

                            <button type='button' onClick={() => setFormValues(savedValues)}>Load saved data</button>
                            <button type='reset'>Reset</button>
                            <button type='Submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>

                    )
                }
            }
        </Formik>
    );
};
export default YoutubeForm;