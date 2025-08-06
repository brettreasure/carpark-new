'use client';

import { useState } from 'react';

// Note: metadata export needs to be in a separate file for client components
// We'll add this back in layout.tsx or create a separate metadata file

export default function Downloads() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showDownload, setShowDownload] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/downloads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setShowDownload(true);
        // Keep form data to show personalized message
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange/10 via-cream to-blue-gray/5">
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-t-8 border-orange">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            Here's the deal
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground mb-8">
            <p className="text-xl leading-relaxed text-center">
              Join the list to trigger the download of an Advance Reader Copy.
            </p>
            
            <p className="text-center">
              The second time it makes you laugh out loud, stop laughing and write an honest review. You do that at goodreads.com or Amazon (if you buy books there). They like you to mention you got an ARC (Advance Reader Copy).
            </p>
          </div>
          
          <div className="bg-cream/50 rounded-2xl p-8 border-2 border-orange/20">
            {!showDownload ? (
              <>
                <h2 className="text-2xl font-bold text-dark-green mb-6 text-center">Stupid Form</h2>
                
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
                      className="w-full px-4 py-3 border-2 border-orange/20 rounded-lg focus:border-orange focus:outline-none transition-colors disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-green mb-2">
                      Valid email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border-2 border-orange/20 rounded-lg focus:border-orange focus:outline-none transition-colors disabled:opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange hover:bg-orange/90 disabled:bg-orange/50 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Request Review Copy'}
                  </button>
                </form>
                
                <p className="text-sm text-blue-gray mt-4 text-center">
                  Just fill out the form to get your download link.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold text-dark-green mb-8 text-center">Thank you so much!</h2>
                
                <div className="text-center">
                  <button
                    onClick={() => {
                      // TODO: Replace with actual download link
                      alert('Download will be implemented here');
                    }}
                    className="w-full bg-dark-green hover:bg-dark-green/90 text-white font-bold py-6 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-xl"
                  >
                    Download "Not bad for a carpark"
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}