import React, { Component } from 'react';

class EditEmployee extends Component {

    state = {
        form: {
            empId:'',
            ename: '',
            gender: '',
            age: '',
            salary: ''
        },
        formError: {
            enameError: '',
            genderError: '',
            ageError: '',
            salaryError: ''
        },
        fieldValidity: {
            enameValidity: false,
            genderValidity: false,
            ageValidity: false,
            salaryValidity: false
        },
        formValid: false,
        successMessage: ''
    }
    validateField(field, value) {
        var form = { ...this.state.form };
        var fieldValidity = { ...this.state.fieldValidity };
        var formError = { ...this.state.formError };
        form[field] = value;
        if (field === "ename") {
            if (value.length < 4) {
                formError.enameError = "The name should not be less than 4";
                fieldValidity.enameValidity = false;
            }
            else {
                formError.enameError = "";
                fieldValidity.enameValidity = true;
            }
        }
        else if (field === "gender") {
            if (value === "male" || value === "female") {
                formError.genderError = "";
                fieldValidity.genderValidity = true;
            }
            else {
                formError.genderError = "The gender should be male or female";
                fieldValidity.genderValidity = false;
            }
        }
        else if (field === "age") {
            if (value < 21) {
                formError.ageError = "The age should not be less than 21";
                fieldValidity.ageValidity = false;
            }
            else {
                formError.ageError = "";
                fieldValidity.ageValidity = true;
            }
        }
        else if (field === "salary") {
            if (value <= 10000) {
                formError.salaryError = "The name should not be less than 10000";
                fieldValidity.salaryValidity = false;
            }
            else {
                formError.salaryError = "";
                fieldValidity.salaryValidity = true;
            }
        }
        this.setState({ form: form, formError: formError, fieldValidity: fieldValidity });

        this.setState({ formValid: this.state.fieldValidity.enameValidity && this.state.fieldValidity.ageValidity && this.state.fieldValidity.genderValidity })
    }

    handleChange = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            var resultJSON = {
                empId:this.props.match.params.empId,
                ename: this.state.form.ename,
                age: this.state.form.age,
                gender: this.state.form.gender,
                salary: this.state.form.salary
            }
            console.log(JSON.stringify(resultJSON));
        }
        this.setState({ successMessage: JSON.stringify(resultJSON) });
    }

    render() {
        return (
            <div style={{ width: 500, margin: '0px auto', textAlign: 'left', fontSize: '20px' }}>
                <div className="form-group">
                    <label>Employee Id:</label>
                    <input className="form-control" onChange={(e) => { this.validateField(e.target.name, e.target.value) }} name="empId" value={this.props.match.params.empId} disabled/>
                </div>

                <div className="form-group">
                    <label>Employee Name:</label>
                    <input className="form-control" onChange={(e) => { this.validateField(e.target.name, e.target.value) }} name="ename" value={this.state.form.ename} />
                    <span className="text-danger">{this.state.formError.enameError}</span>
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <input className="form-control" onChange={(e) => { this.validateField(e.target.name, e.target.value) }} name="gender" value={this.state.form.gender} />
                    <span className="text-danger">{this.state.formError.genderError}</span>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input className="form-control" onChange={(e) => { this.validateField(e.target.name, e.target.value) }} name="age" value={this.state.form.age} />
                    <span className="text-danger">{this.state.formError.ageError}</span>
                </div>

                <div className="form-group">
                    <label>Salary</label>
                    <select className="form-control" onChange={(e) => { this.validateField(e.target.name, e.target.value) }} name="salary" value={this.state.form.salary}>
                        <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                    </select>
                    <span className="text-danger ">{this.state.formError.salaryError}</span>
                </div>

                <button type="button" className="btn btn-success" onClick={this.handleChange} disabled={!this.state.formValid}>Add</button><br />
                <span className="text-success">{this.state.successMessage}</span>
            </div>
        );
    }
}

export default EditEmployee;