import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Heading */}
        <h1 className="text-center text-danger fw-bold mb-4">Contact Arbaani</h1>
        <p className="text-center mb-5">
          Have a question, concern, or just want to say hello? We’d love to hear from you!
        </p>

        {/* Contact Info & Map */}
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="bg-white p-4 shadow-sm rounded">
              <h4 className="fw-bold mb-3">Get in Touch</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>📍 Address:</strong> 123 Sneaker Street, Delhi, India
                </li>
                <li className="mb-3">
                  <strong>📞 Phone:</strong> +91 98765 43210
                </li>
                <li className="mb-3">
                  <strong>✉️ Email:</strong> contact@arbaani.com
                </li>
                <li className="mb-3">
                  <strong>🕒 Hours:</strong> Mon – Sat: 10:00 AM – 7:00 PM
                </li>
              </ul>

              {/* Optional: Social icons */}
              <div className="mt-4">
                <h6 className="fw-semibold">Follow Us:</h6>
                <a href="#" className="me-3 text-danger text-decoration-none">Facebook</a>
                <a href="#" className="me-3 text-danger text-decoration-none">Instagram</a>
                <a href="#" className="text-danger text-decoration-none">Twitter</a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-md-6">
            <div className="ratio ratio-4x3 shadow-sm rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.482004289308!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc2e6225cf5%3A0xb6236a84cb24a3fd!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1673345671000!5m2!1sen!2sin"
                title="Google Map"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
