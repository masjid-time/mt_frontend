import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RequestPromise from 'request-promise';
import { toast } from 'react-toastify';

class ItemDetail extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
            id: '',
            name: '',
            address: '',
            distance: '',
            last_updated: '',
            time: {}
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    timeRegEx = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;

    timeDetailsSchema = Yup.object().shape({
        FAJR: Yup.string()
            .matches(this.timeRegEx, {
                message: 'Time should be in 24hrs(HH:mm) format.',
                excludeEmptyString: true
            })
            .required('Time is required'),
        DHUHR: Yup.string()
            .matches(this.timeRegEx, {
                message: 'Time should be in 24hrs(HH:mm) format.',
                excludeEmptyString: true
            })
            .required('Time is required'),
        ASR: Yup.string()
            .matches(this.timeRegEx, {
                message: 'Time should be in 24hrs(HH:mm) format.',
                excludeEmptyString: true
            })
            .required('Time is required'),
        MAGHRIB: Yup.string()
            .matches(this.timeRegEx, {
                message: 'Time should be in 24hrs(HH:mm) format.',
                excludeEmptyString: true
            })
            .required('Time is required'),
        ISHA: Yup.string()
            .matches(this.timeRegEx, {
                message: 'Time should be in 24hrs(HH:mm) format.',
                excludeEmptyString: true
            })
            .required('Time is required')
    });

    handleClick() {
        this.setState({ isEditing: true });
    }

    async handleSubmit(values, actions) {
        actions.setSubmitting(false);
        let body = values;
        body.id = this.state.id;
        let requestOptions = {
            uri: `${process.env.REACT_APP_API_URL}/api/v1/mosquedetail`,
            body,
            timeout: 5000,
            json: true,
            resolveWithFullResponse: true
        };
        if (this.state.last_updated) {
            requestOptions.method = 'PUT';
        } else {
            requestOptions.method = 'POST';
        }
        try {
            let resp = await RequestPromise(requestOptions);
            if (resp.statusCode === 200) {
                this.setState({
                    time: {
                        FAJR: values.FAJR,
                        DHUHR: values.DHUHR,
                        ASR: values.ASR,
                        MAGHRIB: values.MAGHRIB,
                        ISHA: values.ISHA
                    },
                    last_updated: 'Updated Just Now'
                });
                toast.success('Data saved successfully');
            } else {
                toast.error('Failed to save data');
            }
        } catch {
            toast.error('Failed to save data');
        } finally {
            this.setState({ isEditing: false });
        }
    }

    componentWillMount() {
        this.setState(this.props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row no-gutters'>
                    <div className='col-md-12'>
                        <div className='card mb-4 shadow-sm h-md-250 bg-custom'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h1 className='card-title text-dark text-left display-4'>
                                            {this.state.name}
                                        </h1>
                                        <h4 className='card-text text-muted text-dark text-left mb-4'>
                                            {this.state.address}
                                        </h4>
                                        <address>
                                            <strong>
                                                {this.state.distance}
                                            </strong>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isEditing ? (
                    <>
                        <div className='jumbotron bg-custom shadow-sm border'>
                            <Formik
                                initialValues={{
                                    FAJR: this.state.time.FAJR || '',
                                    DHUHR: this.state.time.DHUHR || '',
                                    ASR: this.state.time.ASR || '',
                                    MAGHRIB: this.state.time.MAGHRIB || '',
                                    ISHA: this.state.time.ISHA || ''
                                }}
                                onSubmit={this.handleSubmit}
                                validationSchema={this.timeDetailsSchema}
                                render={props => (
                                    <Form>
                                        <div className='row no-gutters mb-2'>
                                            <div className='col-md-10'>
                                                {this.state.last_updated ? (
                                                    <blockquote className='blockquote text-left ml-2'>
                                                        <small className='font-italic text-info'>
                                                            {
                                                                this.state
                                                                    .last_updated
                                                            }
                                                        </small>
                                                    </blockquote>
                                                ) : null}
                                            </div>
                                            <div className='col-md-2'>
                                                <div className='text-right mr-2'>
                                                    <button
                                                        className='btn btn-link p-0'
                                                        type='submit'
                                                        disabled={
                                                            props.isSubmitting
                                                        }>
                                                        <i className='material-icons btn btn-outline-dark active'>
                                                            save
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row no-gutters'>
                                            <table className='table table-hover border'>
                                                <tbody>
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='row'
                                                            className='align-middle w-50'>
                                                            FAJR
                                                        </th>
                                                        <td className='align-middle w-50'>
                                                            <Field
                                                                className='form-control'
                                                                type='text'
                                                                placeholder='FAJR Time'
                                                                aria-label='FAJR'
                                                                name='FAJR'
                                                            />
                                                            <ErrorMessage name='FAJR'>
                                                                {msg => (
                                                                    <div className='text-danger'>
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </td>
                                                    </tr>
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='row'
                                                            className='align-middle w-50'>
                                                            DHUHR
                                                        </th>
                                                        <td className='align-middle w-50'>
                                                            <Field
                                                                className='form-control'
                                                                type='text'
                                                                placeholder='DHUHR Time'
                                                                aria-label='DHUHR'
                                                                name='DHUHR'
                                                            />
                                                            <ErrorMessage name='DHUHR'>
                                                                {msg => (
                                                                    <div className='text-danger'>
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </td>
                                                    </tr>
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='row'
                                                            className='align-middle w-50'>
                                                            ASR
                                                        </th>
                                                        <td className='align-middle w-50'>
                                                            <Field
                                                                className='form-control'
                                                                type='text'
                                                                placeholder='ASR Time'
                                                                aria-label='ASR'
                                                                name='ASR'
                                                            />
                                                            <ErrorMessage name='ASR'>
                                                                {msg => (
                                                                    <div className='text-danger'>
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </td>
                                                    </tr>
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='row'
                                                            className='align-middle w-50'>
                                                            MAGHRIB
                                                        </th>
                                                        <td className='align-middle w-50'>
                                                            <Field
                                                                className='form-control'
                                                                type='text'
                                                                placeholder='MAGHRIB Time'
                                                                aria-label='MAGHRIB'
                                                                name='MAGHRIB'
                                                            />
                                                            <ErrorMessage name='MAFHRIB'>
                                                                {msg => (
                                                                    <div className='text-danger'>
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </td>
                                                    </tr>
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='row'
                                                            className='align-middle w-50'>
                                                            ISHA
                                                        </th>
                                                        <td className='align-middle w-50'>
                                                            <Field
                                                                className='form-control'
                                                                type='text'
                                                                placeholder='ISHA Time'
                                                                aria-label='ISHA'
                                                                name='ISHA'
                                                            />
                                                            <ErrorMessage name='ISHA'>
                                                                {msg => (
                                                                    <div className='text-danger'>
                                                                        {msg}
                                                                    </div>
                                                                )}
                                                            </ErrorMessage>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Form>
                                )}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='jumbotron bg-custom shadow-sm border'>
                            <div className='row no-gutters mb-2'>
                                <div className='col-md-10'>
                                    {this.state.last_updated ? (
                                        <blockquote className='blockquote text-left ml-2'>
                                            <small className='font-italic text-info'>
                                                {this.state.last_updated}
                                            </small>
                                        </blockquote>
                                    ) : null}
                                </div>
                                <div className='col-md-2'>
                                    <div className='text-right mr-2'>
                                        <button
                                            className='btn btn-link p-0'
                                            onClick={this.handleClick}>
                                            <i className='material-icons btn btn-outline-dark active'>
                                                edit
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='row no-gutters'>
                                <table className='table table-hover border'>
                                    <tbody>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50'>
                                                FAJR
                                            </th>
                                            <td className='align-middle w-50'>
                                                {this.state.time.FAJR}
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50'>
                                                DHUHR
                                            </th>
                                            <td className='align-middle w-50'>
                                                {this.state.time.DHUHR}
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50'>
                                                ASR
                                            </th>
                                            <td className='align-middle w-50'>
                                                {this.state.time.ASR}
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50'>
                                                MAGHRIB
                                            </th>
                                            <td className='align-middle w-50'>
                                                {this.state.time.MAGHRIB}
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50'>
                                                ISHA
                                            </th>
                                            <td className='align-middle w-50'>
                                                {this.state.time.ISHA}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default ItemDetail;
