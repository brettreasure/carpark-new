import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Not bad for a carpark',
  description: 'Privacy Policy for Not Bad for a Carpark - How we collect, use and protect your personal data',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blue-gray/5 to-orange/10">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-orange">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-orange">Effective Date: 7 August, 2025</p>
            </div>
            
            <p>
              This Privacy Policy outlines the types of personal data I collect, how I use it, and how I protect it in compliance with the General Data Protection Regulation (GDPR) and Australian Privacy Principles (APPs) under the Privacy Act 1988.
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">1. Information We Collect</h3>
              <p>I may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email addresses:</strong> When you subscribe to our newsletter, make a purchase, or submit a comment.</li>
                <li><strong>Comments:</strong> Any feedback, opinions, or comments submitted via forms on the website.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">2. How We Use Your Information</h3>
              <p>I use the information I collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide you with updates and information about my book, writing, and related products.</li>
                <li>Respond to comments, questions, or requests submitted via my website.</li>
                <li>Improve the user experience on my website.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">3. Sharing Your Information</h3>
              <p>
                Until and unless I advise a change to this policy, your email address will not be passed on to any third parties for marketing purposes. The only exception is if I have a business relationship with a publisher or third-party party in connection with this website or my writing projects.
              </p>
              <p>
                I may share your information with trusted partners or service providers who assist in operating my website, conducting business, or providing services to you. These third parties are obligated not to disclose or use your information for any other purpose.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">4. Data Retention</h3>
              <p>
                Your personal data will only be kept for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">5. Your Rights</h3>
              <p>Under GDPR and Australian privacy laws, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> You can request corrections to your personal data if it is inaccurate or incomplete.</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal data, subject to any legal obligations we may have to retain it.</li>
                <li><strong>Opt-Out:</strong> You can unsubscribe from our marketing emails at any time by using the unsubscribe link at the bottom of our emails.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">6. Security</h3>
              <p>
                I take appropriate technical and organizational measures to safeguard your personal data from unauthorized access, alteration, or destruction. However, no data transmission over the internet can be guaranteed 100% secure.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">7. Changes to This Privacy Policy</h3>
              <p>
                I reserve the right to amend this Privacy Policy in the future. If any changes are made, they will be posted on this website, and I will update the "Effective Date" above. It is your responsibility to review this Privacy Policy periodically for any changes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">8. Contact Us</h3>
              <p>If you have any questions or concerns about this Privacy Policy or my data practices, please contact me at:</p>
              <p><strong>Email:</strong> <a href="mailto:treasure@freebeer.com.au" className="text-orange hover:underline">treasure@freebeer.com.au</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}