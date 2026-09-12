'use client';

import { useState } from 'react';

const ENQUIRY_TYPES = ['Programming', 'Media', 'Corporate booking', 'Something else'];

export default function ShowEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: ENQUIRY_TYPES[0],
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/show-enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({ name: '', email: '', enquiryType: ENQUIRY_TYPES[0], message: '' });
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-blue-gray/5 rounded-2xl p-8 border-2 border-blue-gray/20">
      {message && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {message}
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-green mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors disabled:opacity-50"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-green mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors disabled:opacity-50"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="enquiryType" className="block text-sm font-medium text-dark-green mb-2">
            Enquiry type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors disabled:opacity-50 bg-white"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-green mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            disabled={loading}
            className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors resize-none disabled:opacity-50"
            placeholder="Tell us about your room, dates and what you have in mind..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-gray hover:bg-blue-gray/90 disabled:bg-blue-gray/50 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send enquiry'}
        </button>
      </form>
    </div>
  );
}
