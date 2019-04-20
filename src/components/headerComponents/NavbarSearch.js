import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

class NavbarSearch extends Component {
    render() {
        return (
            <Formik
                initialValues={{ search: '' }}
                onSubmit={(values, actions) => {
                    window.location.href = `/search/${values.search}`;
                    actions.setSubmitting(false);
                }}
                render={props => (
                    <Form className='form-inline'>
                        <Field
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                            name='search'
                        />
                        <button
                            className='btn btn-dark my-2 my-sm-0'
                            type='submit'
                            disabled={props.isSubmitting}>
                            <i className='material-icons md-light md-24'>
                                search
                            </i>
                        </button>
                    </Form>
                )}
            />
        );
    }
}

export default NavbarSearch;
