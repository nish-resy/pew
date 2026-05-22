import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#case-studies", label: "Client Work", mobileLabel: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="site-shell flex min-h-20 items-center justify-between gap-4">
        <Link className="group flex min-w-0 items-center gap-3" href="/">
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-foreground text-sm font-semibold text-background shadow-sm"
          >
            PEW
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-foreground">
              PEW
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              Mobile engineering consultancy
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-lg border border-border bg-card/70 p-1 shadow-sm lg:flex"
        >
          {navigation.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex" size="sm">
            <Link href="/#contact">
              Consult
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="site-shell flex gap-1 overflow-x-auto pb-3 lg:hidden"
      >
        {navigation.map((item) => (
          <Link
            className="shrink-0 rounded-md border border-transparent px-2 py-1.5 text-xs text-muted-foreground transition hover:border-border hover:bg-muted hover:text-foreground sm:px-3 sm:text-sm"
            href={item.href}
            key={item.href}
          >
            {"mobileLabel" in item ? item.mobileLabel : item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
