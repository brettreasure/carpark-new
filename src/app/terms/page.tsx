import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Not bad for a carpark',
  description: 'Terms and Conditions for Not Bad for a Carpark website - Rules and guidelines for using our site',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blue-gray/5 to-orange/10">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-orange">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-orange">Effective Date: 7 August, 2025</p>
            </div>
            
            <p>
              Please read these Terms and Conditions carefully before using my website www.notbadforacarpark.com (the "Site"). By accessing or using the Site, you agree to comply with and be bound by these Terms and Conditions.
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">1. Use of the Website</h3>
              <p>
                You agree to use this website for lawful purposes only. You are prohibited from using this Site in any manner that could damage, disable, overburden, or impair the functionality of the Site.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">2. Intellectual Property</h3>
              <p>
                All content on the Site, including text, images, logos, and comments, are protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or otherwise use any part of the Site without the prior written consent of the site owner.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">3. Comments and Contributions</h3>
              <p>
                By submitting a comment or any other contribution to the website, you grant me the right to use, modify, reproduce, and publish your comment in future works, including but not limited to books, articles, or other publications. If you do not wish for your comment to be used, please do not submit it.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">4. Privacy</h3>
              <p>
                Your use of the Site is also governed by my <Link href="/privacy" className="text-orange hover:underline">Privacy Policy</Link>, which outlines how your personal information is collected, used, and shared.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">5. Limitation of Liability</h3>
              <p>
                The Site and its content are provided "as is" without any warranties, express or implied. I do not guarantee the accuracy, completeness, or reliability of any content on the Site and am not responsible for any damages resulting from the use of the Site.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">6. Modifications to the Terms</h3>
              <p>
                I reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and the "Effective Date" will be updated accordingly.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">7. Governing Law</h3>
              <p>
                These Terms and Conditions are governed by the laws of Australia and the European Union's General Data Protection Regulation (GDPR), where applicable.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-dark-green mb-3">8. Contact Us</h3>
              <p>For any questions about these Terms and Conditions, please contact us at:</p>
              <p><strong>Email:</strong> <a href="mailto:treasure@freebeer.com.au" className="text-orange hover:underline">treasure@freebeer.com.au</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}