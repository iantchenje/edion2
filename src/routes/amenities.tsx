import { createFileRoute } from "@tanstack/react-router";
import {
  Wifi,
  Car,
  Plane,
  Clock,
  Sparkles,
  UtensilsCrossed,
  Flame,
  Shirt,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import locationImg from "@/assets/location.jpg";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities | Edion Royal Guesthouse" },
      {
        name: "description",
        content:
          "Explore our guesthouse amenities: free WiFi, secure parking, shared kitchen and daily housekeeping in Milnerton.",
      },
    ],
  }),
  component: Amenities,
});

const amenities = [
  { icon: Wifi, title: "Free high-speed WiFi", description: "Reliable connection for work and streaming." },
  { icon: Car, title: "Secure parking", description: "Off-street parking behind a gated entrance." },
  { icon: Plane, title: "Airport shuttle", description: "Convenient pickup service available on request." },
  { icon: Clock, title: "24-hour reception", description: "Late arrivals are welcome and assisted." },
  { icon: UtensilsCrossed, title: "Shared kitchen", description: "Fully equipped kitchen for self-catering stays." },
  { icon: Flame, title: "Braai facilities", description: "Outdoor barbecue area for relaxed dinners." },
  { icon: Sparkles, title: "Daily housekeeping", description: "Fresh towels and linen every day." },
  
  { icon: ShieldCheck, title: "24/7 security", description: "Gated property with secure on-site monitoring." },
];

function Amenities() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative">
        <img
          src={locationImg}
          alt="Amenities at Edion Royal Guesthouse"
          loading="lazy"
          width={1600}
          height={900}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-5 text-center text-background">
            <p className="text-xs uppercase tracking-[0.28em] text-background/80">
              Amenities
            </p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
              ALL THE COMFORTS YOU NEED
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-background/80 sm:text-base">
              Discover guesthouse amenities that make your Cape Town stay easier.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-accent-foreground/70">
            Amenities
          </p>
          <h1 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
            EVERYTHING YOU NEED FOR A CALM CAPE TOWN STAY
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground sm:text-lg">
            From fast WiFi to a shared kitchen and secure parking, our guesthouse is designed to keep your stay comfortable and easy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-soft)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl uppercase font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
