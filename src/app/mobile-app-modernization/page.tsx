import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/mobile-app-modernization",
  },
  description:
    "Mobile app modernization consulting for legacy iOS codebases, SwiftUI adoption, performance, UI modernization, testing, and delivery resilience.",
  title: "Mobile App Modernization Consulting",
};

export default function MobileAppModernizationPage() {
  return (
    <ServicePage
      audience="Teams maintaining valuable mobile products where legacy UI, performance friction, testing gaps, or delivery risk now limit the next stage of product growth."
      deliverables={[
        "Modernization roadmap sequenced by product risk and engineering leverage.",
        "Guidance for evolving legacy mobile surfaces alongside current delivery.",
        "Performance, UI, testing, and experimentation considerations for the next phase.",
        "Collaborative implementation support for selected modernization workstreams.",
      ]}
      eyebrow="Mobile App Modernization"
      intro="PEW supports mobile modernization that respects the product already in market. The aim is to improve architecture, UI foundations, performance, and delivery confidence without turning modernization into a disconnected rewrite."
      service="Mobile app modernization"
      signals={[
        "The app carries legacy decisions that still need to coexist with new features.",
        "UI modernization is needed, but product delivery cannot pause for a rewrite.",
        "Performance and maintainability issues are becoming visible to customers or engineers.",
        "Teams need a roadmap that connects modernization work to commercial priorities.",
      ]}
      title="Modernize mobile products without losing delivery momentum."
      workstreams={[
        {
          copy: "Map legacy surfaces, product pressure, performance hotspots, delivery constraints, and areas where change is most expensive.",
          title: "Product & Codebase Review",
        },
        {
          copy: "Shape a staged path for UI evolution, architecture cleanup, testing maturity, and sustainable ownership across the mobile system.",
          title: "Modernization Roadmap",
        },
        {
          copy: "Support implementation through focused workstreams, engineering reviews, and decisions that balance customer value with technical durability.",
          title: "Execution Guidance",
        },
      ]}
    />
  );
}
