import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Wifi,
  Car,
  Plane,
  Flame,
  Clock,
  Sparkles,
  Shirt,
  UtensilsCrossed,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Star,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import heroImg from "@/assets/hero.jpg";
import hero2Img from "@/assets/hero2.jpg";
import hero3Img from "@/assets/hero3.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import locationImg from "@/assets/location.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edion Royal Guesthouse | Milnerton, Cape Town Accommodation" },
      {
        name: "description",
        content:
          "Recently renovated en-suite rooms in Milnerton, Cape Town. Free WiFi & parking, 24-hour reception,  and Milnerton Beach 1.8 km away.",
      },
      { property: "og:title", content: "Edion Royal Guesthouse | Cape Town" },
      {
        property: "og:description",
        content:
          "Comfortable, secure guesthouse rooms in Milnerton, Cape Town — free WiFi, free parking, shared kitchen and 24-hour front desk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const amenities = [
  { icon: Wifi, label: "Free high-speed WiFi", note: "Rated 8.8 by guests" },
  { icon: Car, label: "Free secure parking", note: "On-site, off-street" },
  { icon: Plane, label: "Airport shuttle", note: "Paid, on request" },
  { icon: Clock, label: "24-hour front desk", note: "Late arrivals welcome" },
  { icon: UtensilsCrossed, label: "Shared kitchen", note: "Fully equipped" },
  { icon: Flame, label: "Braai facilities", note: "Outdoor BBQ area" },
  { icon: Sparkles, label: "Daily housekeeping", note: "Fresh linen & towels" },
  
  { icon: ShieldCheck, label: "Full-day security", note: "Gated property" },
];

const rooms = [
  {
    name: "Renovated Double Room",
    image: roomDouble,
    sleeps: "2 guests",
    blurb:
      "A calm, recently renovated room with a private en-suite bathroom, work desk, flat-screen TV and a dressing area.",
    features: ["Private bathroom", "Work desk", "Flat-screen TV", "Wardrobe"],
  },
  {
    name: "Twin Room with Kitchenette",
    image: roomTwin,
    sleeps: "2 guests",
    blurb:
      "Ideal for longer stays and colleagues travelling together — two beds plus a fridge, microwave and full kitchenware set.",
    features: ["Fridge & microwave", "Kitchenware", "Private bathroom", "Free WiFi"],
  },
];

const distances = [
  { place: "Milnerton Beach", km: "1.8 km" },
  { place: "Century City / Canal Walk", km: "7 km" },
  { place: "CTICC Convention Centre", km: "10 km" },
  { place: "Robben Island Ferry", km: "11 km" },
  { place: "V&A Waterfront", km: "13 km" },
  { place: "Cape Town International Airport", km: "18 km" },
];

const reviews = [
  {
    text: "Excellent location — an easy drive to the Waterfront and a short walk to the beachfront. The room was clean and the bed comfortable.",
    name: "Thandi M.",
    origin: "Johannesburg",
  },
  {
    text: "Great value for money. Reception was helpful at all hours and the parking behind the gate gave us real peace of mind.",
    name: "Daniel K.",
    origin: "United Kingdom",
  },
  {
    text: "The kitchenette made our week-long stay so much easier. Quiet street, friendly hosts and strong WiFi for remote work.",
    name: "Lerato S.",
    origin: "Pretoria",
  },
];

const scores = [
  { label: "Location", value: "8.8" },
  { label: "Free WiFi", value: "8.8" },
  { label: "Cleanliness", value: "7.7" },
  { label: "Value", value: "7.6" },
];

const heroSlides = [heroImg, hero2Img, hero3Img];

