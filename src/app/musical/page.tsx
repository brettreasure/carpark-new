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
                src="https://www.youtube.com/embed/M_RxpCRy4uw"
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
    </div>
  );
}
