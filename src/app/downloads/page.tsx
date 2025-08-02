import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads | Not bad for a carpark',
  description: 'Download an Advance Review Copy of the book after email validation',
};

export default function Downloads() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange/10 via-cream to-blue-gray/5">
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-t-8 border-orange">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            Get Your Copy
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground mb-8">
            <p className="text-xl leading-relaxed text-center">
              Here&apos;s the deal. You can have an Advanced Review Copy of the book if you fill out the stupid form.
            </p>
            
            <p className="text-center">
              The second time it makes you laugh out loud I request you stop reading and write an honest review. You do that at goodreads.com or Amazon (if you buy books there). They like you to mention you got an Advance Review Copy.
            </p>
            
            <p className="text-center font-semibold text-orange">
              Thank you so much.
            </p>
          </div>
          
          <div className="bg-cream/50 rounded-2xl p-8 border-2 border-orange/20">
            <h2 className="text-2xl font-bold text-dark-green mb-6 text-center">Stupid Form</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-green mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-orange/20 rounded-lg focus:border-orange focus:outline-none transition-colors"
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
                  required
                  className="w-full px-4 py-3 border-2 border-orange/20 rounded-lg focus:border-orange focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Request Review Copy
              </button>
            </form>
            
            <p className="text-sm text-blue-gray mt-4 text-center">
              You&apos;ll receive an email to validate your address before downloading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}