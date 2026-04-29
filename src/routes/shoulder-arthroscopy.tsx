import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const causes = [
  "Repetitive overhead activities such as sports and manual work",
  "Daily activities including lifting, reaching, and washing",
  "Acute injury or trauma",
  "Degenerative wear over time",
];

const symptoms = [
  "Dull, aching pain in the shoulder and upper arm",
  "Pain radiating down the outer arm",
  "Night pain that may disturb sleep",
  "Pain when lifting the arm or reaching behind the back",
  "Weakness or reduced range of motion",
  "Clicking sensation during overhead movement",
];

const diagnosis = [
  "Detailed medical history",
  "Clinical examination",
  "X-rays to detect bone spurs",
  "MRI to assess tendons, inflammation, or tears",
];

const conservativeTreatment = [
  "Activity modification to avoid overhead movements",
  "Ice therapy",
  "Anti-inflammatory medication",
  "Stretching and strengthening exercises",
  "Corticosteroid injections for pain relief when needed",
  "Physiotherapy",
  "Heat therapy, ultrasound, and therapeutic massage",
];

const surgeryGoals = [
  "Remove bone spurs (acromioplasty)",
  "Remove inflamed bursa (bursectomy)",
  "Repair damaged tendons when tears are present",
];

const indications = [
  "Rotator cuff tears",
  "Shoulder instability or dislocations",
  "Labral injuries (SLAP lesions)",
  "Biceps tendon pathology",
  "Frozen shoulder",
  "Arthritis or cartilage damage",
  "Subacromial impingement syndrome",
];

const rehabilitationPhases = [
  "Passive motion",
  "Assisted active motion",
  "Full active movement",
  "Strengthening exercises",
];

const risks = ["Infection", "Stiffness", "Incomplete recovery"];

export const Route = createFileRoute("/shoulder-arthroscopy")({
  head: () => ({
    meta: [
      { title: "Shoulder Arthroscopy | Dr. Andreas Papadopoulos" },
      {
        name: "description",
        content:
          "Learn about painful shoulder symptoms, subacromial impingement syndrome, conservative treatment, shoulder arthroscopy, recovery, and rehabilitation.",
      },
      { property: "og:title", content: "Shoulder Arthroscopy | Dr. Andreas Papadopoulos" },
      {
        property: "og:description",
        content:
          "Clear patient information on subacromial impingement syndrome, shoulder arthroscopy indications, treatment options, and recovery phases.",
      },
      { name: "twitter:title", content: "Shoulder Arthroscopy | Dr. Andreas Papadopoulos" },
      {
        name: "twitter:description",
        content:
          "Website-ready shoulder arthroscopy information covering diagnosis, treatment, surgery goals, and rehabilitation.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://id-preview--a89fdb1f-ce99-4b8d-9c1e-f9952f18729f.lovable.app/shoulder-arthroscopy",
      },
    ],
  }),
  component: ShoulderArthroscopyPage,
});

function ShoulderArthroscopyPage() {
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
                Shoulder Arthroscopy
              </span>
              <h1 className="mt-6 text-5xl leading-none font-semibold text-shell-foreground sm:text-6xl lg:text-7xl">
                Painful Shoulder – Subacromial Impingement Syndrome
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-shell-foreground/80 sm:text-lg">
                Subacromial impingement syndrome is one of the most common causes of shoulder pain. It
                involves inflammation of the rotator cuff tendons and the subacromial bursa, while
                repetitive friction may lead to irritation, inflammation, and in some cases tendon tears.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">About the Condition</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              The rotator cuff is a group of four muscles and tendons that stabilize the shoulder and
              control arm movement. Together with the deltoid muscle, these structures allow smooth and
              powerful motion. Over time, repetitive movements above shoulder level can increase friction
              between the tendons and the bones of the shoulder.
            </p>
          </article>

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
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Symptoms</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {symptoms.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Diagnosis</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">Diagnosis is based on:</p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {diagnosis.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Conservative Treatment</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Initial treatment is non-surgical and aims to reduce pain, inflammation, and irritation.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {conservativeTreatment.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Recovery time is usually 2–4 weeks in mild early cases, but may extend to several months in
              chronic or recurrent cases.
            </p>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Surgical Treatment</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              If symptoms persist despite conservative treatment, shoulder arthroscopy may be recommended.
              This minimally invasive procedure is performed through small incisions of 5–10 mm using a
              camera and specialized instruments.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {surgeryGoals.map((item) => (
                <div className="soft-card flex items-center gap-3" key={item}>
                  <CheckCircle2 className="size-5 text-highlight" />
                  <span className="text-sm font-semibold text-foreground sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Indications</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {indications.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Procedure</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {[
                "Duration: 60–120 minutes",
                "Performed under combined regional and light general anesthesia",
                "The surgeon inserts a camera into the joint and repairs damage using specialized tools",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">After Surgery</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {[
                "Hospital stay is usually less than 24 hours",
                "Minimal pain due to regional anesthesia",
                "Early mobilization and light activity",
                "Mild pain medication is typically sufficient",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Recovery &amp; Rehabilitation</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Return to daily activities usually takes 6–12 weeks. Full recovery may be 2–4 weeks for
              simple procedures, while complex tendon repairs may require several months.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {rehabilitationPhases.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Physiotherapy typically lasts 2–5 months, with sessions 2–3 times per week.
            </p>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Risks</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Complications are rare, but the most common issue is poor adherence to rehabilitation
              protocols.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {risks.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
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