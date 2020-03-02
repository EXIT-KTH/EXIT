import React, { Component, Fragment } from 'react';
import { Table,Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../resources/css/home.css';
import Access from './fragments/access';
import DegreeProject from './fragments/degreeProject';

class MyDegreeProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUser: [],
            projects: [
                {
                    credits: "",
                    degreeTitle: "",
                    numOfStudents: "",
                    startDate: "",
                    endDate: "",
                    withinTimeLimit: "",
                }
            ]
        }
    }
    componentDidMount() {
        this.getDegreeProjects()
    }
    getDegreeProjects = () => {
        axios
            .get('/api/project')
            .then(res => {
                if (res.status === 200) {
                    this.setState({ projects: res.data })
                }
            })
            .catch(err => {
                console.error(err)
                toast(this.props.info.myDegreeProjects.fail)
            })
    }
    renderTable() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>{this.props.info.myDegreeProjects.credits}</th>
                        <th>{this.props.info.myDegreeProjects.degreeTitle}</th>
                        <th>{this.props.info.myDegreeProjects.numOfStudents}</th>
                        <th>{this.props.info.myDegreeProjects.startDate}</th>
                        <th>{this.props.info.myDegreeProjects.endDate}</th>
                        <th>{this.props.info.myDegreeProjects.withinTimeLimit}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.projects.map((project, key) =>
                        < tr key={key} className="pressForInfo" >
                            <td key={"credits: " + key} className="pressForInfo" >{project.credits}</td>
                            <td key={"degreeTitle: " + key} > {project.degreeTitle}</td>
                            <td key={"numOfStudents: " + key} > {project.numOfStudents}</td>
                            <td key={"startDate: " + key} > {project.startDate}</td>
                            <td key={"endDate: " + key} > {project.endDate}</td>
                            <td key={"withinTimeLimit: " + key} > {project.withinTimeLimit}</td>
                            <td key={"moreInfo: " + key} > {this.renderFullProject(project)}</td>
                        </tr>
                    )}
                </tbody>
            </Table >
        )
    }
    showInfo(id, state) {
        let list = this.state.showUser;
        list[id] = state;
        this.setState({ showUser: list })
    }
    renderFullProject(project) {
        return (
            <Fragment>
                <Button variant="primary" className="ml-auto" id={project.id} onClick={() => this.showInfo(project.id, true)}>Info</Button>
                <Modal
                    centered
                    show={this.state.showUser[project.id]}
                    onHide={() => this.showInfo(project.id, false)}
                    animation={true}
                    size='xl'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.info.myDegreeProjects.project}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DegreeProject info={this.props.info} project={project} />
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
    render() {
        return (
            <div className="container">
                <Access access='3' info={this.props.info.access} />
                <h1>{this.props.info.myDegreeProjects.title}</h1>
                <p>{this.props.info.myDegreeProjects.paragraph0}</p>
                {this.renderTable()}
            </div>
        );
    };
}
export default MyDegreeProjects