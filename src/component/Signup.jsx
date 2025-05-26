import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Account created successfully!');
    console.log(formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: '450px', width: '100%' }}>
        <h3 className="text-center text-danger mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a password"
              required
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">Create Account</button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login" className="text-danger">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
