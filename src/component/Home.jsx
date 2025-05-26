import React from 'react';
const shoes = [
  {
    id: 1,
    name: 'Arbaani Blaze',
    price: '₹3,999',
    image: './media/images/jordan-mvp-678-white-red-varsity-maize.webp',
  },
  {
    id: 2,
    name: 'Arbaani Volt',
    price: '₹4,499',
    image: './media/images/HD-Air-Jordan-Shoes-Image.jpg',
  },
  {
    id: 3,
    name: 'Arbaani Ultra Max',
    price: '₹5,299',
    image: './media/images/th.jpeg',
  },
];
function Home() {
    return ( 
        <div className='container'>
                <img src=".\media\images\wp9092727.webp" style={{width:"100%",}}></img>
                <div className="container py-5">
      <h2 className="text-center fw-bold text-danger mb-5">Popular Arbaani Shoes</h2>
      <div className="row g-4">
        {shoes.map((shoe) => (
          <div className="col-md-4" key={shoe.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{shoe.name}</h5>
                <p className="text-muted">{shoe.price}</p>
                <button className="btn btn-danger">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;