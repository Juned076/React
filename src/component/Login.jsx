import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';// Replace with your actual image path

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in!');
    console.log(formData);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(to right, #ff512f, #dd2476)',
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="row shadow rounded overflow-hidden bg-white">
          {/* Left Image Side */}
          <div className="col-md-6 d-none d-md-block p-0">
            <img
              src=".\media\images\photo-1542291026-7eec264c27ff.jpeg"
              alt="Shoe"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right Login Form */}
          <div className="col-md-6 p-4">
            <div className="text-center mb-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/jordan-15-569341.png"
                alt="Logo"
                style={{ width: '50px' }}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control border-bottom border-2 rounded-0"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control border-bottom border-2 rounded-0"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="mb-3 text-end">
                <a href="#" className="text-danger small">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold">
                LOGIN
              </button>
            </form>

            <div className="text-center mt-3 text-muted">Or Login With</div>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <button className="btn btn-outline-dark btn-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Google"
                  width="20"
                  className="me-2"
                />
                Google
              </button>
              <button className="btn btn-outline-dark btn-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  alt="Facebook"
                  width="20"
                  className="me-2"
                />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
