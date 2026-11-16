import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agreed: false
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ ...form });
  };

  return (
    <div className="container">
      <h1>Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Email
            <input type="email" name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange} required />
          </label>

          <label>
            Name
            <input type="text" name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange} required />
          </label>
        </div>

        <label>
          Address
          <input name="address" placeholder="1234 Main St"
            value={form.address}
            onChange={handleChange} required />
        </label>

        <label>
          Address 2
          <input name="address2"
            placeholder="Apartment, studio, or floor"
            value={form.address2}
            onChange={handleChange} />
        </label>

        <div className="form-row">
          <label>
            City
            <input name="city" value={form.city}
              onChange={handleChange} required />
          </label>

          <label>
            Province
            <select name="province"
              value={form.province}
              onChange={handleChange} required>
              <option value="">Choose...</option>
              {[
                "Alberta", "British Columbia", "Manitoba",
                "New Brunswick", "Newfoundland and Labrador",
                "Nova Scotia", "Ontario",
                "Prince Edward Island", "Quebec",
                "Saskatchewan"
              ].map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </label>

          <label>
            Postal Code
            <input name="postalCode"
              value={form.postalCode}
              onChange={handleChange} required />
          </label>
        </div>

        <label className="checkbox-label">
          <input type="checkbox" name="agreed"
            checked={form.agreed}
            onChange={handleChange} required />
          Agree Terms & Condition?
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Full Name:</strong> {submitted.name}</p>
          <p><strong>Address:</strong> {submitted.address}</p>
          {submitted.address2 && (
            <p><strong>Address 2:</strong> {submitted.address2}</p>
          )}
          <p><strong>City:</strong> {submitted.city}</p>
          <p><strong>Province:</strong> {submitted.province}</p>
          <p><strong>Postal Code:</strong> {submitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;