
import { useState } from 'react';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    track: '',
    agree: false
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.track || !form.agree) {
      setMessage('Please fill in all fields and accept the terms.');
      return;
    }

    setMessage(`Welcome, ${form.name}! Your registration was successful.`);

    setForm({
      name: '',
      email: '',
      track: '',
      agree: false
    });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} noValidate>
        <h2>Create Your Account</h2>
        <p>Join our learning community today.</p>

        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label htmlFor="track">Choose Your Track</label>
        <select
          id="track"
          name="track"
          value={form.track}
          onChange={handleChange}
        >
          <option value="">Choose a track</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>

        <button type="submit" disabled={!form.agree}>
          Sign Up
        </button>

        {message && <p className="message" role="status">{message}</p>}
      </form>
    </div>
  );
}
