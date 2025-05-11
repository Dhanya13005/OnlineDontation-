import React from 'react';
import './Dashboard.css';

const donations = [
  {
    title: 'Money Donation',
    description: 'Support families and communities with monetary help.',
    image: 'https://cdn-icons-png.flaticon.com/512/857/857681.png'
  },
  {
    title: 'Food Donation',
    description: 'Donate essential groceries and meals to the needy.',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
  },
  {
    title: 'Hospital Support',
    description: 'Provide medical kits, equipment, and blood donations.',
    image: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png'
  },
  {
    title: 'Clothes Donation',
    description: 'Provide clothes to the underprivileged and disaster victims.',
    image: 'https://cdn-icons-png.flaticon.com/512/892/892458.png'
  },
  {
    title: 'Education Support',
    description: 'Donate books, stationery, or sponsor education.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png'
  }
];

const Dashboard = () => (
  <div className="dashboard-container">
    <h2>Donation Types</h2>
    <div className="card-wrapper">
      {donations.map((item, index) => (
        <div className="donation-card" key={index}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
