import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [disease, setDisease] = useState('');
  const hospitalSuggestions = {
    cardiac: ['Apollo Hospital, Delhi', 'Fortis Escorts, Chennai'],
    neuro: ['NIMHANS, Bangalore', 'AIIMS, Delhi'],
    orthopedic: ['Sancheti Hospital, Pune', 'KIMS, Hyderabad'],
    general: ['Manipal Hospital', 'Max Healthcare']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted Successfully!');
  };

  return (
    <div className="container">
      <h1>Mediconket - Your Health Companion</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="number" placeholder="Age" required />
        <input type="number" placeholder="Height (cm)" required />
        <input type="number" placeholder="Weight (kg)" required />
        <input type="tel" placeholder="Mobile Number" required />

        <textarea placeholder="Disease Information" required></textarea>
        <textarea placeholder="Symptoms" required></textarea>
        <textarea placeholder="Problem Description" required></textarea>
        <textarea placeholder="Prevention Methods"></textarea>

        <input type="file" multiple title="Upload Previous Medical Files" />
        <input type="file" multiple title="Upload Previous Prescriptions" />

        <select value={disease} onChange={(e) => setDisease(e.target.value)} required>
          <option value="">-- Select Disease --</option>
          <option value="cardiac">Cardiac</option>
          <option value="neuro">Neurological</option>
          <option value="orthopedic">Orthopedic</option>
          <option value="general">General</option>
        </select>

        {disease && (
          <div>
            <h3>Suggested Hospitals:</h3>
            <ul>
              {hospitalSuggestions[disease].map((hospital, i) => (
                <li key={i}>{hospital}</li>
              ))}
            </ul>
          </div>
        )}

        <label>Medicine Reminder Time:</label>
        <input type="time" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
