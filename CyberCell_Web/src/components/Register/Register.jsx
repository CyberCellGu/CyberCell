import React, { useState } from "react";
import "./Register.css"; // Create a new CSS file for styling if needed
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");
  const [year, setYear] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup_container">
      <img
        src="https://assets.codepen.io/7773162/4kNYC.jpeg"
        alt="login image"
        className="login__img"
      />
      <div className="signup__content">
        {/* Rest of your signup form */}
        <form action="" className="signup__form">
          {/* Title and labels */}
          <div>
            <h1 className="signup__title">
              <span>Welcome</span> New Hacker!
            </h1>
            <p className="signup__description">
              Welcome! Please sign up to continue.
            </p>
          </div>

          {/* Additional signup fields */}
          <div>
            {/* Add more input fields here */}
            <div>
              <label htmlFor="name" className="signup__label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
                className="signup__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name" className="signup__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email id"
                required
                className="signup__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="signup__label">
                Password
              </label>
              <div className="signup__box">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="signup__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`ri-eye${
                    showPassword ? "-line" : "-off-line"
                  } signup__eye`}
                  id="input-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </i>
              </div>
            </div>
            {/* <div>
              <label htmlFor="phoneNumber" className="signup__label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phone number"
                required
                className="signup__input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="registrationNumber" className="signup__label">
                Registration Number
              </label>
              <input
                type="text"
                id="registrationNumber"
                placeholder="Enter your registration number"
                required
                className="signup__input"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="course" className="signup__label">
                Course
              </label>
              <input
                type="text"
                id="course"
                placeholder="Enter your course"
                required
                className="signup__input"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div> */}

            <div>
              <label htmlFor="section" className="signup__label">
                Section
              </label>
              <input
                type="text"
                id="section"
                placeholder="Enter your section"
                required
                className="signup__input"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="year" className="signup__label">
                Year
              </label>
              <input
                type="text"
                id="year"
                placeholder="Enter your year"
                required
                className="signup__input"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            {/* Rest of your signup form fields */}
          </div>

          {/* Signup button */}
          <div>
            <div className="signup__buttons">
              <button type="submit" className="signup__button">
                Sign Up
              </button>
            </div>
            <p className="login__register">
              Already have an account?
              <Link to="/login"> SignIn</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
