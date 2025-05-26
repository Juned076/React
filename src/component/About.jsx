import React from 'react';
 // Add your shoe image here

function About () {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src='./media\images\2816896.jpg' alt="Arbaani Shoes" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="text-danger fw-bold mb-3">About Arbaani</h2>
          <p className="text-muted">
            Arbaani is a premium shoe brand dedicated to combining fashion, comfort, and durability. 
            We specialize in crafting high-quality footwear for people who value elegance, boldness, and performance.
          </p>
          <p className="text-muted">
            From casual kicks to formal wear, every pair of Arbaani shoes is designed with passion and made for those who dare to step ahead.
          </p>
          <h5 className="mt-4 text-danger">Our Mission</h5>
          <p className="text-muted">
            To empower individuals with stylish, long-lasting, and eco-conscious footwear that reflects confidence and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
