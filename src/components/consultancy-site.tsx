import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  ChartNoAxesColumnIncreasing,
  CircuitBoard,
  Compass,
  Globe2,
  Layers3,
  MapPin,
  Mail,
  Network,
  ShieldCheck,
  Smartphone,
  Waypoints,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    description:
      "Architecture reviews and implementation guidance for maintainable Swift codebases, modular boundaries, and release-ready iOS systems.",
    href: "/ios-architecture-consulting",
    icon: Layers3,
    title: "iOS Architecture Consulting",
  },
  {
    description:
      "Platform decisions across native and cross-platform surfaces, shared delivery practices, observability, and mobile product foundations.",
    href: "/mobile-app-modernization",
    icon: Smartphone,
    title: "Mobile Platform Engineering",
  },
  {
    description:
      "Performance diagnosis for startup time, responsiveness, reliability, and growth constraints that affect customer trust.",
    icon: ChartNoAxesColumnIncreasing,
    title: "Product Scalability & Performance",
  },
  {
    description:
      "Operating models for distributed engineers, interfaces between teams, and technical decisions that travel clearly across time zones.",
    icon: Network,
    title: "Distributed Engineering Consulting",
  },
  {
    description:
      "Experienced technical direction for architecture choices, delivery risk, engineering standards, and pragmatic decision making.",
    icon: ShieldCheck,
    title: "Technical Leadership",
  },
  {
    description:
      "Focused reviews of mobile roadmaps, delivery risks, platform trade-offs, and the engineering choices behind product scale.",
    icon: Compass,
    title: "Mobile Product Advisory",
  },
];

const credibility = [
  "12+ years shaping mobile products and engineering systems",
  "UK Master's degree in Computer Science",
  "Professional experience in India and the Netherlands",
  "Independent consultancy for global product teams",
];

const internationalSignals = [
  {
    copy: "Consulting that fits cross-border products, stakeholder expectations, and teams that need decisions documented with precision.",
    title: "Global consulting context",
  },
  {
    copy: "Practical collaboration across time zones with clear ownership, written architecture choices, and delivery rituals that stay lean.",
    title: "Distributed teams",
  },
  {
    copy: "Prior professional experience in the Netherlands informs a measured approach to European product and engineering environments.",
    title: "European exposure",
  },
];

const clientWork = [
  {
    client: "Resy",
    focus: ["SwiftUI modernization", "Modularization", "Swift Testing"],
    title: "Modernizing a mature iOS product",
    summary:
      "Revamped the app from legacy UIKit toward SwiftUI, introduced new product features, added modularization, and modernized the testing foundation with Swift Testing while supporting long-term app maintenance.",
  },
  {
    client: "Wowcher",
    focus: ["iOS ownership", "Performance", "A/B testing"],
    title: "Owning end-to-end iOS delivery",
    summary:
      "Owned iOS development across legacy Objective-C and modern Swift surfaces, with work spanning performance improvements, UI modernization, and experimentation support for A/B testing.",
  },
];

const process = [
  {
    copy: "Align on the product, commercial priorities, team shape, constraints, and decision owners.",
    title: "Discovery",
  },
  {
    copy: "Review architecture, delivery flow, performance signals, risk, and engineering assumptions.",
    title: "Technical Assessment",
  },
  {
    copy: "Set the target system direction, work sequence, trade-offs, and collaboration plan.",
    title: "Architecture & Planning",
  },
  {
    copy: "Work with engineers and product leaders through implementation, reviews, and crisp handoffs.",
    title: "Delivery & Collaboration",
  },
  {
    copy: "Refine reliability, maintainability, operating practices, and the next phase of product scale.",
    title: "Long-Term Optimization",
  },
];

