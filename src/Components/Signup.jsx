import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [signupData, setSignupData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    });

    let navigate = useNavigate();
    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value,

        });
        // console.log(signupData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signupData.email === "" || signupData.name === "", signupData.password === "", signupData.confirmPassword === "") {
            alert("please enter the data")
        }
        else if (signupData.name === regularExpression) {
            alert("not a valid name")
        }
        else if (signupData.age <= 0 || signupData.age > 100) {

            alert("Invalid age");
        }
        else if (signupData.password !== signupData.confirmPassword) {

            alert("password do not match");
        } else {

            alert("You have been successfully registered.");
        }
        console.log(signupData);
    };
    return (
        <div className="container border mt-3">
            <h2>SignUp page</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='exampleInputEmail' className="form-label">Email address:</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} value={signupData.email} />
                </div>

                <div className="mb-3">
                    <label htmlFor='exampleInputEmail' className="form-label">Enter Name:</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} value={signupData.name} />
                </div>

                <div className="mb-3">
                    <label htmlFor='exampleInputEmail' className="form-label">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} value={signupData.password} />
                </div>

                <div className="mb-3">
                    <label htmlFor='exampleInputEmail' className="form-label">Confirm Password:</label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={handleChange} value={signupData.confirmPassword} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </div>

            </form>
        </div>
    );
}

export default Signup;