import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const ankleSprainGrades = [
  {
    title: "Grade I (Mild)",
    points: [
      "Slight stretching of ligaments",
      "Mild pain and swelling, no significant bruising",
      "Minimal functional limitation",
      "Treatment: Rest, ice, and strengthening exercises",
    ],
  },
  {
    title: "Grade II (Moderate)",
    points: [
      "Partial ligament tear",
      "Moderate pain, swelling, and visible bruising",
      "Joint instability and difficulty bearing weight",
      "Treatment: Rest, ice, elevation, use of crutches, followed by rehabilitation",
    ],
  },
  {
    title: "Grade III (Severe)",
    points: [
      "Complete ligament rupture",
      "Severe pain, swelling, and inability to bear weight",
      "Treatment: May require surgical repair, though conservative treatment is sometimes possible",
    ],
  },
];

const overheadAthleteCauses = [
  "Repetitive high-speed throwing motions",
  "Muscle fatigue and imbalance",
  "Overload of stabilizing structures such as the rotator cuff and ligaments",
  "Progressive joint instability",
];

const aclInjuryCauses = [
  "Sudden twisting of the knee",
  "Sports injuries such as football, basketball, and skiing",
  "Falls or car accidents",
];

const aclAssociatedInjuries = ["Meniscus injuries", "Other knee ligament injuries"];

const aclSymptoms = [
  "Sharp pain",
  "Significant swelling within hours",
  "Instability, where the knee feels like it gives way",
  "Difficulty or inability to walk properly",
];

const aclGraftSources = ["Patellar tendon", "Hamstring tendons", "Quadriceps tendon"];

const aclTreatmentFactors = ["Age", "Activity level", "Lifestyle and needs"];

const aclSurgerySteps = [
  "A camera is inserted into the knee",
  "The knee is examined and any additional damage is treated",
  "A graft is prepared and inserted",
  "The new ligament is fixed in place",
];

const aclRecoveryTimeline = [
  "2 weeks: full knee extension and bending beyond 90°",
  "1 month: walking without crutches",
  "2–2.5 months: jogging, driving, and return to work",
  "4–6 months: return to full sports activity",
];

const aclRisks = ["Infection", "Stiffness", "Graft failure", "Pain or swelling", "Incomplete recovery"];

const resultingConditions = [
  "Rotator cuff injuries",
  "Impingement syndromes",
  "Shoulder instability",
  "Labral injuries (SLAP lesions)",
];

const slapTypes = [
  "Type I: Degenerative fraying",
  "Type II: Detachment of labrum and biceps anchor",
  "Type III: Bucket-handle tear",
  "Type IV: Tear extending into biceps tendon",
];

const clinicalEvaluation = [
  "Detailed medical history",
  "Range of motion comparison between dominant and non-dominant arm",
  "Specialized clinical tests such as the O’Brien test and relocation test",
];

const rehabilitation = [
  "Rest, ice, and anti-inflammatory medication",
  "Stretching and strengthening exercises",
  "Focus on rotator cuff and scapular stabilization",
  "Proprioceptive neuromuscular training (PNF)",
  "Plyometric exercises such as weighted ball throws",
];

const elbowPrevention = [
  "Proper technique",
  "Adequate rest",
  "Strength and conditioning",
];

export const Route = createFileRoute("/sports-injuries")({
  head: () => ({
    meta: [
      { title: "Sports Injuries | Dr. Andreas Papadopoulos" },
      {
        name: "description",
        content:
          "Learn about ankle sprains, shoulder and elbow injuries in overhead athletes, SLAP lesions, rehabilitation, and arthroscopic treatment options.",
      },
      { property: "og:title", content: "Sports Injuries | Dr. Andreas Papadopoulos" },
      {
        property: "og:description",
        content:
          "Clear patient information on ankle sprains, shoulder instability, SLAP lesions, rehabilitation, and surgical treatment when needed.",
      },
      { name: "twitter:title", content: "Sports Injuries | Dr. Andreas Papadopoulos" },
      {
        name: "twitter:description",
        content:
          "Website-ready sports injury information covering ankle sprains, overhead athlete shoulder injuries, elbow strain, and recovery.",
      },
    ],
    links: [{ rel: "canonical", href: "https://id-preview--a89fdb1f-ce99-4b8d-9c1e-f9952f18729f.lovable.app/sports-injuries" }],
  }),
  component: SportsInjuriesPage,
});

