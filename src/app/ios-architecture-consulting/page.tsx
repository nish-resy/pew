import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/ios-architecture-consulting",
  },
  description:
    "iOS architecture consulting for Swift, SwiftUI, UIKit, modularization, testability, and maintainable mobile product delivery.",
  title: "iOS Architecture Consulting",
};

export default function IosArchitectureConsultingPage() {
  return (
    <ServicePage
      audience="Product and engineering teams with an iOS codebase that needs clearer boundaries, stronger maintainability, or a credible path from legacy decisions to scalable delivery."
      deliverables={[
        "Architecture review with risks, trade-offs, and prioritized recommendations.",
        "Target module and dependency direction for Swift, SwiftUI, and UIKit code.",
        "Testing and delivery guidance aligned with maintainability and release confidence.",
        "Implementation support for the highest-leverage architecture decisions.",
      ]}
      eyebrow="iOS Architecture Consulting"
      intro="PEW helps teams improve iOS architecture without losing sight of shipping. The work connects native engineering depth with product pressure, team ownership, and the cost of future change."
      service="iOS architecture consulting"
      signals={[
        "Legacy UIKit and newer SwiftUI surfaces need to evolve together.",
        "Feature growth has made dependencies, ownership, or build behavior harder to reason about.",
        "The team needs modularization guidance without architecture for architecture's sake.",
        "Testing strategy and release confidence need to mature with the codebase.",
      ]}
      title="iOS architecture that remains legible as the product grows."
      workstreams={[
        {
          copy: "Review navigation, state, dependencies, module boundaries, test seams, and the decisions already embedded in the iOS product.",
          title: "Architecture Assessment",
        },
        {
          copy: "Define practical target boundaries and migration steps that fit legacy UIKit, SwiftUI adoption, and active feature delivery.",
          title: "Modernization Direction",
        },
        {
          copy: "Work alongside engineers on implementation patterns, reviews, technical decision records, and sustainable testing practices.",
          title: "Delivery Support",
        },
      ]}
    />
  );
}
