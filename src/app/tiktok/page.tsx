import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download the Book | Not bad for a carpark',
  description: 'Download the book by Bret Treasure - a quirky, open-hearted look at crazy, materialistic Western Society',
};

export default function TikTok() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blue-gray/5 to-orange/10">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-orange">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            Download the Book
          </h1>

          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-xl leading-relaxed">
              The world of rude receptionists, hidden gems, amazing service, horrible experiences… and PARKING THAT&apos;S A NIGHTMARE.
            </p>

            <div className="text-center mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/downloads"
                  className="inline-block bg-dark-green hover:bg-dark-green/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                >
                  FREE
                </a>
                <a
                  href="https://www.amazon.com.au/dp/B0FQD23JGR/ref=sr_1_1?crid=10PW0HIV6BX9T&dib=eyJ2IjoiMSJ9.YTmIViUR87prPBljsR3AlA.IgrFdFoEmGhUQw6_0LV4qFP7G3-WOpVj858zMt4LDlk&dib_tag=se&keywords=not+bad+for+a+carpark&qid=1757687819&sprefix=not+bad+for+a+carpark%2Caps%2C1165&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                >
                  Amazon
                </a>
              </div>
            </div>

            <p>
              A burst-out-laughing commentary on the ridiculous, inane, entitled, hysterical, righteous, cruel, incoherent, indignant opinions that people launch at the Internet before they&apos;ve had a chance to cool down a little.
            </p>

            <p>
              You&apos;ll encounter the Dinosaur Park with one dinosaur, the screaming match in the brothel, the alley of wet cabbages and the Old Big Man with Severe Mental Issue. And the Old Cow on the Tobacco Counter. And the spirit medium who puts you in touch with your dead dog (5 stars).
            </p>

            <p>
              A quirky, open-hearted look at crazy, materialistic, Western Society, and the minestrone of contemporary language. The modern Australian sense of humour on show.
            </p>

            <p className="font-semibold text-orange">
              Join FlibbyFlobby, Pants Magee, Bombshell Tans and GorillaWithAGun, as they swing from temper tantrum to &apos;I&apos;m Not Worthy&apos; adoration.
            </p>
          </div>

          <div className="mt-12 bg-orange/10 rounded-2xl p-8 border-l-4 border-orange">
            <h2 className="text-2xl font-bold text-dark-green mb-4">About Bret Treasure</h2>
            <p className="text-lg text-foreground">
              Right handed, average height. Good with words.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 pt-6 border-t border-dark-green/20">
            <div className="flex justify-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/notbadforacarpark/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:scale-110 transition-transform duration-200"
              >
                <svg
                  className="w-8 h-8 text-pink-600 group-hover:text-pink-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61581485386274"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:scale-110 transition-transform duration-200"
              >
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@notbadforacarpark"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:scale-110 transition-transform duration-200"
              >
                <svg
                  className="w-8 h-8 text-black group-hover:text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
