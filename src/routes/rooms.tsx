import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";

import roomDouble from "@/assets/room-double.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import roomBudgetDouble from "@/assets/room-budget-double.jpg";
import roomComfortTriple from "@/assets/room-comfort-triple.jpg";
import roomFamily from "@/assets/room-family.jpg";
import heroRooms from "@/assets/hero-rooms.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms | Edion Royal Guesthouse" },
      {
        name: "description",
        content:
          "Explore our renovated en-suite rooms with private bathrooms, kitchenettes, fast WiFi and secure parking in Milnerton, Cape Town.",
      },
    ],
  }),
  component: Rooms,
});

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
  {
    name: "Triple Room",
    image: roomComfortTriple, // temporary until you add room-triple.jpg
    sleeps: "3 guests",
    blurb:
      "A spacious room with a large double bed, bathroom, and reliable WiFi. Great value with flexible cancellation.",
    features: ["Private bathroom", "Flat-screen TV", "Free WiFi", "Flexible cancellation"],
  },
  {
    name: "Budget Double Room",
    image: roomBudgetDouble,
    sleeps: "2 guests",
    blurb:
      "A compact, affordable room with a large double bed, private bathroom, and all standard amenities.",
    features: ["Private bathroom", "Flat-screen TV", "Free WiFi", "Budget-friendly"],
  },
  {
    name: "Comfort Triple Room with Shower",
    image: roomComfortTriple,
    sleeps: "3 guests",
    blurb:
      "Comfortable triple room with shower, ideal for guests who want a little extra room and convenience.",
    features: ["Private bathroom", "Shower", "Flat-screen TV", "Free WiFi"],
  },
  {
    name: "Budget Triple Room",
    image: roomComfortTriple, // temporary until you add room-budget-triple.jpg
    sleeps: "3 guests",
    blurb:
      "A larger triple room with a single bed and an extra-large double bed, perfect for a small group.",
    features: ["Private bathroom", "Flat-screen TV", "Free WiFi", "Extra-large bed"],
  },
  {
    name: "Family Room",
    image: roomFamily,
    sleeps: "3–4 guests",
    blurb:
      "Family-friendly room with a single bed and a double bed, offering comfort and extra space.",
    features: ["Private bathroom", "Flat-screen TV", "Free WiFi", "Family layout"],
  },
];

function Rooms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative">
        <img
          src={heroRooms}
          alt="Edion Royal Guesthouse Rooms"
          loading="lazy"
          width={1600}
          height={900}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-5 text-center text-background">
            <p className="text-xs uppercase tracking-[0.28em] text-background/80">
              Rooms
            </p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
              RENOVATED EN-SUITE ROOMS
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-background/80 sm:text-base">
              Choose the room type that suits your stay in Milnerton.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground sm:text-lg">
            Discover our comfortable, secure accommodation in Milnerton. Each room has been
            updated with modern amenities so your Cape Town stay is relaxed and easy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              <img
                src={room.image}
                alt={room.name}
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full object-cover"
              />
              <div className="p-7 text-center">
                <div className="mb-4 flex flex-col items-center justify-center gap-2">
                  <h2 className="font-display text-2xl uppercase">{room.name}</h2>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {room.sleeps}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{room.blurb}</p>
                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm font-semibold text-primary underline underline-offset-4"
                >
                  Enquire about this room
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
