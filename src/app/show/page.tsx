import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import ReviewCard from '@/components/ReviewCard';
import ShowVideo from '@/components/ShowVideo';
import ShowEnquiryForm from '@/components/ShowEnquiryForm';
import {
  SEASON_CONFIRMED,
  SHOW_HERO_META,
  SHOW_VENUE_NAME,
  SHOW_VENUE_SUBURB,
  SHOW_START_DATE,
  SHOW_END_DATE,
  SHOW_TICKET_URL,
} from '@/lib/show-config';

const SITE_URL = 'https://www.notbadforacarpark.com';
const PAGE_URL = `${SITE_URL}/show`;
const OG_IMAGE_URL = `${SITE_URL}/show/og-image.png`;
const OG_TITLE = 'Not Bad For A Car Park';
const OG_DESCRIPTION = 'A live comedy show built entirely from real Google reviews.';

export const metadata: Metadata = {
  title: 'Not Bad For A Car Park — Live Show',
  description: OG_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'A Google review card showing three stars and the review "Parking"',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

const REVIEWS = [
  {
    place: 'Southern Esplanade Carpark',
    reviewer: 'Tony Reynolds',
    meta: 'Local Guide · 577 reviews · 191 photos',
    stars: 3,
    body: 'Parking',
  },
  {
    place: 'Singapore Charlie Costume Shop',
    reviewer: 'Renee',
    meta: '4 reviews',
    stars: 1,
    body: "It's a day of mourning",
  },
  {
    place: 'The Good Guys, Cairns',
    reviewer: 'Emma Marshall',
    meta: '2 reviews',
    stars: 1,
    body: 'Went into Goodguys Cairns to buy a playstation for Christmas. Got told they were up on the shelf and that was pretty much it; so we left and bought somewhere else.',
  },
  {
    place: 'Cairns Central Shopping Centre',
    reviewer: 'Ceiling Fan',
    meta: '6 reviews · 1 photo',
    stars: 5,
    body: 'Came here for the grimace shake and lost my friend in the process it was an actual fever dream … after my first grimace shake I went back for more. But this was a mistake as when I got home I violently threw up everywhere.',
  },
];

const PERTH_VENUES = [
  'The Bell Tower',
  'The Boat Shed',
  'Heirisson Island',
  'North Perth Post Office',
  "Rodney's Bait & Tackle",
  'Kings Park',
];

const SPEC_ROWS: [string, string][] = [
  ['Running time', '45 minutes, no interval'],
  ['Cast', 'One performer'],
  ['Bump in / out', '30 minutes / 15 minutes'],
  ['Sound', 'House PA, one wired handheld or headset mic'],
  ['Vision', 'Projector and screen, or 65"+ monitor, HDMI. Minimum 2m image width'],
  [
    'Lighting',
    'General warm wash plus house at 20–30% — the show is interactive and needs the audience visible. No blackout required',
  ],
  ['Rigging', 'None. No flying, fly bar, truss or rigging points'],
  ['Power', 'Two 10-amp outlets'],
  ['Operation', 'Self-operated from a laptop and clicker. No dedicated LX or sound op required'],
  ['Room', 'Works from 50 to 150 seats. Cabaret seating preferred over rows'],
];

export default function ShowPage() {
  const techSpecExists = fs.existsSync(path.join(process.cwd(), 'public', 'tech-spec.pdf'));

  const eventJsonLd =
    SEASON_CONFIRMED && SHOW_START_DATE
      ? {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: 'Not Bad For A Car Park',
          startDate: SHOW_START_DATE,
          ...(SHOW_END_DATE ? { endDate: SHOW_END_DATE } : {}),
          location: {
            '@type': 'Place',
            name: SHOW_VENUE_NAME,
            address: SHOW_VENUE_SUBURB,
          },
          performer: {
            '@type': 'Person',
            name: 'Bret Treasure',
          },
          ...(SHOW_TICKET_URL ? { offers: { '@type': 'Offer', url: SHOW_TICKET_URL } } : {}),
        }
      : null;

  return (
    <div className="min-h-screen">
      {eventJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-green to-dark-green/90 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Not Bad For A Car Park</h1>
              <p className="text-xl md:text-2xl text-cream/90 mb-4">
                A live comedy show built entirely from real Google reviews.
              </p>
              <p className="text-orange font-semibold tracking-wide uppercase text-sm md:text-base mb-8">
                {SHOW_HERO_META}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="#watch"
                  className="w-full sm:w-auto bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Watch the video
                </a>
                <a
                  href="#book"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-2 border-white/40 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
                >
                  Book the show
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/show/bret-clock.webp"
                alt="Bret Treasure pulling a comic, wide-eyed expression in front of an antique grandfather clock"
                className="rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-8 text-center">
            What it is
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-orange space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              The ridiculous, entitled, hysterical, righteous, incoherent opinions that people
              launch at the internet before they&apos;ve had a chance to cool down a little. As
              well as the unexpectedly gracious.
            </p>
            <p>
              The audience and I read the reviews together. They guess the ratings before the
              reveal, they argue about them, and they bring their own.
            </p>
            <p>
              Some of these reviews beg to be turned into songs and I&apos;ve reluctantly written
              them. The songs land as a series of callbacks, so by the time one arrives the room
              already owns the joke. In-jokes are the best jokes.
            </p>
            <p className="font-semibold text-dark-green">
              Somewhere between interactive stand-up and comedic cabaret. Forty-five minutes, no
              interval.
            </p>
          </div>
        </div>
      </section>

      {/* The material */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10 text-center">
            The material
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.place} {...review} />
            ))}
          </div>
          <p className="text-center text-gray-500 italic mt-8 max-w-2xl mx-auto">
            All verbatim. All findable. Nothing is exaggerated because nothing needs to be.
          </p>
        </div>
      </section>

      {/* Watch */}
      <section id="watch" className="bg-dark-green">
        <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Watch</h2>
          <ShowVideo />
          <p className="text-cream/80 mt-6">Two minutes of the Cairns set.</p>
        </div>
      </section>

      {/* This season plays Perth */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
            This season plays Perth
          </h2>
          <p className="text-lg text-foreground mb-8">
            The archive is national. The show is local by design.
          </p>
          <p className="text-xl font-semibold text-blue-gray mb-8 leading-relaxed">
            {PERTH_VENUES.join(' · ')} · and every car park between them
          </p>
          <p className="text-lg text-foreground italic">
            Ordinary places, ridiculous reviews, and everybody recognises the feeling.
          </p>
        </div>
      </section>

      {/* The songs */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">The songs</h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Some reviews beg to be set to music. In the show they arrive as callbacks — by the
            time a song starts, the room already knows the review it is built on.
          </p>
          <a
            href="/musical"
            className="inline-block text-orange hover:text-dark-green font-bold text-lg underline underline-offset-4"
          >
            Hear the songs →
          </a>
        </div>
      </section>

      {/* For programmers and bookers */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10 text-center">
            For programmers and bookers
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-blue-gray">
            <dl className="divide-y divide-blue-gray/10">
              {SPEC_ROWS.map(([term, desc]) => (
                <div
                  key={term}
                  className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4 py-4"
                >
                  <dt className="font-bold text-dark-green">{term}</dt>
                  <dd className="text-foreground">{desc}</dd>
                </div>
              ))}
            </dl>

            {techSpecExists && (
              <div className="text-center mt-10">
                <a
                  href="/tech-spec.pdf"
                  className="inline-block bg-blue-gray hover:bg-blue-gray/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Download the full tech spec (PDF)
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Book the show */}
      <section id="book" className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-8 text-center">
            Book the show
          </h2>
          <div className="prose prose-lg max-w-none text-foreground mb-8 text-center space-y-4">
            <p>
              The show travels light and rebuilds itself for wherever it is playing. It has
              played corporate rooms, community rooms and festival rooms.
            </p>
            <p>
              Available for conference dinners, staff events, libraries, writers&apos; festivals,
              bookshop events and regional touring.
            </p>
          </div>
          <ShowEnquiryForm />
        </div>
      </section>

      {/* About */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-8 text-center">
            About
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <img
              src="/show/bret-presenting.webp"
              alt="Bret Treasure presenting on stage with a clicker in hand"
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full object-cover shadow-lg flex-shrink-0"
            />
            <p className="text-lg text-foreground leading-relaxed">
              Bret Treasure is a Perth writer and marketing consultant. He wrote{' '}
              <a href="/" className="text-orange hover:text-dark-green underline font-semibold">
                Not Bad For A Car Park
              </a>
              , a book assembled from real Google reviews, and performs the live show of the
              same name.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
