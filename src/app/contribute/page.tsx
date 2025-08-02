import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contribute | Not bad for a carpark',
  description: 'Share your favorite Google Reviews with us',
};

export default function Contribute() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-gray/10 via-cream to-orange/5">
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-r-8 border-blue-gray">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            Share a Review
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground mb-8">
            <p className="text-xl leading-relaxed text-center">
              Thanks so much for sending in a Google Review link. I promise to read it. Let me know if you want a credit when I use it, and feel free to add your comment or story about the review.
            </p>
          </div>
          
          <div className="bg-blue-gray/5 rounded-2xl p-8 border-2 border-blue-gray/20">
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
                  className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="reviewLink" className="block text-sm font-medium text-dark-green mb-2">
                  Google Review link
                </label>
                <input
                  type="url"
                  id="reviewLink"
                  name="reviewLink"
                  required
                  className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors"
                  placeholder="https://..."
                />
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-dark-green mb-2">
                  Your comment (maximum 250 words, optional)
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  maxLength={250}
                  className="w-full px-4 py-3 border-2 border-blue-gray/20 rounded-lg focus:border-blue-gray focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about this review..."
                />
                <p className="text-sm text-blue-gray mt-1">250 characters remaining</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="credit"
                  name="credit"
                  className="w-5 h-5 text-blue-gray border-2 border-blue-gray/20 rounded focus:ring-blue-gray"
                />
                <label htmlFor="credit" className="text-sm font-medium text-dark-green">
                  Want a credit? (yes or no)
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-gray hover:bg-blue-gray/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Review
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <button className="text-blue-gray hover:text-dark-green underline font-medium">
                Add another
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}