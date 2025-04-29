import React, { useState } from "react";
import "./CreateElection.css";

const CreateElection = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    voters: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend logic for now
  };

  return (
    <div className="create-election-bg">
      <h1 className="create-election-title">Create a New Election</h1>
      <form className="create-election-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Election Details</h2>
          <p>Fill out the information below to set up your election</p>
        </div>
        <label>
          Election Name
          <input
            type="text"
            name="name"
            placeholder="e.g., Student Council Election 2025"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            placeholder="Provide details about this election"
            value={form.description}
            onChange={handleChange}
            rows={3}
          />
        </label>
        <div className="form-row">
          <label>
            Start Date
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          Voter Emails
          <textarea
            name="voters"
            placeholder="Enter email addresses, one per line"
            value={form.voters}
            onChange={handleChange}
            rows={3}
          />
          <span className="form-hint">Free elections support up to 20 voters</span>
        </label>
        <button className="form-submit-btn" type="submit">
          Continue to Add Candidates
        </button>
      </form>
    </div>
  );
};

export default CreateElection; 