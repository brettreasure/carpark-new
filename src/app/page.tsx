import ImageCarousel from '@/components/ImageCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <ImageCarousel />
      
      {/* Buttons Section */}
      <div className="py-8 bg-gradient-to-b from-cream/20 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
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
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center gap-8">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/notbadforacarpark/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:scale-110 transition-transform duration-200"
              >
                <svg 
                  className="w-12 h-12 text-pink-600 group-hover:text-pink-700" 
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
                  className="w-12 h-12 text-blue-600 group-hover:text-blue-700" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
