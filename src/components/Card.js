import React, { Component } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg'; 
import image4 from '../assets/image4.jpg';
import Employee from './Employee';

const emp1 = {
    empId: 100,
    ename: "Jack",
    age: 20,
    salary: 50000,
    image: image1,
    achievements: "Has got 10 bravo and one mvp award"
};
const emp2 = {
    empId: 101,
    ename: "Russel",
    age: 30,
    salary: 50000,
    image: image2,
    achievements: "Has got 3 bravo and one mvp award"
};
const emp3 = {
    empId: 102,
    ename: "Jackie",
    age: 20,
    salary: 50000,
    image: image3,
    achievements: "Has got 30 bravo and one mvp award"
};
const emp4 = {
    empId: 103,
    ename: "Chan",
    age: 30,
    salary: 50000,
    image: image4,
    achievements: "Has got 10 bravo and one mvp award"
};
class Card extends Component {
    empArr = [emp1, emp2, emp3, emp4];

    render() {

        return (
            <div>
                <h3 className="text-center text-primary">Employee Details</h3>
                <div className="row">
                    {this.empArr.map((emp, index) => {
                        return <Employee key={index} emp={emp}  />
                    })}
                </div>
            </div>
        );
    }
}

export default Card;