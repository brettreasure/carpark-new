import ImageCarousel from '@/components/ImageCarousel';

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
    </div>
  );
}
