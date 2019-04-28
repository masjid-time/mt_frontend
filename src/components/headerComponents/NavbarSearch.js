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
                        <div className='col-auto my-1'>
                            <div className='input-group'>
                                <Field
                                    className='form-control h-auto'
                                    type='text'
                                    placeholder='Search area'
                                    aria-label='Search area'
                                    name='search'
                                />
                                <div className='input-group-prepend rounded-right'>
                                    <button
                                        className='btn btn-sm btn-dark rounded-right'
                                        type='submit'
                                        disabled={props.isSubmitting}>
                                        <i className='material-icons md-light md-24'>
                                            search
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            />
        );
    }
}

export default NavbarSearch;