const technologies = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "React",
  "React Native",
  "Node.js",
  "GraphQL",
  "AWS",
  "CI/CD",
  "Distributed Systems",
];

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  copy: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export function ConsultancySite() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <section className="overflow-hidden border-b border-border">
          <div className="site-shell grid min-h-[calc(100svh-8rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
            <Reveal className="min-w-0">
              <p className="eyebrow">Mobile Engineering Consultancy</p>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-[3.9rem] 2xl:text-[4.6rem]">
                Engineering scalable mobile products for modern businesses.
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                Specialized mobile architecture, performance, distributed
                engineering, and international consulting for teams building
                products meant to scale.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg">
                  <a href="#contact">
                    Schedule Consultation
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#services">View Services</a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href="#case-studies">View Client Work</a>
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative min-w-0 lg:pl-8" delay={0.12}>
              <div className="hero-frame">
                <Image
                  alt="Layered engineering systems visual"
                  className="h-full w-full object-cover object-center"
                  height={1365}
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  src="/engineering-visual.png"
                  width={2048}
                />
                <div className="absolute inset-x-5 bottom-5 grid gap-3 sm:grid-cols-2">
                  <div className="glass-note">
                    <span>Specialization</span>
                    <strong>Mobile systems</strong>
                  </div>
                  <div className="glass-note">
                    <span>Engagements</span>
                    <strong>Advisory to delivery</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="site-shell py-10">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
            {credibility.map((item) => (
              <p
                className="bg-card px-5 py-5 text-sm leading-6 text-muted-foreground"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="site-shell scroll-mt-32 py-20" id="services">
          <Reveal>
            <SectionIntro
              copy="Focused engagements for businesses that need seasoned mobile judgment connected to product delivery, platform durability, and clear commercial outcomes."
              eyebrow="Services"
              title="Seasoned engineering capability for mobile products that cannot drift."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ description, href, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.045} key={title}>
                <Card className="group h-full transition hover:-translate-y-0.5 hover:border-foreground/18">
                  <CardHeader>
                    <span className="service-icon">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    {href ? (
                      <Link className="service-link" href={href}>
                        Explore service
                        <ArrowRight className="size-4" />
                      </Link>
                    ) : null}
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-band scroll-mt-32" id="about">
          <div className="site-shell grid gap-10 py-20 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <SectionIntro
                copy="The consultancy is built for sustained client work: rigorous engineering, calm communication, and product decisions that remain useful after the engagement."
                eyebrow="Founder"
                title="Deep mobile experience, expressed as a consulting practice."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  PEW is led by Nishant Paul, a seasoned mobile engineer with
                  more than twelve years of experience across iOS engineering,
                  scalable mobile systems, and product-facing technical
                  leadership.
                </p>
                <p>
                  The practice draws on a UK Master&apos;s degree in Computer
                  Science, international consulting exposure, and professional
                  work in India and the Netherlands. That mix matters in
                  engagements where architecture, business priorities, and
                  distributed collaboration need to move together.
                </p>
                <p>
                  Work is approached as an independent consultancy: clear
                  scopes, accountable delivery, careful collaboration with
                  client teams, and a long-term view toward European and global
                  product partnerships.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="site-shell scroll-mt-32 py-20" id="experience">
          <Reveal>
            <SectionIntro
              copy="International credibility is built through habits: precise documentation, context-aware communication, and systems that help teams work across company and country boundaries."
              eyebrow="International Experience"
              title="Built for cross-border products and distributed engineering."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <div className="experience-panel h-full">
                <Globe2 className="size-7 text-accent-foreground" />
                <p className="mt-10 max-w-xl text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                  Global product work benefits from engineering decisions that
                  are clear enough to cross borders.
                </p>
                <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                  The consultancy supports startups and companies preparing
                  mobile platforms for wider markets, evolving teams, and
                  partnerships that may include European clients and
                  subcontractors.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {internationalSignals.map((item, index) => (
                <Reveal delay={index * 0.06} key={item.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <CardDescription>{item.copy}</CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band scroll-mt-32" id="case-studies">
          <div className="site-shell py-20">
            <Reveal>
              <SectionIntro
                copy="Selected client work across mobile modernization, product delivery, performance, and engineering systems."
                eyebrow="Client Work"
                title="Consulting experience inside real mobile products."
              />
            </Reveal>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {clientWork.map((study, index) => (
                <Reveal delay={index * 0.06} key={study.title}>
                  <Card className="case-card h-full">
                    <CardHeader>
                      <div className="client-mark">
                        <span>Client</span>
                        <strong>{study.client}</strong>
                        <Waypoints className="size-4 text-muted-foreground" />
                      </div>
                      <CardTitle className="pt-4 text-2xl">{study.title}</CardTitle>
                      <CardDescription className="text-base">
                        {study.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto flex flex-wrap gap-2">
                      {study.focus.map((item) => (
                        <span className="focus-chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="site-shell scroll-mt-32 py-20" id="process">
          <Reveal>
            <SectionIntro
              copy="A consulting workflow designed to expose trade-offs early, keep delivery legible, and leave teams with a stronger engineering system."
              eyebrow="Consulting Process"
              title="Structured enough for trust. Lean enough for momentum."
            />
          </Reveal>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal delay={index * 0.045} key={step.title}>
                <li className="process-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="site-shell pb-20">
          <Reveal>
            <div className="stack-panel">
              <div>
                <p className="eyebrow">Technology Stack</p>
                <h2 className="max-w-2xl text-balance text-3xl font-semibold text-foreground sm:text-4xl">
                  Technologies selected as delivery tools, not badges.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span className="technology-chip" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="contact-band scroll-mt-32" id="contact">
          <div className="site-shell grid gap-8 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <Reveal>
              <p className="eyebrow text-white/58">Contact</p>
              <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Serious mobile engineering inquiries start with a focused
                conversation.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Share your product stage, architecture question, or delivery
                challenge. PEW can discuss advisory, assessment, and consulting
                engagements for international teams.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="contact-panel">
                <a href="mailto:info@paulenggworks.com">
                  <Mail className="size-5" />
                  info@paulenggworks.com
                </a>
                <a
                  href="https://www.linkedin.com/in/nishantpaul"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Boxes className="size-5" />
                  Nishant Paul on LinkedIn
                  <ArrowUpRight className="ml-auto size-4" />
                </a>
                <div className="rounded-md border border-white/12 bg-white/[0.06] p-4">
                  <p className="flex items-center gap-3 text-sm font-medium text-white">
                    <MapPin className="size-5 shrink-0" />
                    Delhi NCR, India
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Available for international consulting conversations and
                    European market engagements.
                  </p>
                </div>
                <Button asChild className="w-full bg-white text-zinc-950 hover:bg-white/88">
                  <a href="mailto:info@paulenggworks.com">
                    Request Consultation
                    <CircuitBoard className="size-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
