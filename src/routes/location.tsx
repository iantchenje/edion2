import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import locationImg from "@/assets/location.jpg";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location | Edion Royal Guesthouse" },
      {
        name: "description",
        content:
          "Find Edion Royal Guesthouse on Arum Street in Milnerton, Cape Town. See our exact location and directions in the embedded map.",
      },
    ],
  }),
  component: Location,
});

function Location() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative">
        <img
          src={locationImg}
          alt="Location of Edion Royal Guesthouse"
          loading="lazy"
          width={1600}
          height={900}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-5 text-center text-background">
            <p className="text-xs uppercase tracking-[0.28em] text-background/80">
              Location
            </p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
              ARUM STREET, MILNERTON
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-background/80 sm:text-base">
              Find us minutes from Milnerton Beach and close to Cape Town’s city centre.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary/50 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground sm:text-lg">
            Find us right off the R27, just minutes from the beachfront and a short drive from Cape Town city centre.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl uppercase font-semibold text-foreground">OUR ADDRESS</h2>
            <p className="mt-4 text-muted-foreground">
              7 Arum Street, Milnerton, Cape Town, 7441
            </p>
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <p>
                Arum Street is a quiet residential road close to Milnerton Beach. The guesthouse is easy to reach from the R27 and has secure on-site parking.
              </p>
              <p>
                Cape Town city centre is about 15 minutes away by car. The airport is roughly 20 minutes from the guesthouse.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26500.59844785732!2d18.48272681236268!3d-33.87484724267588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f0a475dfeb7%3A0x9052928bc809e180!2sEdion%20Royal%20Guesthouse!5e0!3m2!1sen!2sza!4v1786396778851!5m2!1sen!2sza"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Edion Royal Guesthouse location map"
              className="h-[450px] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
