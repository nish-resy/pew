import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="site-shell flex flex-col gap-5 py-8 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-medium text-foreground">PEW</p>
          <p>Mobile engineering and product consultancy.</p>
          <p className="mt-2 max-w-md text-xs leading-5">
            PEW is the mobile engineering consultancy practice of Paul Engg
            Works.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/#services">Services</Link>
          <Link href="/#case-studies">Client Work</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} paulenggworks.com</p>
      </div>
    </footer>
  );
}
