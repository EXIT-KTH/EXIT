import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../resources/css/home.css';
import Access from './fragments/access';
import redirect from './../model/redirect';
import dbErrors from '../model/dbErrors';
import { Redirect } from 'react-router-dom';

class SpecifiedBudgetYears extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: 0,
            budgetYears: []
        }
    }
    componentDidMount() {
        this.getBudgetYears()
    }
    getBudgetYears = () => {
        axios
            .get('/api/budgetYear')
            .then(res => {
                if (res.status === 200 && res.data !== '') {
                    this.setState({ budgetYears: res.data })
                } else {
                    toast(this.props.info.specifiedBudgetYears.fail)
                }
            })
            .catch(err => {
                if (err.response.data === dbErrors.errorCodes.INVALID_SESSION.code || err.response.data === dbErrors.errorCodes.NO_ACCESS_ERROR.code) {
                    redirect.removeCookies()
                    this.setState({ redirect: 1 })
                    toast(this.props.info.general.sessionFail)
                } else {
                    console.error(err)
                    toast(this.props.info.specifiedBudgetYears.fail)
                }
            })
    }
    renderTable() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>{this.props.info.specifiedBudgetYears.budgetYear}</th>
                        <th>{this.props.info.specifiedBudgetYears.masterHoursExaminer}</th>
                        <th>{this.props.info.specifiedBudgetYears.masterHoursSupervisor}</th>
                        <th>{this.props.info.specifiedBudgetYears.bachleorHoursExaminer}</th>
                        <th>{this.props.info.specifiedBudgetYears.bachleorHoursSupervisor}</th>
                        <th>{this.props.info.specifiedBudgetYears.factor2}</th>
                        <th>{this.props.info.specifiedBudgetYears.factor3}</th>
                        <th>{this.props.info.specifiedBudgetYears.factor4}</th>
                        <th>{this.props.info.specifiedBudgetYears.factor5}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.budgetYears.map((budgetYear, key) =>
                        < tr key={key} className="pressForInfo" >
                            <td key={"budgetYear: " + key} >{budgetYear.year}</td>
                            <td key={"masterHours: " + key} > {budgetYear.master_hours_examiner}</td>
                            <td key={"masterHours: " + key} > {budgetYear.master_hours_supervisor}</td>
                            <td key={"bachleorHours: " + key} > {budgetYear.bachelor_hours_examiner}</td>
                            <td key={"bachleorHours: " + key} > {budgetYear.bachelor_hours_supervisor}</td>
                            <td key={"factor3: " + key} > {budgetYear.factor_2}</td>
                            <td key={"factor4: " + key} > {budgetYear.factor_3}</td>
                            <td key={"factor5: " + key} > {budgetYear.factor_4}</td>
                            <td key={"factor6: " + key} > {budgetYear.factor_5}</td>
                        </tr>
                    )}
                </tbody>
            </Table >
        )
    }
    render() {
        return (
            <div className="container">
                <Access access='2' info={this.props.info.access} />
                {this.state.redirect ? <Redirect to='/' /> : ""}
                <h1>{this.props.info.specifiedBudgetYears.title}</h1>
                <p>{this.props.info.specifiedBudgetYears.paragraph0}</p>
                <h3>{this.props.info.specifiedBudgetYears.paragraph1}</h3>
                {this.renderTable()}
            </div>
        );
    };
}
export default SpecifiedBudgetYears