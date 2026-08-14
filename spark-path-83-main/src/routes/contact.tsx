import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import locationImg from "@/assets/location.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Edion Royal Guesthouse" },
      {
        name: "description",
        content:
          "Contact Edion Royal Guesthouse in Milnerton for bookings, airport transfers, or guesthouse inquiries.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="relative">
        <img
          src={locationImg}
          alt="Contact Edion Royal Guesthouse"
          loading="lazy"
          width={1600}
          height={900}
          className="h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-5 text-center text-background">
            <p className="text-xs uppercase tracking-[0.28em] text-background/80">
              Contact us
            </p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
              GET IN TOUCH WITH EDION ROYAL GUESTHOUSE
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-background/80 sm:text-base">
              Send us your enquiry and we’ll get back to you quickly.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary/50 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground sm:text-lg">
            Whether you need a booking, directions, or more information, our team is ready to answer your questions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-5">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl uppercase font-semibold text-foreground">GUESTHOUSE DETAILS</h2>
            <div className="mt-8 space-y-6 text-sm text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Arum Street, Milnerton</p>
                  <p>Near Milnerton Beach, Cape Town</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">078 972 4254</p>
                  <p>Call or WhatsApp us anytime.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">info@edionroyal.co.za</p>
                  <p>Send us a message and we’ll reply quickly.</p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl uppercase font-semibold text-foreground">SEND A MESSAGE</h2>
            <div className="mt-8 space-y-4 text-sm">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Message</span>
                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Submit enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
