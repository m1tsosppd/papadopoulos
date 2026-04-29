import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const causes = [
  "Usually caused by sudden twisting movements, often during sports or injury",
  "More common in individuals over 30 due to natural degeneration",
  "In younger patients, typically related to trauma",
  "Can also occur from wear-and-tear conditions like osteoarthritis, even without injury",
];

const treatmentOptions = [
  "Rest, ice, compression, elevation (RICE)",
  "Ice application every 3–4 hours during the first days",
  "Anti-inflammatory medication such as ibuprofen",
  "These measures often allow a gradual return to normal activity",
];

const risks = [
  "Infection",
  "Nerve or vessel injury",
  "Stiffness or instability",
  "Persistent pain or need for further surgery",
  "Not all tears are repairable, especially in cases of advanced degeneration",
];

const preparation = [
  "Blood tests, imaging (X-ray, MRI), and ECG",
  "Prescription medications ready in advance",
  "Crutches and instructions for use",
  "No food or drink after midnight before surgery",
];

const rehabilitation = [
  "Restore muscle control and mobility",
  "Strengthening and flexibility",
  "Return to normal daily activities",
  "In some cases, physiotherapy alone may be an alternative to surgery",
];

export const Route = createFileRoute("/knee-surgery")({
  head: () => ({
    meta: [
      { title: "Knee Surgery | Dr. Andreas Papadopoulos" },
      {
        name: "description",
        content:
          "Learn about meniscus tears, treatment options, arthroscopic knee surgery, recovery, rehabilitation, and follow-up care with Dr. Andreas Papadopoulos.",
      },
      { property: "og:title", content: "Knee Surgery | Dr. Andreas Papadopoulos" },
      {
        property: "og:description",
        content:
          "Website-ready information on meniscus tears, surgical options, preparation, recovery time, rehabilitation, and follow-up.",
      },
      { name: "twitter:title", content: "Knee Surgery | Dr. Andreas Papadopoulos" },
      {
        name: "twitter:description",
        content:
          "Clear patient information on meniscus tears, arthroscopic surgery, recovery phases, and follow-up care.",
      },
    ],
    links: [{ rel: "canonical", href: "https://id-preview--a89fdb1f-ce99-4b8d-9c1e-f9952f18729f.lovable.app/knee-surgery" }],
  }),
  component: KneeSurgeryPage,
});

function KneeSurgeryPage() {
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
                Knee Surgery
              </span>
              <h1 className="mt-6 text-5xl leading-none font-semibold text-shell-foreground sm:text-6xl lg:text-7xl">
                Meniscus Tear
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-shell-foreground/80 sm:text-lg">
                A meniscus tear is a rupture of the cartilage located between the femur and tibia in the
                knee. The menisci provide stability, absorb shock, help distribute body weight, support
                joint nutrition, and protect against degenerative arthritis when healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Causes</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {causes.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Treatment Options</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Initial conservative treatment focuses on reducing pain and inflammation.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {treatmentOptions.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Surgical Treatment</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              Arthroscopic surgery is recommended in cases of persistent pain or mechanical symptoms.
              Treatment may involve repair of the meniscus when possible or partial meniscectomy with
              removal of damaged tissue.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Pain relief",
                "Improved mobility",
                "Prevention of further joint damage",
              ].map((item) => (
                <div className="soft-card flex items-center gap-3" key={item}>
                  <CheckCircle2 className="size-5 text-highlight" />
                  <span className="text-sm font-semibold text-foreground sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Risks</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {risks.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Preparation for Surgery</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {preparation.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">The Procedure</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Arthroscopic meniscus surgery typically lasts about 1 hour. Depending on the tear, the
              meniscus is repaired with sutures when possible or partially removed. Only about 10% of
              tears are suitable for full repair.
            </p>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">After Surgery</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {[
                "Same-day discharge in most cases",
                "Use of crutches initially",
                "Ice and compression to reduce swelling",
                "Pain medication as prescribed",
                "Contact your doctor if you experience fever, excessive swelling, or unusual pain",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Recovery</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Initial recovery takes about 2 weeks, with physiotherapy typically performed 3 times per
              week. Full return to activity usually takes around 2 to 6 weeks depending on treatment
              type, while meniscus repair may require a longer recovery period.
            </p>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Rehabilitation</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {rehabilitation.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Follow-Up</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              The first post-operative visit usually takes place 9 to 14 days after surgery, with
              additional follow-ups scheduled depending on recovery progress.
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