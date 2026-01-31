import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Not bad for a carpark',
  description: 'About the book and author Bret Treasure - a quirky, open-hearted look at crazy, materialistic Western Society',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blue-gray/5 to-orange/10">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-l-8 border-orange">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-8 text-center">
            About the book
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-xl leading-relaxed">
              The world of rude receptionists, hidden gems, amazing service, horrible experiences… and PARKING THAT&apos;S A NIGHTMARE.
            </p>
            
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
          </div>
          
          <div className="mt-12 bg-orange/10 rounded-2xl p-8 border-l-4 border-orange">
            <h2 className="text-2xl font-bold text-dark-green mb-4">About Bret Treasure</h2>
            <p className="text-lg text-foreground">
              Right handed, average height. Good with words.
            </p>
          </div>

          <div className="mt-8 bg-blue-gray/10 rounded-2xl p-8 border-l-4 border-blue-gray">
            <h2 className="text-2xl font-bold text-dark-green mb-6">Reviews</h2>
            <div className="space-y-6 text-foreground">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-lg italic mb-2">Absolutely loving this book. Have laughed till tears roll down. Already shared/ suggested to multiple people. Great Christmas present for those oh-so-difficult to buy for techy types like my brother!</p>
                <p className="text-sm font-semibold text-dark-green">Jodie K.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-lg italic mb-2">Very, very funny</p>
                <p className="text-sm font-semibold text-dark-green">Tim G.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <p className="text-lg italic mb-2">Love it. Very funny and there are some real interesting reviews! Some people!</p>
                <p className="text-sm font-semibold text-dark-green">Patrick TT</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-lg italic mb-2">Who would have thought a book about Google reviews could be so surprisingly delightful? It&apos;s funny, clever and full of charm. Now, whenever I&apos;m scrolling through reviews for something I want to buy or somewhere I want to visit, I no longer see it as a chore. Instead, I look for the humour in them, the little bits of absurdity. This book changed how I see something as ordinary as a Google review. It&apos;s a joyful reminder to find the absurd and delightful in everyday life. I highly recommend it.</p>
                <p className="text-sm font-semibold text-dark-green">Amanda L.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-lg italic mb-2">Witty, sarcastic, OMG!!</p>
                <p className="text-sm font-semibold text-dark-green">Tara-Lea M.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <p className="text-lg italic mb-2">Strangely hypnotic</p>
                <p className="text-sm font-semibold text-dark-green">Thomas S.</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <div className="text-lg italic mb-2 space-y-3">
                  <p>Before reading it, I thought Google Reviews were where boomers went to yell at restaurants for not having table service. Now I leave poetic essays about the ambience of petrol stations and question the existential worth of public toilets.</p>
                  
                  <p>Takes us on a journey through the murky world of online judgment. From the savage elegance of the one-star takedown to the cultish devotion of the five-star love letter.</p>
                  
                  <p>I laughed. I cried. I almost left a review halfway through this review.</p>
                  
                  <p>This book will inspire you to reconsider everything: your coffee, your dentist, and the philosophical meaning of star ratings.</p>
                  
                  <p>Final verdict: 5 stars. Would review again.</p>
                </div>
                <p className="text-sm font-semibold text-dark-green">Chris C.</p>
              </div>
              
              <div>
                <p className="text-lg italic mb-2">Not bad for a book about reviews. 5 stars</p>
                <p className="text-sm font-semibold text-dark-green">Jamie S.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}