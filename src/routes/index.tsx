import { createFileRoute } from "@tanstack/react-router";

import { OrthopedicHomepage } from "@/components/medical/orthopedic-homepage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Andreas Papadopoulos | Orthopedic Surgeon" },
      {
        name: "description",
        content:
          "Premium orthopedic surgery website for consultations, sports injuries, joint replacement, arthroscopy, fracture care, and recovery-focused treatment.",
      },
      { property: "og:title", content: "Dr. Andreas Papadopoulos | Orthopedic Surgeon" },
      {
        property: "og:description",
        content:
          "Advanced orthopedic care with surgical precision, trusted communication, and personalized treatment plans.",
      },
      { name: "twitter:title", content: "Dr. Andreas Papadopoulos | Orthopedic Surgeon" },
      {
        name: "twitter:description",
        content:
          "Consultations, surgical expertise, and elite patient care for knee, shoulder, sports injury, and joint replacement treatment.",
      },
    ],
    links: [{ rel: "canonical", href: "https://id-preview--a89fdb1f-ce99-4b8d-9c1e-f9952f18729f.lovable.app/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return <OrthopedicHomepage />;
}
