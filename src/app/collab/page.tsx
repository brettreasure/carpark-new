import type { Metadata } from 'next';
import ReviewCard from '@/components/ReviewCard';
import ShowVideo from '@/components/ShowVideo';

export const metadata: Metadata = {
  title: 'Not Bad For A Car Park – Producer Proposal',
  robots: {
    index: false,
    follow: false,
  },
};

function Marker({ n, label }: { n: string; label: string }) {
  return (
    <div className="font-mono text-xs tracking-widest uppercase text-blue-gray/80 mb-4">
      {n} · {label}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-orange bg-blue-gray/5 rounded-r-xl px-6 py-5 text-lg italic text-dark-green leading-relaxed">
      {children}
    </blockquote>
  );
}

function SpecBlock({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/60 rounded-xl p-5">
      <div className="font-bold text-dark-green mb-1">{term}</div>
      <div className="text-foreground text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SpecRow({
  term,
  bold = true,
  children,
}: {
  term: string;
  bold?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-1 sm:gap-4 py-4">
      <dt className={bold ? 'font-bold text-dark-green' : 'text-dark-green'}>{term}</dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}

const SET_LIST = [
  'The Bell Tower',
  'Kings Park',
  'Heirisson Island',
  'North Perth Post Office',
  'Wild Bakery',
  "Rodney's Bait & Tackle",
  'The Convention Centre',
  '…and many of your favourite car parks',
];

export default function CollabPage() {
  return (
    <div className="min-h-screen">
      {/* Cover */}
      <section className="bg-gradient-to-br from-dark-green to-dark-green/90 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="font-mono text-xs tracking-widest uppercase text-orange mb-4">
                Producer proposal · FRINGE WORLD 2027
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Not Bad For A Car Park</h1>
              <p className="text-xl md:text-2xl text-cream/90 mb-4">
                A live comedy show made entirely from real Google reviews.
              </p>
              <p className="text-cream/70">Bret Treasure · Perth</p>
            </div>
            <div className="order-1 md:order-2 flex flex-col items-center gap-3">
              <div className="w-full max-w-xs">
                <ReviewCard
                  place="Southern Esplanade Carpark"
                  reviewer="Tony Reynolds"
                  meta="Local Guide · 577 reviews · 191 photos"
                  stars={3}
                  body="Parking"
                />
              </div>
              <p className="text-cream/70 text-sm italic">Masterful 3 star review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 The premise */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <Marker n="01" label="The premise" />
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-orange space-y-6 text-lg leading-relaxed text-foreground mb-8">
            <p>
              You open Google Maps to check a café&apos;s opening hours. Twenty minutes later you
              are deep inside a feud between the owner and a customer who&apos;s decided that the
              world needs to know about an overpriced coffee.
            </p>
            <p>
              Everyone has read a review and thought: &ldquo;Get some perspective. Nobody
              died.&rdquo; But if you read enough reviews you&apos;ll realise that some people
              have decided Google Reviews is a platform for self-expression and comedy. Nobody
              has made a show out of it, until now.
            </p>
          </div>
          <PullQuote>
            45 minutes. One host. Two audience members, on stage for the whole show. Reviews on
            screen, and the big themes: gratitude, acknowledgement, frustration and
            everyone&apos;s desire to have a car park named after them.
          </PullQuote>
        </div>
      </section>

      {/* 02 The material */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <Marker n="02" label="The material" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            None of this is made up.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ReviewCard
              place="Singapore Charlie Costume Shop"
              reviewer="Renee"
              meta="4 reviews"
              stars={1}
              when="a week ago"
              body="It's a day of mourning"
            />
            <ReviewCard
              place="Wild Bakery"
              reviewer="Natasha Nicole"
              meta="1 review"
              stars={1}
              when="Perth"
              body="Please for the love of God bring back the extensive pizza range."
            />
            <ReviewCard
              place="Cairns Central Shopping Centre"
              reviewer="Ceiling Fan"
              meta="6 reviews · 1 photo"
              stars={5}
              when="a year ago"
              body="Came here for the grimace shake and lost my friend in the process it was an actual fever dream … after my first grimace shake I went back for more. But this was a mistake as when I got home I violently threw up everywhere."
            />
            <ReviewCard
              place="Heirisson Island"
              reviewer="Rémy Bailly"
              meta="1 review"
              stars={4}
              when="Perth"
              body="There are no hedgehogs on the island, which is not very pretty."
            />
          </div>
          <p className="text-center text-gray-500 italic mt-8 max-w-2xl mx-auto">
            Four out of an archive of roughly six hundred. All verbatim. All findable. Nothing is
            exaggerated because nothing needs to be.
          </p>
        </div>
      </section>

      {/* 03 Proof */}
      <section className="bg-dark-green">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <Marker n="03" label="Proof" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Here it is, working.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4 text-lg text-cream/90 leading-relaxed mb-8">
                <p>
                  Two minutes of the Cairns set, shot to camera. It&apos;s not the room, but it
                  gives you a sense of the style of humour.
                </p>
                <p>
                  Watch the last line. It&apos;s a callback to a review from ninety seconds
                  earlier, and it&apos;s the same mechanic the songs run on in the live show.
                </p>
              </div>
              <dl className="divide-y divide-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4 py-4">
                  <dt className="font-bold text-white">Performed</dt>
                  <dd className="text-cream/90">
                    Three times to rooms of 40–50. Laughs all the way through, all three.
                  </dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-4 py-4">
                  <dt className="font-bold text-white">Not yet</dt>
                  <dd className="text-cream/90">Filmed in front of a room.</dd>
                </div>
              </dl>
            </div>
            <div className="order-1 md:order-2 text-center">
              <ShowVideo />
              <p className="text-cream/70 mt-4 text-sm">Cairns set · 2:09 · sound on</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 The set list */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <Marker n="04" label="The set list" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
            This season plays Perth.
          </h2>
          <p className="text-lg text-foreground mb-8">
            The archive is national. Show content is local.
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8">
            {SET_LIST.map((item, i) => (
              <li key={item} className="text-lg text-foreground">
                <span className="font-mono text-blue-gray mr-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-lg text-foreground italic mb-8">
            Ordinary places, ridiculous reviews, and everybody knows exactly what we&apos;re
            talking about.
          </p>
          <PullQuote>
            Local material is local press. A national touring comic can&apos;t write this set,
            and a Perth journalist will be interested.
          </PullQuote>
        </div>
      </section>

      {/* 05 How it works */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <Marker n="05" label="How it works" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            Storytelling. 30 seconds at a time.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <ol className="space-y-5 mb-8">
                {[
                  'The audience and I read the reviews together. Two of them join me on stage at the top and stay there for the whole show.',
                  "The words and graphics go up on screen, and then we speculate together: what led up to this? How did everyone else react? What happened next?",
                  'Audience members can submit their own favourite reviews before the show.',
                  "The songs land as callbacks. By the time one arrives, the room already knows the review it's built on – the laugh is the payoff on a set-up planted twenty minutes earlier. In jokes are the best.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-lg text-foreground leading-relaxed">
                    <span className="font-mono text-orange font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ol>
              <PullQuote>Open to advice on how to tweak the format and joke set-ups.</PullQuote>
            </div>
            <div className="flex justify-center">
              <img
                src="/show/bret-clock.webp"
                alt="Bret Treasure pulling a comic, wide-eyed expression in front of an antique grandfather clock"
                className="rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 06 Why it sells */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <Marker n="06" label="Why it sells" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            The title does the selling.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <SpecBlock term="No explaining">
              Nobody needs the premise unpacked. They read the title and they&apos;re already in.
            </SpecBlock>
            <SpecBlock term="Bar-proof">
              The pitch survives being retold badly by a drunk person, which is the actual
              distribution mechanism of Fringe.
            </SpecBlock>
            <SpecBlock term="Broad audience">
              Appeals to all age groups. Fine for a conservative audience who find experimental
              theatre too experimental.
            </SpecBlock>
            <SpecBlock term="No ceiling">
              The material is infinitely renewable and regenerates for free, forever, written by
              strangers who have no idea they&apos;re contributing.
            </SpecBlock>
          </div>
          <PullQuote>
            Every other show at Fringe has to convince you it&apos;s funny. This one only has to
            show you what people actually wrote.
          </PullQuote>
        </div>
      </section>

      {/* 07 The plan */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <Marker n="07" label="The plan" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            The audience writes the show.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                TikTok is the primary channel, and the call to action isn&apos;t &ldquo;buy a
                ticket.&rdquo; It&apos;s <strong>send me a review for the show</strong> – and the{' '}
                <a
                  href="/contribute"
                  className="text-orange hover:text-dark-green underline font-semibold"
                >
                  submission page
                </a>{' '}
                is already live.
              </p>
              <ul className="space-y-3 text-lg text-foreground leading-relaxed mb-8 list-disc pl-5">
                <li>
                  Short clips of reviews read to camera – the same material that works in the
                  room, in the format the platform rewards.
                </li>
                <li>
                  Viewers submit reviews they&apos;ve found. The best ones go in the show,
                  credited from the stage.
                </li>
                <li>
                  A submission is a stake. People who contributed turn up, and they bring the
                  friend they argued with about it.
                </li>
                <li>
                  It feeds the archive and gives press a genuine angle: a comedy show partly
                  written by its own audience.
                </li>
              </ul>
              <PullQuote>
                Only works if it has reach. I&apos;ll fund a minimum $1000 on TikTok ads and work
                with a successful influencer.
              </PullQuote>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <ReviewCard
                place="Submitted by the audience"
                reviewer="Your name here"
                meta="Read aloud · Perth · February"
                stars={1}
                when="pending"
                body="The one you've been telling people about for years. Send it in and hear a room of strangers lose it."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 08 The bigger market */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <Marker n="08" label="The bigger market" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
            Fringe is the shopfront, not the business.
          </h2>
          <p className="text-lg text-foreground mb-8">
            A 45-minute self-contained show that needs a mic, a screen and no rigging is the
            easiest thing in the world to book.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-blue-gray mb-8">
            <dl className="divide-y divide-blue-gray/10">
              <SpecRow term="Corporate">
                Conference dinners, award nights, closing keynotes, end-of-year functions. This
                is where the fees are.
              </SpecRow>
              <SpecRow term="Rebuilds">
                Cairns, Sydney, Melbourne, Brisbane and Adelaide already exist as separate sets
                from the same machine. The show rewrites itself for whatever town booked it,
                which is what makes it a product rather than a one-off.
              </SpecRow>
            </dl>
          </div>
          <PullQuote>
            A Fringe season will add reviews, footage and a proven marketing funnel.
          </PullQuote>
        </div>
      </section>

      {/* 09 What already exists */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <Marker n="09" label="What already exists" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            Built, paid for, and done.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <SpecBlock term="The book">
              <em>Not Bad For A Car Park</em> – written, published, on sale.
            </SpecBlock>
            <SpecBlock term="The archive">
              Roughly 600 curated reviews, sorted and growing. Years of material.
            </SpecBlock>
            <SpecBlock term="Songs">
              Written, recorded and produced.{' '}
              <a href="/musical" className="text-orange hover:text-dark-green underline">
                The Bell Tower
              </a>
              ,{' '}
              <a href="/musical" className="text-orange hover:text-dark-green underline">
                Bring Back the Pizza
              </a>{' '}
              and{' '}
              <a href="/musical" className="text-orange hover:text-dark-green underline">
                Park at the Bret Treasure
              </a>
              .
            </SpecBlock>
            <SpecBlock term="Brand">
              Identity, website, cover art, social assets – all in hand, all mine.
            </SpecBlock>
            <SpecBlock term="Ebook">A free ebook running as a list-building mechanic.</SpecBlock>
            <SpecBlock term="The marketing">
              I run a marketing consultancy and can do copy, design, video and media outreach.
            </SpecBlock>
          </div>
          <PullQuote>
            What doesn&apos;t exist yet is an audience. The plan is to use TikTok but I&apos;d
            value a second opinion on the strategy and how to execute it.
          </PullQuote>
        </div>
      </section>

      {/* 10 Who's asking */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <Marker n="10" label="Who's asking" />
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center mb-8">
            <img
              src="/show/bret-presenting.webp"
              alt="Bret Treasure presenting on stage with a clicker in hand"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mx-auto"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                Bret Treasure
              </h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  Marketing consultant. Thirty years writing content and running campaigns for
                  small business and allied health.
                </p>
                <p>
                  The show has been performed three times, to rooms of 40 to 50, and it got
                  laughs the whole way through on all three.
                </p>
              </div>
            </div>
          </div>
          <PullQuote>
            I&apos;m not a seasoned performer though I&apos;ve done a lot of public speaking and
            some stand up. I&apos;m sure a good producer will add polish.
          </PullQuote>
        </div>
      </section>

      {/* 11 Where it's up to */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <Marker n="11" label="Where it's up to" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            Current status.
          </h2>
          <div className="bg-blue-gray/5 rounded-3xl p-8 md:p-12 border-l-8 border-blue-gray">
            <dl className="divide-y divide-blue-gray/10">
              <SpecRow term="Venue">
                The Backlot, West Perth – in negotiation. 13 performances × 50 seats.
              </SpecRow>
              <SpecRow term="Application">
                Concept statement and venue submission complete.
              </SpecRow>
              <SpecRow term="Tech">
                Spec finalised. Self-operated, 30-minute bump-in, no rigging, two power outlets.
              </SpecRow>
              <SpecRow term="Script">Developed but open to review.</SpecRow>
              <SpecRow term="Performed" bold={false}>
                Three times, to rooms of 40–50, the same size room I&apos;m negotiating for.
                Laughs throughout, every time. The structure holds at this scale.
              </SpecRow>
              <SpecRow term="Capture">
                To-camera video exists. Nothing filmed in front of a room yet; that&apos;s the
                gap; let&apos;s discuss.
              </SpecRow>
            </dl>
          </div>
        </div>
      </section>

      {/* 12 The numbers */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <Marker n="12" label="The numbers" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            Unromantic version.
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 border-l-8 border-orange mb-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-dark-green/20 text-sm uppercase tracking-wide text-blue-gray">
                  <th className="py-3 pr-4 font-semibold">Season sells</th>
                  <th className="py-3 pr-4 font-semibold">Tickets</th>
                  <th className="py-3 pr-4 font-semibold">Gross box office</th>
                  <th className="py-3 font-semibold">Avg house</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                <tr className="border-b border-blue-gray/10">
                  <td className="py-3 pr-4">30%</td>
                  <td className="py-3 pr-4">195</td>
                  <td className="py-3 pr-4">$4,875</td>
                  <td className="py-3">15</td>
                </tr>
                <tr className="border-b border-blue-gray/10 bg-orange/10 font-bold text-dark-green">
                  <td className="py-3 pr-4">45% · planning case</td>
                  <td className="py-3 pr-4">293</td>
                  <td className="py-3 pr-4">$7,313</td>
                  <td className="py-3">23</td>
                </tr>
                <tr className="border-b border-blue-gray/10">
                  <td className="py-3 pr-4">60%</td>
                  <td className="py-3 pr-4">390</td>
                  <td className="py-3 pr-4">$9,750</td>
                  <td className="py-3">30</td>
                </tr>
                <tr className="border-b border-blue-gray/10">
                  <td className="py-3 pr-4">80%</td>
                  <td className="py-3 pr-4">520</td>
                  <td className="py-3 pr-4">$13,000</td>
                  <td className="py-3">40</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Sold out</td>
                  <td className="py-3 pr-4">650</td>
                  <td className="py-3 pr-4">$16,250</td>
                  <td className="py-3">50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mb-8">
            Assumes 13 performances × 50 seats at $25, before Fringe ticketing commission, venue
            split, registration and marketing spend. Venue terms not yet finalised – these are
            capacity figures, not net returns, and I&apos;ll rebuild them the moment The Backlot
            deal is firm.
          </p>
          <PullQuote>
            At this scale a Fringe season doesn&apos;t pay for itself. It buys the assets that
            make a corporate product saleable. That&apos;s the actual return, and it lands in the
            twelve months after the season, not during it. A deal with a producer should include
            other gig revenue accrued in the subsequent 12 months.
          </PullQuote>
        </div>
      </section>

      {/* 13 The ask */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <Marker n="13" label="The ask" />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-10">
            What I&apos;m actually asking for.
          </h2>
          <ol className="space-y-6">
            {[
              [
                'Twenty minutes on the phone',
                "That's the only thing I'm asking for today. No preparation required at your end.",
              ],
              [
                'Then, if it holds up: production',
                "A director's eye on script, show structure, and the interactive mechanics. Season structuring.",
              ],
              [
                'And marketing muscle where mine runs out',
                "I can write and design anything. Comfortable doing media interviews. I don't have any industry relationships, festival press relationships or Fringe experience.",
              ],
              ['Terms', 'Ticket split and revenue split for a further 12 months.'],
            ].map(([term, desc], i) => (
              <li key={term} className="flex gap-4 text-lg text-foreground leading-relaxed">
                <span className="font-mono text-orange font-bold flex-shrink-0">{i + 1}</span>
                <span>
                  <strong className="text-dark-green">{term}</strong> – {desc}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 14 Over to you */}
      <section className="bg-gradient-to-br from-dark-green to-dark-green/90 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-2xl text-center">
          <Marker n="14" label="Over to you" />
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Twenty minutes.</h2>
          <p className="text-lg mb-1">Bret Treasure</p>
          <p className="text-cream/80 mb-1">treasure@freebeer.com.au</p>
          <p className="text-cream/80 mb-10">notbadforacarpark.com</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="/show"
              className="w-full sm:w-auto bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              The show page
            </a>
            <a
              href="/musical"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-2 border-white/40 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Hear the Bell Tower song
            </a>
            <a
              href="/contribute"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-2 border-white/40 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Submit a review
            </a>
          </div>
          <p className="font-mono text-xs tracking-widest uppercase text-cream/50">
            Not Bad For A Car Park · FRINGE WORLD 2027 · Producer proposal
          </p>
        </div>
      </section>
    </div>
  );
}
