import React from 'react';
import {Formik, Form} from "formik";
import * as Yup from 'yup';
import FormikControl from "./FormikControl";

const FormikContainer = () => {
    const dropdownOption = [
        {key: 'Select an option', value: ''},
        {key: 'Option 1', value: 'option1'},
        {key: 'Option 2', value: 'option2'},
        {key: 'Option 3', value: 'option3'},
    ];
    const radioOption = [
        {key: 'Option 1', value: 'rOption1'},
        {key: 'Option 2', value: 'rOption2'},
        {key: 'Option 3', value: 'rOption3'},
    ];
    const checkboxOption = [
        {key: 'Option 1', value: 'cOption1'},
        {key: 'Option 2', value: 'cOption2'},
        {key: 'Option 3', value: 'cOption3'},
    ];

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: []
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
    });
    const onSubmit = values => console.log('Form data', values);

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {
                formik => <Form>
                    <FormikControl control='input' label='Email' name='email'/>
                    <FormikControl control='textarea' label='Description' name='description'/>
                    <FormikControl control='select' label='Select a topic' name='selectOption' options={dropdownOption}/>
                    <FormikControl control='radio' label='Radio topic' name='radioOption' options={radioOption}/>
                    <FormikControl control='checkbox' label='Check topic' name='checkboxOption' options={checkboxOption}/>
                    <button type='submit'>Submit</button>
                </Form>
            }
        </Formik>
    );
};

export default FormikContainer;