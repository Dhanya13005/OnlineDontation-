import React, { useState } from 'react';
import axios from 'axios';
import './FormStyle.css'; // ✅ Shared CSS

const Register = () => {
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match ❌');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        username: form.username,
        password: form.password
      });

      if (res.data.success) {
        alert('✅ Registration successful!');
      }
    } catch (err) {
      alert(err.response?.data?.message || '✅ Registration successful!');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="fullname" onChange={handleChange} placeholder="Full Name" required />
      <input name="username" onChange={handleChange} placeholder="Username" required />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <input name="confirmPassword" type="password" onChange={handleChange} placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
