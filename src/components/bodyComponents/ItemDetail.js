import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RequestPromise from 'request-promise';
import { toast } from 'react-toastify';
import TimePicker from 'rc-time-picker';
import Moment from 'moment';

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

    handleClick() {
        this.setState({ isEditing: true });
    }

    async handleSubmit(values, actions) {
        actions.setSubmitting(true);
        let body = Object.fromEntries(
            Object.entries(values).map(([key, val]) => [
                key,
                val.format('HH:mm')
            ])
        );
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
                        FAJR: body.FAJR,
                        DHUHR: body.DHUHR,
                        ASR: body.ASR,
                        MAGHRIB: body.MAGHRIB,
                        ISHA: body.ISHA,
                        JUMA: body.JUMA
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
            actions.setSubmitting(false);
            this.setState({ isEditing: false });
        }
    }

    timePicker = ({ field, form, ...props }) => {
        return (
            <TimePicker
                name={field.name}
                defaultValue={field.value}
                defaultOpenValue={Moment({ hour: 0, minute: 0 })}
                onChange={val => {
                    if (val === null) {
                        form.setFieldValue(field.name, '');
                    } else {
                        form.setFieldValue(field.name, val);
                    }
                }}
                showSecond={false}
                placeholder={props.placeholder}
                format='h:mm a'
                use12Hours
                inputReadOnly
                clearIcon={false}
            />
        );
    };

    setMomentValue(dateVal) {
        if (dateVal) {
            return Moment(dateVal, 'HH:mm');
        }
        return '';
    }

    displayTime(dateVal) {
        if (dateVal) {
            return Moment(dateVal, 'HH:mm').format('h:mm a');
        }
        return '';
    }

    timeDetailsSchema = Yup.object().shape({
        FAJR: Yup.string().required('Time is required'),
        DHUHR: Yup.string().required('Time is required'),
        ASR: Yup.string().required('Time is required'),
        MAGHRIB: Yup.string().required('Time is required'),
        ISHA: Yup.string().required('Time is required'),
        JUMA: Yup.string().required('Time is required')
    });

    componentDidMount() {
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
                                    <div className='col-md-11'>
                                        <h2 className='card-title text-body text-left'>
                                            {this.state.name}
                                        </h2>
                                        <h6 className='card-text text-body text-left'>
                                            {this.state.address}
                                        </h6>
                                        <h6 className='card-text text-body text-left mb-0'>
                                            <strong>
                                                {this.state.distance}
                                            </strong>
                                        </h6>
                                    </div>
                                    <div className='col-md-1 pr-0'>
                                        <a
                                            className='text-reset text-decoration-none'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={this.props.url}>
                                            <span className='card-text text-body text-right'>
                                                <i className='material-icons h1'>
                                                    launch
                                                </i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isEditing ? (
                    <>
                        <div className='jumbotron bg-custom shadow-sm border py-4'>
                            <Formik
                                initialValues={{
                                    FAJR: this.setMomentValue(
                                        this.state.time.FAJR
                                    ),
                                    DHUHR: this.setMomentValue(
                                        this.state.time.DHUHR
                                    ),
                                    ASR: this.setMomentValue(
                                        this.state.time.ASR
                                    ),
                                    MAGHRIB: this.setMomentValue(
                                        this.state.time.MAGHRIB
                                    ),
                                    ISHA: this.setMomentValue(
                                        this.state.time.ISHA
                                    ),
                                    JUMA: this.setMomentValue(
                                        this.state.time.JUMA
                                    )
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
                                            <table className='table table-hover shadow-lg'>
                                                <thead className='bg-custom-thead'>
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='col'
                                                            className='align-middle w-50 h5 text-body'>
                                                            <strong>
                                                                SALAH
                                                            </strong>
                                                        </th>
                                                        <th
                                                            scope='col'
                                                            className='align-middle w-50 h5 text-body'>
                                                            <strong>
                                                                IQAMAH
                                                            </strong>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='row'
                                                            className='align-middle w-50 td-border-custom'>
                                                            FAJR
                                                        </th>
                                                        <td className='align-middle w-50 td-border-custom'>
                                                            <Field
                                                                render={
                                                                    this
                                                                        .timePicker
                                                                }
                                                                className='form-control'
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
                                                            className='align-middle w-50 td-border-custom'>
                                                            DHUHR
                                                        </th>
                                                        <td className='align-middle w-50 td-border-custom'>
                                                            <Field
                                                                render={
                                                                    this
                                                                        .timePicker
                                                                }
                                                                className='form-control'
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
                                                            className='align-middle w-50 td-border-custom'>
                                                            ASR
                                                        </th>
                                                        <td className='align-middle w-50 td-border-custom'>
                                                            <Field
                                                                render={
                                                                    this
                                                                        .timePicker
                                                                }
                                                                className='form-control'
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
                                                            className='align-middle w-50 td-border-custom'>
                                                            MAGHRIB
                                                        </th>
                                                        <td className='align-middle w-50 td-border-custom'>
                                                            <Field
                                                                render={
                                                                    this
                                                                        .timePicker
                                                                }
                                                                className='form-control'
                                                                name='MAGHRIB'
                                                            />
                                                            <ErrorMessage name='MAGHRIB'>
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
                                                            className='align-middle w-50 td-border-custom'>
                                                            ISHA
                                                        </th>
                                                        <td className='align-middle w-50 td-border-custom'>
                                                            <Field
                                                                render={
                                                                    this
                                                                        .timePicker
                                                                }
                                                                className='form-control'
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
                                                    <tr className='h-65px'>
                                                        <th
                                                            scope='row'
                                                            className='align-middle w-50 td-border-custom'>
                                                            JUMA
                                                        </th>
                                                        <td className='align-middle w-50 td-border-custom'>
                                                            <Field
                                                                render={
                                                                    this
                                                                        .timePicker
                                                                }
                                                                className='form-control'
                                                                name='JUMA'
                                                            />
                                                            <ErrorMessage name='JUMA'>
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
                        <div className='jumbotron bg-custom shadow-sm border py-4'>
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
                                <table className='table table-hover shadow-lg'>
                                    <thead className='bg-custom-thead'>
                                        <tr className='h-65px'>
                                            <th
                                                scope='col'
                                                className='align-middle w-50 h5 text-body'>
                                                <strong>SALAH</strong>
                                            </th>
                                            <th
                                                scope='col'
                                                className='align-middle w-50 h5 text-body'>
                                                <strong>IQAMAH</strong>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50 td-border-custom'>
                                                FAJR
                                            </th>
                                            <td className='align-middle w-50 td-border-custom'>
                                                <strong>
                                                    {this.displayTime(
                                                        this.state.time.FAJR
                                                    )}
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50 td-border-custom'>
                                                DHUHR
                                            </th>
                                            <td className='align-middle w-50 td-border-custom'>
                                                <strong>
                                                    {this.displayTime(
                                                        this.state.time.DHUHR
                                                    )}
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50 td-border-custom'>
                                                ASR
                                            </th>
                                            <td className='align-middle w-50 td-border-custom'>
                                                <strong>
                                                    {this.displayTime(
                                                        this.state.time.ASR
                                                    )}
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50 td-border-custom'>
                                                MAGHRIB
                                            </th>
                                            <td className='align-middle w-50 td-border-custom'>
                                                <strong>
                                                    {this.displayTime(
                                                        this.state.time.MAGHRIB
                                                    )}
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50 td-border-custom'>
                                                ISHA
                                            </th>
                                            <td className='align-middle w-50 td-border-custom'>
                                                <strong>
                                                    {this.displayTime(
                                                        this.state.time.ISHA
                                                    )}
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr className='h-65px'>
                                            <th
                                                scope='row'
                                                className='align-middle w-50 td-border-custom'>
                                                JUMA
                                            </th>
                                            <td className='align-middle w-50 td-border-custom'>
                                                <strong>
                                                    {this.displayTime(
                                                        this.state.time.JUMA
                                                    )}
                                                </strong>
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
