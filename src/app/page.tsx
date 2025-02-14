import Image from "next/image";
import { Heart } from "lucide-react";

const memories = [
  {
    id: 1,
    src: "/1.jpg",
    alt: "Our first date",
  },
  {
    id: 2,
    src: "/2.jpg",
    alt: "Our trip to Paris",
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Our anniversary dinner",
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "Hiking adventure",
  },
];

const milestones = [
  { date: "May 29, 2010", event: "The day we chat? lol" },
  { date: "Jan 12, 2019", event: "Got married!" },
];

export default function ValentinesDay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-700 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/r.jpg"
          alt="Romantic background"
          layout="fill"
          objectFit="contain"
          className="opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-4">My Dearest Hon</h1>
          <Heart className="inline-block text-pink-300 w-16 h-16 animate-pulse" />
        </header>

        <main>
          {/* <section className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-semibold mb-4">Our Love Story</h2>
            <p className="text-xl leading-relaxed">
            </p>
          </section> */}

          <section className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-semibold mb-4">Our Milestones</h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-4 h-4 rounded-full bg-pink-300"></div>
                  <div>
                    <h3 className="font-semibold">{milestone.date}</h3>
                    <p>{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-semibold mb-4">Our Memories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {memories.map(memory => (
                <div
                  key={memory.id}
                  className="relative h-40 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={memory.src || "/placeholder.svg"}
                    alt={memory.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-semibold mb-4">A Poem for You</h2>
            <p className="text-xl italic">
              In your eyes, I see my world,
              <br />
              In your smile, my heart unfurled.
              <br />
              With every touch, my soul ignites,
              <br />
              Our love, a flame that burns so bright.
              <br />
              Hon, my love, my guiding star,
              <br />I love you near, I love you far.
            </p>
          </section>
        </main>

        <footer className="text-center animate-fade-in">
          <p className="text-2xl font-semibold">Happy Valentine's Day, Hon!</p>
          <p className="mt-2">I love you more than words can express.</p>
          <Heart className="inline-block text-pink-300 w-8 h-8 mt-4 animate-bounce" />
        </footer>
      </div>
    </div>
  );
}
