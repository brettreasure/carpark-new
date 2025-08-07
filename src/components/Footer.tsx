import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-green/90 backdrop-blur-sm border-t-4 border-orange mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright - Left aligned */}
          <div className="text-white/90 text-sm order-2 md:order-1">
            Copyright © 2025 Bret Treasure. All rights reserved.
          </div>
          
          {/* Links - Right aligned */}
          <div className="flex space-x-6 order-1 md:order-2">
            <Link 
              href="/privacy" 
              className="text-white/90 hover:text-orange hover:underline text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-white/90 hover:text-orange hover:underline text-sm transition-colors duration-200"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}