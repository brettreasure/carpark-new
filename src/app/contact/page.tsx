import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Not bad for a carpark',
  description: 'Get in touch for speaking engagements, media appearances, or general inquiries',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-orange/5 to-blue-gray/10">
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-b-8 border-dark-green">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            Get in Touch
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground mb-8 space-y-4">
            <p className="text-lg">
              Yes, I do entertaining after-dinner speeches.
            </p>
            
            <p className="text-lg">
              Yes, I perform for the media.
            </p>
            
            <p className="text-lg">
              Yes, you can plonk a review here if you&apos;re too lazy to do it on Amazon.
            </p>
            
            <p className="text-lg font-semibold text-orange">
              Contact me if you can help me fund-raise for Myanmar refugees.
            </p>
          </div>
          
          <div className="bg-dark-green/5 rounded-2xl p-8 border-2 border-dark-green/20">
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
                  className="w-full px-4 py-3 border-2 border-dark-green/20 rounded-lg focus:border-dark-green focus:outline-none transition-colors"
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
                  required
                  className="w-full px-4 py-3 border-2 border-dark-green/20 rounded-lg focus:border-dark-green focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-green mb-2">
                  Comment
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border-2 border-dark-green/20 rounded-lg focus:border-dark-green focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-dark-green hover:bg-dark-green/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}