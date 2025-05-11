import React, { useState } from 'react';

const DonationForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    method: '',
    message: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for your donation!');
    // In real app: send this data to backend or external API
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2>Make a Donation</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={form.name} required />
      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} value={form.email} required />
      <input type="number" name="amount" placeholder="Donation Amount ($)" onChange={handleChange} value={form.amount} required />
      <select name="method" onChange={handleChange} value={form.method} required>
        <option value="">Select a method</option>
        <option>Credit Card</option>
        <option>UPI</option>
        <option>PayPal</option>
        <option>Cash</option>
      </select>
      <textarea name="message" placeholder="Message (optional)" onChange={handleChange} value={form.message}></textarea>
      <button type="submit" style={{ background: 'green', color: 'white' }}>Donate Now</button>
    </form>
  );
};

export default DonationForm;
