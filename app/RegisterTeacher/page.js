'use client'
import React from 'react'
import './register.css'

const page = () => {

    const RegisterUser = async () => {
        if (document.getElementById("fullName").value != "" && document.getElementById("username").value != "" && document.getElementById("password").value != "" && document.getElementById("confirmPassword").value != "") {
            if (document.getElementById("password").value == document.getElementById("confirmPassword").value && document.getElementById("confirmPassword").value != "" && document.getElementById("password").value != "") {
                let login = await fetch("/api/RegisterTeacher", {
                    method: "POST",
                    body: JSON.stringify({ name: document.getElementById("fullName").value, password: document.getElementById("password").value , username : document.getElementById("username").value}),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                let response = await login.json()
                document.getElementById("fullName").value = ""
                document.getElementById("username").value = ""
                document.getElementById("password").value = ""
                document.getElementById("confirmPassword").value = ""
                if(response.msg == "User Already Exists"){
                    alert("User With This same username already exists")
                }else{
                    alert("New user Created")
                }
                console.log(response)
            } else {
                alert("Make Sure That password equals Confirm Password")
            }
        } else {
            alert("Please Do Fill all the field")
        }
    }

    return (
        <main>
            <div className="header animate-slide-in">
                <h1>EduGuru</h1>
                <h2>Create Your Account</h2>
            </div>
            <div id="registrationForm">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />

                <button className="register-button" onClick={RegisterUser}>Register</button>

                <p>Already have an account? <a href="/" className="login-link">Login Here</a></p>
            </div>
        </main>
    )
}

export default page
