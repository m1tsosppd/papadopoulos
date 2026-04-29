import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const grades = [
  {
    title: "Grade I (Mild sprain)",
    description: "Ligaments are slightly stretched, with no major structural damage.",
    symptoms: ["Mild pain", "Slight swelling", "Little or no bruising", "Minor loss of function"],
    treatment: ["Rest", "Ice application", "Elevation", "Light strengthening exercises"],
  },
  {
    title: "Grade II (Moderate sprain)",
    description: "Partial tear of the ligaments with some joint instability.",
    symptoms: [
      "Moderate pain",
      "Swelling and bruising",
      "Visible discoloration",
      "Difficulty walking or bearing weight",
    ],
    treatment: [
      "Rest and ice",
      "Elevation",
      "Use of crutches to avoid weight on the foot",
      "Physiotherapy after pain and swelling decrease",
    ],
  },
  {
    title: "Grade III (Severe sprain)",
    description: "Complete ligament tear with significant instability of the ankle.",
    symptoms: [
      "Severe pain",
      "Major swelling and bruising",
      "Inability to walk or bear weight",
    ],
    treatment: ["Immobilization", "Physiotherapy", "In some cases, surgical repair"],
  },
];

const recoveryTimes = [
  "Grade I: a few days to 2 weeks",
  "Grade II: 2–6 weeks",
  "Grade III: several weeks to months",
];

const rehab = [
  "Physiotherapy",
  "Balance and strengthening exercises",
  "Gradual return to activity",
];

const flatFeetPoints = [
  "At birth, all babies appear to have flat feet because the arch has not yet developed.",
  "Arches usually form when children are between 2 and 3 years old.",
  "Even in older children, flat feet usually do not cause any problems.",
  "Flat feet are caused by loose ligaments and fat between the bones of the foot during childhood.",
  "The arch may disappear when standing and reappear when sitting or when the big toe is pulled upward.",
];

const flatFeetWhenToCheck = [
  "If the child complains of pain in the ankle or feet",
  "If older children develop pain in the heel or in the arch of the foot",
  "If pain occurs while walking or running",
];

const flatFeetTreatment = [
  "Most children do not need special shoes or insoles",
  "Special shoes, insoles or heel supports may help when there is pain",
  "Activity does not need to be restricted unless it causes pain — then rest is the best treatment",
  "Shoe type, walking barefoot, running, exercise or jumping do not worsen or improve flat feet",
  "Surgery is rarely required, mainly when foot bones are fused and conservative care has failed",
];

export const Route = createFileRoute("/foot-ankle-conditions")({
  head: () => ({
    meta: [
      { title: "Foot & Ankle Conditions | Dr. Andreas Papadopoulos" },
      {
        name: "description",
        content:
          "Ankle sprains by grade, recovery, rehabilitation, and flat feet in children — clear patient information from an orthopedic surgeon.",
      },
      { property: "og:title", content: "Foot & Ankle Conditions | Dr. Andreas Papadopoulos" },
      {
        property: "og:description",
        content:
          "Patient guide to ankle sprain grades, treatment, recovery and flat feet in children.",
      },
    ],
  }),
  component: FootAnklePage,
});

function FootAnklePage() {
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
                Foot &amp; Ankle Conditions
              </span>
              <h1 className="mt-6 text-5xl leading-none font-semibold text-shell-foreground sm:text-6xl lg:text-7xl">
                Ankle Sprains &amp; Flat Feet in Children
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-shell-foreground/80 sm:text-lg">
                Clear, practical information on two of the most common foot and ankle concerns: ankle
                sprains by grade and the management of flat feet in children.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">Ankle Sprain</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              An ankle sprain is a common injury where the ligaments of the ankle are stretched or
              torn, usually due to twisting or rolling of the foot. It is one of the most frequent
              sports injuries worldwide and is classified into three grades depending on severity.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {grades.map((g) => (
                <div className="soft-card" key={g.title}>
                  <h3 className="text-xl font-semibold text-foreground">{g.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {g.description}
                  </p>
                  <h4 className="mt-5 text-base font-semibold text-foreground">Symptoms</h4>
                  <ul className="mt-3 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {g.symptoms.map((p) => (
                      <li className="flex gap-3" key={p}>
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="mt-5 text-base font-semibold text-foreground">Treatment</h4>
                  <ul className="mt-3 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {g.treatment.map((p) => (
                      <li className="flex gap-3" key={p}>
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">Recovery time</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {recoveryTimes.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">Rehabilitation</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {rehab.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              Proper treatment of ankle sprains is important to prevent chronic instability and
              repeated injuries.
            </p>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">Flat Feet in Children</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              Flat feet is an anatomical condition in which one or both feet do not have a normal arch.
              In most children it is a normal stage of development and causes no problems.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">What parents should know</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {flatFeetPoints.map((p) => (
                    <li className="flex gap-3" key={p}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">When to see a doctor</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {flatFeetWhenToCheck.map((p) => (
                    <li className="flex gap-3" key={p}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  The doctor will also examine the knee and the hip joint to make sure the pain is not
                  related to problems in those areas. X-rays or a clinical examination usually confirm
                  the diagnosis.
                </p>
              </div>
            </div>
            <div className="mt-6 soft-card">
              <h3 className="text-xl font-semibold text-foreground">Treatment</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                {flatFeetTreatment.map((p) => (
                  <li className="flex gap-3" key={p}>
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
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
