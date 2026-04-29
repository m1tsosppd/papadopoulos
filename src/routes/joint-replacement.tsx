import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const procedureSteps = [
  {
    title: "Anesthesia",
    points: ["Either general or regional (spinal) anesthesia is used, depending on the patient."],
  },
  {
    title: "Knee mapping",
    points: [
      "Special sensors are placed on the knee",
      "A robotic system creates a 3D map of the joint, including alignment and movement of the whole leg",
    ],
  },
  {
    title: "Surgical planning",
    points: ["Software calculates exactly how much bone must be removed."],
  },
  {
    title: "Robotic assistance",
    points: [
      "The surgeon uses a robotic arm to perform very precise bone cuts",
      "Artificial implants are then placed exactly according to the plan",
    ],
  },
];

const afterSurgery = [
  "Patient goes to recovery room, then hospital room",
  "Usually starts walking within a few hours",
  "Full weight-bearing is often allowed early",
];

const recovery = [
  "Structured physiotherapy program",
  "Return to normal daily activities in about 15–20 days (basic activities)",
  "Full recovery continues over a longer period depending on the patient",
];

const advantages = [
  "Very high precision in implant placement",
  "Better alignment of the knee joint",
  "Less blood loss",
  "Reduced postoperative pain",
  "Faster recovery",
  "Lower risk of complications",
  "Improved joint function and mobility",
];

export const Route = createFileRoute("/joint-replacement")({
  head: () => ({
    meta: [
      { title: "Robotic Knee Arthroplasty | Dr. Andreas Papadopoulos" },
      {
        name: "description",
        content:
          "Robotic total knee replacement combines proven joint replacement surgery with advanced robotic precision for severe osteoarthritis and degenerative knee disease.",
      },
      { property: "og:title", content: "Robotic Knee Arthroplasty | Dr. Andreas Papadopoulos" },
      {
        property: "og:description",
        content:
          "How robotic knee replacement works, recovery timeline, and the advantages of robotic-assisted joint surgery.",
      },
    ],
  }),
  component: JointReplacementPage,
});

function JointReplacementPage() {
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
                Joint Replacement
              </span>
              <h1 className="mt-6 text-5xl leading-none font-semibold text-shell-foreground sm:text-6xl lg:text-7xl">
                Robotic Knee Arthroplasty
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-shell-foreground/80 sm:text-lg">
                Robotic total knee replacement is a modern surgical technique used mainly to treat
                severe osteoarthritis and other degenerative knee conditions. It combines traditional
                knee replacement surgery with advanced robotic technology for higher precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">How the procedure works</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {procedureSteps.map((step) => (
                <div className="soft-card" key={step.title}>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {step.points.map((p) => (
                      <li className="flex gap-3" key={p}>
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              <span className="font-semibold text-foreground">Duration:</span> about 90 minutes.
            </p>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">After surgery</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {afterSurgery.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl font-semibold text-foreground">Recovery</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {recovery.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl font-semibold text-foreground">Advantages of robotic surgery</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2 sm:text-base">
              {advantages.map((p) => (
                <li className="flex gap-3" key={p}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              <span className="font-semibold text-foreground">Key idea:</span> Robotic knee replacement
              helps surgeons perform the operation more accurately and consistently, which often leads
              to better long-term results and quicker recovery.
            </p>
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
