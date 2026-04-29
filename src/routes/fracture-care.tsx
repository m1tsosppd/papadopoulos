import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const fractureTypes = [
  { title: "Closed fracture", desc: "The bone is broken but the skin is not damaged." },
  { title: "Open fracture", desc: "The bone breaks through the skin (more serious)." },
  { title: "Comminuted fracture", desc: "The bone is shattered into several pieces." },
  { title: "Stress fracture", desc: "Small cracks caused by repeated overuse." },
];

const symptoms = [
  "Severe pain",
  "Swelling",
  "Bruising",
  "Inability to move the affected area",
  "Visible deformity (in some cases)",
];

const firstAid = [
  "Immobilize the injured area",
  "Apply ice to reduce swelling",
  "Keep the limb elevated",
  "Use pain relief if needed",
];

const evaluation = ["X-rays", "CT scans or MRI (in complex cases)", "Physical examination"];

const conservative = [
  "Cast (plaster) or splint",
  "Immobilization for several weeks",
  "Gradual healing and monitoring",
];

const surgical = [
  "Plates, screws, or rods (internal fixation)",
  "Used for severe or displaced fractures",
  "Restores proper bone alignment",
];

const recoveryFactors = ["Age", "Type of fracture", "Location of the bone"];

const recoveryIncludes = [
  "Physiotherapy",
  "Gradual return to movement",
  "Strength and mobility exercises",
];

const complications = [
  "Infection (especially open fractures)",
  "Delayed healing",
  "Stiffness",
  "Improper bone healing (malunion)",
];

export const Route = createFileRoute("/fracture-care")({
  head: () => ({
    meta: [
      { title: "Fracture Care | Dr. Andreas Papadopoulos" },
      {
        name: "description",
        content:
          "Bone fracture treatment: types, symptoms, first aid, conservative and surgical care, recovery, and possible complications.",
      },
      { property: "og:title", content: "Fracture Care | Dr. Andreas Papadopoulos" },
      {
        property: "og:description",
        content:
          "Comprehensive guide to fracture care: closed, open, comminuted and stress fractures, treatment and recovery.",
      },
    ],
  }),
  component: FractureCarePage,
});

function FractureCarePage() {
  return (
    <main className="page-shell">
      <section className="section-dark">
        <div className="section-shell">
          <div className="hero-frame px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-shell-foreground/80" to="/">
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
            <div className="mt-8 max-w-4xl">
              <span className="eyebrow w-fit">
                <ShieldCheck className="size-4" />
                Fracture Care
              </span>
              <h1 className="mt-6 text-5xl leading-none font-semibold text-shell-foreground sm:text-6xl lg:text-7xl">
                Bone Fracture Treatment
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-shell-foreground/80 sm:text-lg">
                A fracture is a break or crack in a bone, usually caused by falls, accidents or trauma,
                sports injuries, or strong impact and repetitive stress. Proper care ensures the bone
                heals correctly, safely, and with full restoration of function.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">Types of fractures</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {fractureTypes.map((t) => (
                <div className="soft-card" key={t.title}>
                  <h3 className="text-xl font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{t.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">Symptoms</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {symptoms.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">First aid / immediate care</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {firstAid.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">Medical evaluation</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {evaluation.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">Conservative treatment</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {conservative.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">Surgical treatment</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {surgical.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">Recovery</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Healing time depends on</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {recoveryFactors.map((p) => (
                    <li className="flex gap-3" key={p}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Recovery usually includes</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {recoveryIncludes.map((p) => (
                    <li className="flex gap-3" key={p}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">Possible complications (rare)</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2 sm:text-base">
              {complications.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="default">
                <a href="/#contact">Book a Consultation</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/">Return to Homepage</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
