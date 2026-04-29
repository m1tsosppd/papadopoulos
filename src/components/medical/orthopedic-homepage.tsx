import * as React from "react";
import {
  Activity,
  ArrowRight,
  Bone,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import heroImage from "@/assets/dr-papadopoulos-hero.jpg";
import recoveryImage from "@/assets/dr-papadopoulos-recovery.jpg";
import { Button } from "@/components/ui/button";

const clinicPhone = "261 033 0567";
const clinicLocation = "Χείλωνος Πατρέως 5, Πάτρα 262 24";
const clinicMapsUrl = "https://www.google.com/maps/search/?api=1&query=%CE%A7%CE%B5%CE%AF%CE%BB%CF%89%CE%BD%CE%BF%CF%82+%CE%A0%CE%B1%CF%84%CF%81%CE%AD%CF%89%CF%82+5%2C+%CE%A0%CE%AC%CF%84%CF%81%CE%B1+262+24";
const clinicEmail = "papadand71@gmail.com";
const clinicHours = [
  "Monday · 9:30 AM–12:30 PM, 6:00–8:00 PM",
  "Tuesday · 9:30 AM–12:30 PM, 6:00–8:00 PM",
  "Wednesday · 9:30 AM–12:30 PM",
  "Thursday · 9:30 AM–12:30 PM, 6:00–8:00 PM",
  "Friday · 9:30 AM–12:30 PM",
  "Saturday · Closed",
  "Sunday · Closed",
];

const trustSignals = [
  "Orthopedic Surgeon",
  "Advanced Surgical Expertise",
  "Personalized Treatment Plans",
  "Trusted by Patients",
];

const reviewHighlights = [
  {
    title: "Fast return after ACL surgery",
    copy:
      "Patients describe feeling reassured from the first visit, with surgical plans explained clearly and recovery guided every step of the way.",
  },
  {
    title: "Excellent knee replacement outcomes",
    copy:
      "Review-inspired feedback consistently reflects restored mobility, reduced pain, and renewed confidence in daily life.",
  },
  {
    title: "Compassion with true professionalism",
    copy:
      "The tone patients remember most is calm confidence, thoughtful care, and follow-up that never feels rushed.",
  },
];

const services = [
  {
    title: "Knee Surgery",
    href: "/knee-surgery",
    description:
      "Comprehensive care for meniscus injuries, cartilage damage, instability, and advanced knee conditions requiring surgical expertise.",
    icon: Bone,
  },
  {
    title: "Sports Injuries",
    href: "/sports-injuries",
    description:
      "Targeted treatment for athletes and active adults with ligament tears, tendon injuries, and overuse conditions.",
    icon: Activity,
  },
  {
    title: "Shoulder Arthroscopy",
    href: "/shoulder-arthroscopy",
    description:
      "Modern minimally invasive techniques for rotator cuff pathology, instability, impingement, and painful stiffness.",
    icon: Sparkles,
  },
  {
    title: "Joint Replacement",
    href: "/joint-replacement",
    description:
      "Advanced hip and knee replacement planning focused on pain relief, function, safety, and a confident recovery path.",
    icon: ShieldCheck,
  },
  {
    title: "Fracture Care",
    href: "/fracture-care",
    description:
      "Accurate assessment and treatment for acute fractures, trauma-related injuries, and post-injury rehabilitation needs.",
    icon: CheckCircle2,
  },
  {
    title: "Foot & Ankle Conditions",
    href: "/foot-ankle-conditions",
    description:
      "Specialist evaluation for tendon disorders, instability, arthritis, deformity, and injury-related pain affecting movement.",
    icon: HeartPulse,
  },
];

const differentiators = [
  "Surgical decision-making grounded in precision, safety, and long-term function",
  "Individualized treatment plans tailored to lifestyle, goals, and recovery timeline",
  "Modern orthopedic techniques with clear guidance before and after surgery",
  "Trusted communication that helps patients and families feel informed and confident",
];

const testimonials = [
  {
    quote: "Exceptional surgeon and exceptional human being. My recovery exceeded expectations.",
    role: "ACL reconstruction patient",
  },
  {
    quote: "He inspired confidence from the first consultation and the surgical result was excellent.",
    role: "Knee replacement patient",
  },
  {
    quote: "Professional, caring, and highly skilled. I would recommend him without hesitation.",
    role: "Shoulder surgery patient",
  },
];

const processSteps = [
  {
    title: "Schedule Consultation",
    description:
      "Share your symptoms, medical history, and goals in a private consultation focused on clarity and reassurance.",
  },
  {
    title: "Receive Diagnosis & Treatment Plan",
    description:
      "Understand your condition, options, and recommended next steps with a tailored plan built around outcomes.",
  },
  {
    title: "Begin Recovery with Expert Care",
    description:
      "Move forward with surgery or non-operative treatment supported by attentive follow-up and recovery guidance.",
  },
];

export function OrthopedicHomepage() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "ready">("idle");

  const handleAppointmentRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim().slice(0, 100);
    const phone = String(formData.get("phone") ?? "").trim().slice(0, 30);
    const email = String(formData.get("email") ?? "").trim().slice(0, 120);
    const concern = String(formData.get("concern") ?? "").trim().slice(0, 120);
    const message = String(formData.get("message") ?? "").trim().slice(0, 600);

    if (!name || !phone || !concern) {
      setFormStatus("idle");
      return;
    }

    const subject = encodeURIComponent(`Consultation request from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Primary concern: ${concern}`,
        "",
        message || "Please contact me to arrange an appointment.",
      ].join("\n"),
    );

    setFormStatus("ready");
    window.location.href = `mailto:${clinicEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="page-shell">
      <section className="section-dark">
        <div className="section-shell">
          <div className="hero-frame overflow-hidden">
            <div className="hero-overlay relative z-10 flex min-h-[560px] flex-col px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
              <header className="flex items-center justify-between gap-6 border-b border-primary-foreground/12 pb-5">
                <div>
                  <p className="font-display text-3xl leading-none text-shell-foreground sm:text-4xl">
                    Dr. Andreas Papadopoulos
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase text-shell-foreground/72">
                    Orthopedic Surgeon
                  </p>
                </div>
                <nav className="top-nav">
                  <a href="#services">Treatments</a>
                  <a href="#reviews">Reviews</a>
                  <a href="#process">Process</a>
                  <a href="#contact">Contact</a>
                </nav>
              </header>

              <div className="flex flex-1 flex-col justify-center py-14 sm:py-18 lg:max-w-4xl">
                <span className="eyebrow w-fit">
                  <ShieldCheck className="size-4" />
                  Premium Orthopedic Care
                </span>
                <h1 className="mt-6 max-w-5xl text-5xl leading-none font-semibold text-shell-foreground sm:text-6xl lg:text-[5.6rem]">
                  Advanced Orthopedic Care with Surgical Precision You Can Trust
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-shell-foreground/78 sm:text-lg">
                  Expert diagnosis, modern orthopedic treatments, and personalized care focused on
                  restoring movement and improving life.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" variant="luxury">
                    <a href="#contact">
                      Book a Consultation
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="heroSecondary">
                    <a href={`tel:${clinicPhone.replace(/[^+\d]/g, "")}`}>
                      <PhoneCall className="size-4" />
                      Call the Clinic
                    </a>
                  </Button>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {trustSignals.map((signal) => (
                    <div className="metric-chip" key={signal}>
                      <CheckCircle2 className="size-4" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]">
              <img
                alt="Luxury orthopedic consultation room for Dr. Andreas Papadopoulos"
                className="absolute inset-0 h-full w-full object-cover object-center"
                height={1080}
                src={heroImage}
                width={1920}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">
              <Star className="size-4" />
              Trust & Social Proof
            </span>
            <h2 className="section-title mt-6">A reputation built on calm expertise and meaningful outcomes</h2>
            <p className="section-copy mt-5">
              Inspired by real patient feedback, the experience is consistently described as reassuring,
              professional, and deeply human — from first consultation through recovery.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {reviewHighlights.map((item) => (
              <article className="premium-card" key={item.title}>
                <div className="mb-5 flex items-center gap-1 text-highlight" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star className="size-4 fill-current" key={index} />
                  ))}
                </div>
                <h3 className="text-2xl leading-tight font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light" id="services">
        <div className="section-shell">
          <span className="eyebrow">
            <Bone className="size-4" />
            Treatments & Services
          </span>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="section-title">Specialist care across the orthopedic conditions patients face most</h2>
              <p className="section-copy mt-5">
                These are some of the most common cases seen in practice, while the doctor specializes in
                many more orthopedic conditions, injuries, and advanced treatment options.
              </p>
            </div>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Request an orthopedic evaluation</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, description, icon: Icon, href }) => (
              <article className="service-card" key={title}>
                <div className="icon-shell">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-2xl leading-tight font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                  {href ? (
                    <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground" to={href}>
                      Learn more
                      <ArrowRight className="size-4" />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="soft-card p-3">
            <img
              alt="Orthopedic surgery in progress led by Dr. Andreas Papadopoulos"
              className="aspect-[4/4.2] w-full object-cover"
              height={1024}
              loading="lazy"
              src={recoveryImage}
              width={1024}
            />
          </div>
          <div>
            <span className="eyebrow">
              <Sparkles className="size-4" />
              Surgeon Profile
            </span>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-shell-foreground/82 sm:text-xl">
              Dr. Andreas X. Papadopoulos is an experienced Orthopaedic Surgeon with over 20 years of
              clinical practice and more than 5,000 surgeries performed. He specializes in advanced
              orthopaedic techniques, offering personalized treatment using state-of-the-art technology.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="soft-card">
                <h3 className="text-xl font-semibold text-shell-foreground">Expertise</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-shell-foreground/82 sm:text-base">
                  <li>Robotic Knee Arthroplasty (CORI &amp; ROSA systems)</li>
                  <li>Arthroscopic surgery (shoulder &amp; knee)</li>
                  <li>Sports injuries (ACL/PCL reconstruction, meniscus repair)</li>
                  <li>Shoulder surgery (rotator cuff repair, instability, total/reverse arthroplasty)</li>
                  <li>Orthopaedic trauma &amp; fracture management</li>
                  <li>Spine procedures (kyphoplasty)</li>
                  <li>Regenerative medicine (PRP therapies)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light" id="reviews">
        <div className="section-shell">
          <span className="eyebrow">
            <HeartPulse className="size-4" />
            Testimonials
          </span>
          <h2 className="section-title mt-6">Patients speak most about confidence, compassion, and excellent results</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article className="quote-card" key={item.quote}>
                <div className="mb-5 flex items-center gap-1 text-highlight" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star className="size-4 fill-current" key={index} />
                  ))}
                </div>
                <p className="max-w-sm text-xl leading-8 text-foreground">“{item.quote}”</p>
                <p className="mt-6 text-sm font-semibold uppercase text-muted-foreground">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light" id="process">
        <div className="section-shell">
          <span className="eyebrow">
            <CalendarDays className="size-4" />
            Simple Process
          </span>
          <h2 className="section-title mt-6">A clear path from first appointment to confident recovery</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article className="process-node" key={step.title}>
                <span className="process-index">0{index + 1}</span>
                <h3 className="text-2xl leading-tight font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-shell">
          <div className="cta-band">
            <span className="eyebrow">
              <ShieldCheck className="size-4" />
              Consultation Booking
            </span>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="section-title text-shell-foreground">Take the First Step Toward Pain-Free Movement</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-shell-foreground/78 sm:text-lg">
                  Whether you need a second opinion, a surgical consultation, or a plan to return to an
                  active life, expert care starts with one conversation.
                </p>
              </div>
              <Button asChild size="lg" variant="luxury">
                <a href="#contact">
                  Book Your Consultation Today
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light" id="contact">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">
              <PhoneCall className="size-4" />
              Contact & Appointments
            </span>
            <h2 className="section-title mt-6">Private, responsive support for consultations and surgical inquiries</h2>
            <p className="section-copy mt-5">
              Reach out for a consultation request, surgical inquiry, or guidance on the next step for your
              orthopedic condition.
            </p>

            <div className="mt-10 grid gap-5">
              <div className="soft-card grid gap-5">
                <div className="contact-item">
                  <div className="icon-shell shrink-0">
                    <PhoneCall className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase text-muted-foreground">Phone</p>
                    <a className="mt-1 inline-block text-lg font-semibold text-foreground" href={`tel:${clinicPhone.replace(/[^+\d]/g, "")}`}>
                      {clinicPhone}
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-shell shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase text-muted-foreground">Clinic location</p>
                    <a
                      className="mt-1 inline-block text-lg font-semibold text-foreground transition-colors hover:text-primary"
                      href={clinicMapsUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {clinicLocation}
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-shell shrink-0">
                    <Clock3 className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase text-muted-foreground">Appointments</p>
                    <div className="mt-1 space-y-1 text-sm font-semibold text-foreground sm:text-base">
                      {clinicHours.map((hours) => (
                        <p key={hours}>{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-card">
            <div className="mb-8">
              <h3 className="text-3xl leading-none font-semibold text-foreground">Appointment request form</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Send your details and primary concern to begin the consultation process.
              </p>
            </div>

            <form className="grid gap-4" onSubmit={handleAppointmentRequest}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Full name
                  <input className="field-shell" maxLength={100} name="name" placeholder="Your full name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Phone number
                  <input className="field-shell" maxLength={30} name="phone" placeholder="Best number to reach you" required />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Email
                  <input className="field-shell" maxLength={120} name="email" placeholder="you@example.com" type="email" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Primary concern
                  <input
                    className="field-shell"
                    maxLength={120}
                    name="concern"
                    placeholder="Knee pain, ACL injury, shoulder issue..."
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Message
                <textarea
                  className="field-shell min-h-36 py-4"
                  maxLength={600}
                  name="message"
                  placeholder="Briefly describe your symptoms, injury, or reason for consultation."
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  {formStatus === "ready"
                    ? "Your email app should open with the appointment request details prefilled."
                    : "For urgent matters, calling the clinic is the fastest way to arrange an appointment."}
                </p>
                <Button size="lg" type="submit" variant="hero">
                  Request Appointment
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