function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroIndex((current: number) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="relative">
        <img
          src={heroSlides[heroIndex]}
          alt={`Edion Royal Guesthouse hero image ${heroIndex + 1} of ${heroSlides.length}`}
          width={1600}
          height={1008}
          className="h-[78vh] min-h-[460px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-background ring-1 ring-background/30">
              <MapPin className="size-3.5" /> Milnerton · Cape Town
            </p>
            <h1 className="mx-auto max-w-3xl text-center font-display text-4xl font-bold uppercase leading-[1.05] text-background sm:text-6xl md:text-7xl">
              A WARM, QUIET STAY A FEW MINUTES FROM THE SEA
            </h1>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="#contact"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Check availability
              </a>
              <a
                href="/rooms"
                className="rounded-full border border-background/50 px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
              >
                View our rooms
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Score strip */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4">
          {scores.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-primary">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.28em] text-accent-foreground/70">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">
              COMFORTABLE, SECURE ACCOMMODATION IN THE HEART OF MILNERTON
            </h2>
            <p className="mt-5 text-muted-foreground">
              Edion Royal Guesthouse is a family-run home away from home on Arum Street,
              Milnerton. Every room has been recently renovated and comes with its own
              private bathroom, fridge, microwave, work desk and flat-screen TV — whether
              you are here for a week of meetings or a Cape Town summer holiday.
            </p>
            <p className="mt-4 text-muted-foreground">
              Guests have full use of the shared kitchen, lounge and braai area, while
              daily housekeeping and a 24-hour reception keep everything simple
              from arrival to check-out.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-secondary/50 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-accent-foreground/70">
            Our rooms
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">
            RENOVATED EN-SUITE ROOMS FOR EVERY KIND OF STAY
          </h2>
          <a
            href="/rooms"
            className="group mx-auto mt-10 block max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={roomDouble}
                alt="Renovated Double Room"
                loading="lazy"
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-primary/90">
                  Our rooms
                </p>
                <h2 className="mt-3 font-display text-3xl uppercase text-primary sm:text-4xl">
                  VIEW MORE ROOMS
                </h2>
                <span className="mt-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors group-hover:bg-primary/15">
                  Room details
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="mx-auto max-w-6xl px-5 py-10">
        <a href="/amenities" className="group block overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
          <div className="relative">
            <img
              src={locationImg}
              alt="Guesthouse amenities available"
              loading="lazy"
              width={1600}
              height={900}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-primary/90">
                Amenities available
              </p>
              <h2 className="mt-3 font-display text-3xl uppercase text-primary sm:text-4xl">
                See what’s included
              </h2>
              <span className="mt-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/15">
                View Amenities
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* Location */}
      <section id="location" className="bg-secondary/50 py-10">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <img
            src={locationImg}
            alt="Milnerton beachfront with Table Mountain across the bay at sunset"
            loading="lazy"
            width={1400}
            height={900}
            className="rounded-2xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-accent-foreground/70">
              Location
            </p>
            <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">
              TABLE MOUNTAIN VIEWS, MINUTES FROM YOUR DOOR
            </h2>
            <p className="mt-4 text-muted-foreground">
              Milnerton is one of Cape Town&apos;s best-kept secrets — a long, quiet
              beachfront looking straight across Table Bay at Table Mountain, with the
              city centre a 15-minute drive along the R27.
            </p>
            <ul className="mt-7 space-y-3">
              {distances.map((d) => (
                <li
                  key={d.place}
                  className="flex justify-between border-b border-border pb-2 text-sm"
                >
                  <span className="text-muted-foreground">{d.place}</span>
                  <span className="font-medium">{d.km}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-accent-foreground/70">
          Guest reviews
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">WHAT OUR GUESTS SAY</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium">
                {r.name}
                <span className="block text-xs font-normal text-muted-foreground">
                  {r.origin}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase sm:text-4xl">BOOK YOUR STAY</h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Send us your dates and we&apos;ll confirm availability and the best direct
              rate. Group, corporate and long-stay enquiries are always welcome.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <MapPin className="size-4" /> 7 Arum Street, Milnerton, Cape Town, 7441
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4" /> +27 (0)21 000 0000
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4" /> stay@edionroyal.co.za
              </p>
            </div>
          </div>

          <form
            className="rounded-2xl bg-background p-7 text-foreground"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              <label className="text-sm">
                Full name
                <input
                  required
                  className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="text-sm">
                Email
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm">
                  Check-in
                  <input
                    type="date"
                    className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="text-sm">
                  Check-out
                  <input
                    type="date"
                    className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
              </div>
              <label className="text-sm">
                Message
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 text-sm text-muted-foreground md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()} Edion Royal Guesthouse, Milnerton, Cape Town.</p>
            <p>Free WiFi · Free parking · 24-hour reception</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26500.59844785732!2d18.48272681236268!3d-33.87484724267588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f0a475dfeb7%3A0x9052928bc809e180!2sEdion%20Royal%20Guesthouse!5e0!3m2!1sen!2sza!4v1786396778851!5m2!1sen!2sza"
              width="600"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Edion Royal Guesthouse footer map"
              className="h-[250px] w-full"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
