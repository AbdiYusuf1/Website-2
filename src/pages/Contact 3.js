import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError(''); // Clear errors if validation passes

    console.log('Form Data Submitted:', formData);

    alert('Thank you for your message!');

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you!</p>
      
      {/* Holiday Destination Pictures */}
      <div className="holiday-gallery">
        <div className="holiday-item">
          <img src="https://www.ahstatic.com/photos/b986_ho_00_p_1024x768.jpg" alt="Destination 1" />
          <p>Maldives</p>
        </div>
        <div className="holiday-item">
          <img src="https://imageio.forbes.com/specials-images/imageserve/675172642/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Destination 2" />
          <p>Bali</p>
        </div>
        <div className="holiday-item">
          <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg" alt="Destination 3" />
          <p>Switzerland</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
