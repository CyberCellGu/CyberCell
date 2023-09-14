import React, { useState } from 'react';
import './Register.css'; // Create a new CSS file for styling if needed

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
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
              />
            </div>
            <div>
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
            </div>

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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
