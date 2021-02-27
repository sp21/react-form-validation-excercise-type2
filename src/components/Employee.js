import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Employee extends Component {

    state = {
        achievements: null,
        edit: null
    };

    handleEdit = () => {
        this.setState(() => ({ edit: true }))
    };

    handleView = () => {
        this.setState(() => ({ achievements: this.props.emp.achievements }))
    };



    render() {
        const { emp } = this.props; // this will export the emp from the props declared in Card component
        console.log(emp);
        if (this.state.edit) {
            return <Redirect to={"/edit/" + emp.empId} push></Redirect>
        }
        return (
            <div className="card" style={{ width: "300px", margin: "15px" }} >

                <img className="card-img-top" src={emp.image} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{emp.ename}</h5>
                    <p className="card-text">
                        <span>Id: {emp.empId}</span><br />
                        <span>Age:{emp.age}</span><br />
                        {emp.age < 25 && <span className="text-info">Fresher</span>}<br />
                        <span> Salary:{emp.salary}</span><br />
                    </p>
                    <p><i>{this.state.achievements}</i></p>
                    <button type="button" className="btn btn-primary" onClick={this.handleEdit}>Edit</button>
                    <button type="button" className="btn btn-success" onClick={this.handleView}>View</button>
                </div>
            </div>
        );
    }
}

export default Employee;