function SportsInjuriesPage() {
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
                Sports Injuries
              </span>
              <h1 className="mt-6 text-5xl leading-none font-semibold text-shell-foreground sm:text-6xl lg:text-7xl">
                Ankle, Shoulder &amp; Elbow Sports Injury Care
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-shell-foreground/80 sm:text-lg">
                Sports injuries range from common ankle sprains to complex shoulder and elbow conditions
                in overhead athletes. Accurate diagnosis and the right rehabilitation plan are essential
                for safe recovery and long-term joint stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Ankle Sprain</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              An ankle sprain is one of the most common musculoskeletal injuries, affecting
              approximately 25,000 people worldwide every day. Depending on severity, ankle sprains are
              classified into three grades based on the extent of ligament damage.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {ankleSprainGrades.map((grade) => (
                <article className="soft-card" key={grade.title}>
                  <h3 className="text-xl font-semibold text-foreground">{grade.title}</h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {grade.points.map((point) => (
                      <li className="flex gap-3" key={point}>
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">
              ACL Rupture &ndash; Arthroscopic Reconstruction
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              The anterior cruciate ligament (ACL) is one of the main stabilizing ligaments of the knee.
              It prevents the tibia from sliding too far forward in relation to the femur and helps
              control knee rotation. When it ruptures, knee stability is compromised, especially in
              active patients and athletes.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">How the ACL is injured</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclInjuryCauses.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  ACL ruptures are often accompanied by injuries to the meniscus or other knee
                  ligaments.
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclAssociatedInjuries.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Symptoms of an ACL tear</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclSymptoms.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Treatment</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  In most cases, ACL tears are treated surgically, especially in active people. The
                  torn ligament is replaced with a graft, which can come from the patient&rsquo;s own
                  tendons or from synthetic material.
                </p>
                <h4 className="mt-5 text-base font-semibold text-foreground sm:text-lg">Common graft sources</h4>
                <ul className="mt-3 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclGraftSources.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="mt-5 text-base font-semibold text-foreground sm:text-lg">The graft choice depends on</h4>
                <ul className="mt-3 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclTreatmentFactors.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Arthroscopic surgery</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Arthroscopic ACL reconstruction is a minimally invasive procedure performed through
                  small incisions of about 5 mm.
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclSurgerySteps.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  <p>
                    <span className="font-semibold text-foreground">Duration:</span> about 1&ndash;1.5
                    hours
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Anesthesia:</span> general or
                    spinal
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Recovery process</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Immediately after surgery, patients usually stay in hospital for 1&ndash;2 days, use a
                  knee brace and crutches, and begin early physiotherapy straight away.
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclRecoveryTimeline.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Risks &amp; key point</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {aclRisks.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  ACL reconstruction is the standard and most successful treatment worldwide, with high
                  success rates when combined with proper physiotherapy.
                </p>
              </div>
            </div>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">
              Shoulder &amp; Elbow Injuries in Overhead Athletes
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              Overhead athletes such as swimmers, tennis players, volleyball players, and baseball
              players frequently use their arms above head level, placing extreme stress on the shoulder
              joint. This repetitive motion increases the risk of injury.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">Common Causes &amp; Mechanisms</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {overheadAthleteCauses.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-foreground">These factors can lead to</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {resultingConditions.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">SLAP Lesions</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              SLAP lesions involve damage to the superior labrum and the attachment of the biceps
              tendon, often causing deep shoulder pain during overhead movement and a sensation of
              instability or clicking.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {slapTypes.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Treatment depends on severity and may range from physiotherapy to arthroscopic repair.
            </p>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Clinical Evaluation</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {clinicalEvaluation.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Rehabilitation</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Initial treatment is usually non-surgical and focuses on reducing pain, restoring control,
              and improving stability.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {rehabilitation.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="premium-card">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Surgical Treatment</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Surgery is considered when conservative treatment fails. Arthroscopy is used to confirm
              diagnosis, repair labral tears or rotator cuff injuries, and address instability. Successful
              outcomes depend on accurate diagnosis and proper management of the underlying instability.
            </p>
          </article>

          <article className="premium-card lg:col-span-2">
            <h2 className="text-3xl leading-tight font-semibold text-foreground">Elbow Injuries in Overhead Athletes</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              Elbow injuries are also common due to repetitive motion and high angular forces. Prevention
              relies on disciplined technique, recovery, and conditioning.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {elbowPrevention.map((item) => (
                <div className="soft-card flex items-center gap-3" key={item}>
                  <CheckCircle2 className="size-5 text-highlight" />
                  <span className="text-sm font-semibold text-foreground sm:text-base">{item}</span>
                </div>
              ))}
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