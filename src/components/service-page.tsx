import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ServicePageProps = {
  audience: string;
  deliverables: string[];
  eyebrow: string;
  intro: string;
  service: string;
  signals: string[];
  title: string;
  workstreams: Array<{
    copy: string;
    title: string;
  }>;
};

export function ServicePage({
  audience,
  deliverables,
  eyebrow,
  intro,
  service,
  signals,
  title,
  workstreams,
}: ServicePageProps) {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <section className="overflow-hidden border-b border-border">
          <div className="site-shell grid gap-10 py-16 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:py-24">
            <Reveal className="min-w-0">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                {intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Discuss an engagement
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#case-studies">View client work</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal className="relative min-w-0" delay={0.08}>
              <div className="service-visual">
                <Image
                  alt="Layered mobile engineering system visual"
                  className="h-full w-full object-cover"
                  height={1365}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  src="/engineering-visual.png"
                  width={2048}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="site-shell grid gap-6 py-16 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="service-note">
              <p className="eyebrow">Who It Fits</p>
              <p className="text-pretty text-2xl font-medium leading-9 text-foreground">
                {audience}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {signals.map((signal, index) => (
              <Reveal delay={index * 0.045} key={signal}>
                <Card className="h-full">
                  <CardHeader className="gap-4">
                    <CheckCircle2 className="size-5 text-accent-foreground" />
                    <CardDescription className="text-base">
                      {signal}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-band">
          <div className="site-shell py-20">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow">Service Scope</p>
                <h2 className="section-title">
                  {service} grounded in architecture, delivery, and product
                  realities.
                </h2>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {workstreams.map((workstream, index) => (
                <Reveal delay={index * 0.055} key={workstream.title}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{workstream.title}</CardTitle>
                      <CardDescription className="text-base">
                        {workstream.copy}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="site-shell grid gap-8 py-20 lg:grid-cols-[1fr_0.92fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Outputs</p>
              <h2 className="section-title">
                Clear consulting artifacts your team can act on.
              </h2>
              <p className="section-copy">
                Engagements are shaped to the product stage and team context.
                The goal is to leave the engineering system easier to reason
                about and the next decisions easier to make.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="deliverable-list">
              {deliverables.map((deliverable) => (
                <p key={deliverable}>
                  <CheckCircle2 className="size-5 shrink-0" />
                  {deliverable}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="contact-band">
          <div className="site-shell flex flex-col gap-6 py-16 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow text-white/58">Contact</p>
              <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Bring the mobile engineering question that is slowing the
                product down.
              </h2>
            </div>
            <Button
              asChild
              className="bg-white text-zinc-950 hover:bg-white/88"
              size="lg"
            >
              <a href="mailto:sales@paulenggworks.com">
                <Mail className="size-4" />
                sales@paulenggworks.com
              </a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
