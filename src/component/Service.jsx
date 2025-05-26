import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Visually stunning and mobile-ready websites.',
      icon: 'bi-brush',
    },
    {
      title: 'App Development',
      description: 'Fast, scalable apps built for performance.',
      icon: 'bi-phone',
    },
    {
      title: 'SEO & Marketing',
      description: 'Grow your business with smarter strategies.',
      icon: 'bi-bar-chart-line',
    },
    {
      title: 'Branding',
      description: 'Crafting powerful brand identities.',
      icon: 'bi-badge-ad',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="text-white text-center py-5" style={{
        background: 'linear-gradient(135deg, #c31432, #240b36)',
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead">Everything you need to elevate your brand</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="container py-5">
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-danger fs-1 mb-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
