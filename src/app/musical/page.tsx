import ConfigurableImageCarousel from "@/components/ConfigurableImageCarousel";

const musicalImages = [
  { src: "/snippets2/1_Cover.png", alt: "Cover" },
  { src: "/snippets2/2_Belltower1.png", alt: "Belltower 1" },
  { src: "/snippets2/3_Belltower2.png", alt: "Belltower 2" },
  { src: "/snippets2/4_Heirisson1.png", alt: "Heirisson 1" },
  { src: "/snippets2/5_Heirisson2.png", alt: "Heirisson 2" },
  { src: "/snippets2/6_Heirisson3.png", alt: "Heirisson 3" },
  { src: "/snippets2/7_Heirisson4.png", alt: "Heirisson 4" },
  { src: "/snippets2/8_Heirisson5.png", alt: "Heirisson 5" },
  { src: "/snippets2/9_Heirisson6.png", alt: "Heirisson 6" },
  { src: "/snippets2/10_End.png", alt: "End" },
];

export default function Musical() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <ConfigurableImageCarousel images={musicalImages} />

      {/* YouTube Video Section */}
      <div className="py-12 bg-gradient-to-b from-cream/20 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://youtube.com/embed/fKNuhSseJK4"
                title="Musical Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Park at the Bret Treasure</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            So there's this guy, Bret Treasure,<br />
            who's written a book about car parks,<br />
            and he has this romantic conceit that after he dies,<br />
            someone might name a car park after him...
          </p>
          <a
            href="/Park_at_the_Bret_Treasure.mp3"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Play the song
          </a>
        </div>
      </div>

      {/* Pizza Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bring back the pizza</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            You'll really have to read the book to get all the references in this song, but here's a taste:
          </p>
          <div className="mb-6">
            <img 
              src="/pizza.png" 
              alt="Pizza" 
              className="mx-auto max-w-full"
              style={{ maxWidth: '480px' }}
            />
          </div>
          <a
            href="/Bring_back_the_pizza.mp3"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Play the song
          </a>
        </div>
      </div>
    </div>
  );
}
