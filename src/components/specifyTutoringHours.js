import React, { Component } from 'react';
import { Form, Button, Col, Row, Popover, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import '../resources/css/form.css';
import Access from './fragments/access';
import redirect from './../model/redirect';
import dbErrors from '../model/dbErrors';
import { Redirect } from 'react-router-dom';

class SpecifyTutoringHours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: 0,
            budgetYears: [
                {
                    year: "",
                }
            ],
            pickedExaminers: [
                {
                    user_id: "",
                    examinerHours: "",
                    supervisorHours: "",
                }
            ],
            examiners: [],
            numberOfExaminers: 1,
            budgetYear: ""
        }
    }
    componentDidMount() {
        this.getExaminers()
        this.getBudgetYears()
    }
    getExaminers = () => {
        axios
            .get('/api/user', {
                params: {
                    userRoleId: 3
                }
            })
            .then(res => {
                this.setState({ examiners: res.data })
            })
            .catch(err => {
                if (err.response.data === dbErrors.errorCodes.INVALID_SESSION.code || err.response.data === dbErrors.errorCodes.NO_ACCESS_ERROR.code) {
                    redirect.removeCookies()
                    this.setState({ redirect: 1 })
                    toast(this.props.info.general.sessionFail)
                } else {
                    console.log(err)
                    toast(this.props.info.addDirectorOfStudies.getFail)
                }
            })
    }
    getBudgetYears = () => {
        axios
            .get('/api/budgetYear')
            .then(res => {
                if (res.status === 200) {
                    this.setState({ budgetYears: res.data })
                }
            })
            .catch(err => {
                if (err.response.data === dbErrors.errorCodes.INVALID_SESSION.code || err.response.data === dbErrors.errorCodes.NO_ACCESS_ERROR.code) {
                    redirect.removeCookies()
                    this.setState({ redirect: 1 })
                    toast(this.props.info.general.sessionFail)
                } else {
                    console.error(err)
                    toast(this.props.info.specifyTutoringHours.getBudgetYearFail)
                }
            })
    }
    specifyTutoringHours = (e) => {
        e.preventDefault();
        axios
            .post('/api/workYear', this.getTutoringHours())
            .then(res => {
                toast(this.props.info.specifyTutoringHours.success)
                this.resetFields()
            })
            .catch(err => {
                if (err.response.data === dbErrors.errorCodes.INVALID_SESSION.code || err.response.data === dbErrors.errorCodes.NO_ACCESS_ERROR.code) {
                    redirect.removeCookies()
                    this.setState({ redirect: 1 })
                    toast(this.props.info.general.sessionFail)
                } else {
                    console.log(err)
                    toast(this.props.info.addDirectorOfStudies.fail)
                }
            })
    }
    getTutoringHours() {
        console.log(this.state)
        return {
            examiners: this.state.pickedExaminers,
            budgetYear: this.state.budgetYear
        }
    }
    resetFields() {
        this.setState({
            pickedExaminers: [
                {

                    user_id: "",
                    examinerHours: "",
                    supervisorHours: ""
                }
            ],
            examiners: [],
            numberOfExaminers: 1,
            budgetYear: ""
        })
    }
    handleChangeExaminer(value, type, index) {
        let examinersTemp = this.state.pickedExaminers
        if (type === 'username') {
            examinersTemp[index].user_id = value.user_id
        } else if (type === 'examinerHours') {
            examinersTemp[index].examinerHours = value
        } else {
            examinersTemp[index].supervisorHours = value
        }
        this.setState({ pickedExaminers: examinersTemp })
    }
    addExaminer() {
        let examinersTemp = this.state.pickedExaminers
        let numberOfExaminersTemp = this.state.numberOfExaminers
        numberOfExaminersTemp++
        examinersTemp.push({ username: "", examinerHours: "", supervisorHours: "" })
        this.setState({ numberOfExaminers: numberOfExaminersTemp, examiners: examinersTemp })
    }
    removeExaminer() {
        let examinersTemp = this.state.pickedExaminers
        let numberOfExaminersTemp = this.state.numberOfExaminers
        numberOfExaminersTemp--
        examinersTemp.pop()
        this.setState({ numberOfExaminers: numberOfExaminersTemp, examiners: examinersTemp })
    }
    setBudgetYear(budgetYear) {
        if (budgetYear) {
            const year = budgetYear.year
            this.setState({ budgetYear: year })
        }
    }
    renderPopoverInfo(text) {
        return (
            <Popover className="popover" id="popover-basic">
                {text}
            </Popover>
        );
    }
    renderForm() {
        return (
            <Form onSubmit={(e) => this.specifyTutoringHours(e)}>
                <Row>
                    <Col md={8}>
                        <Form.Label>
                            <OverlayTrigger
                                placement="auto"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderPopoverInfo(this.props.info.specifyTutoringHours.budgetYearInfo)}
                            >
                                <Button variant="text" className="textButton">{this.props.info.specifyTutoringHours.bugetYear}*</Button>
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Label></Form.Label>
                        <Typeahead
                            id="specifyBudgetYear"
                            labelKey={(option) => `${option.year}`}
                            placeholder={this.props.info.specifyTutoringHours.budgetYearPlaceholder}
                            onChange={event => this.setBudgetYear(event[0])}
                            options={this.state.budgetYears}
                        />
                    </Col>
                </Row>
                {this.state.pickedExaminers.map((examiner, key) =>
                    <Row key={key}>
                        <Col>
                            <OverlayTrigger
                                placement="auto"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderPopoverInfo(this.props.info.specifyTutoringHours.usernameInfo)}
                            >
                                <Button variant="text" className="textButton">{this.props.info.specifyTutoringHours.username}*</Button>
                            </OverlayTrigger>
                            <Typeahead
                                id="specifyUser"
                                labelKey={(option) => `${option.first_name} ${option.last_name} (${option.email})`}
                                placeholder={this.props.info.specifyTutoringHours.usernamePlaceholder}
                                selected={examiner.username}
                                // onChange={event => this.setState({ supervisor_id: event[0].user_id })}
                                onChange={event => this.handleChangeExaminer(event[0], 'username', key)}
                                options={this.state.examiners}
                            />
                        </Col>
                        <Col >
                            <OverlayTrigger
                                placement="auto"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderPopoverInfo(this.props.info.specifyTutoringHours.examinerHoursInfo)}
                            >
                                <Button variant="text" className="textButton">{this.props.info.specifyTutoringHours.examinerHours}*</Button>
                            </OverlayTrigger>
                            <Form.Control
                                required
                                type="number"
                                value={examiner.examinerHours}
                                placeholder={this.props.info.specifyTutoringHours.examinerHoursPlaceholder}
                                onChange={event => this.handleChangeExaminer(event.target.value, 'examinerHours', key)}
                            />
                        </Col>
                        <Col>
                            <OverlayTrigger
                                placement="auto"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderPopoverInfo(this.props.info.specifyTutoringHours.supervisorHoursInfo)}
                            >
                                <Button variant="text" className="textButton">{this.props.info.specifyTutoringHours.supervisorHours}*</Button>
                            </OverlayTrigger>
                            <Form.Control
                                required
                                type="number"
                                value={examiner.supervisorHours}
                                placeholder={this.props.info.specifyTutoringHours.supervisorHoursPlaceholder}
                                onChange={event => this.handleChangeExaminer(event.target.value, 'supervisorHours', key)}
                            />
                        </Col>
                    </Row>
                )}
                <Button className="marginTop marginRight" onClick={() => this.addExaminer()}>{this.props.info.button.add}</Button>
                <Button disabled={this.state.numberOfExaminers === 1} variant="danger" className="marginTop marginRight" onClick={() => this.removeExaminer()}>{this.props.info.button.remove}</Button>
                <Button className="marginTop" type="submit">{this.props.info.button.submit}</Button>
            </Form>
        )
    }
    render() {
        return (
            <div className="container">
                <Access access='2' info={this.props.info.access} />
                {this.state.redirect ? <Redirect to='/' /> : ""}
                <h1>{this.props.info.specifyTutoringHours.title}</h1>
                <p>{this.props.info.specifyTutoringHours.paragraph0}</p>
                {this.renderForm()}
            </div>
        );
    };
}
export default SpecifyTutoringHours