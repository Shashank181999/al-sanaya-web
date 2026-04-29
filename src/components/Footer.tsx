import Image from "next/image";
import Link from "next/link";
import { company, nav, offices } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 mt-16 md:mt-24">
      <div className="container-x py-12 md:py-16 grid gap-10 md:gap-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.png"
              alt="Al Sanaya"
              width={618}
              height={800}
              sizes="80px"
              className="h-14 sm:h-16 w-auto object-contain bg-white rounded-md p-1.5"
            />
            <div className="leading-tight">
              <p className="text-white font-bold tracking-wide">AL SANAYA</p>
              <p className="text-slate-400 text-[10px] tracking-[0.18em] uppercase">
                Technical Equipment L.L.C
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-md">
            {company.blurb}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {company.brands.map((b) => (
              <span
                key={b}
                className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 text-slate-300"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Head Office
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            {offices[0].landmark}
            <br />
            {offices[0].poBox}
            <br />
            {offices[0].country}
          </p>
          <p className="text-sm mt-3">
            <a
              href={`tel:${offices[0].tel.replace(/\s/g, "")}`}
              className="text-slate-300 hover:text-slate-200"
            >
              {offices[0].tel}
            </a>
            <br />
            <a
              href={`mailto:${offices[0].email}`}
              className="text-slate-300 hover:text-slate-200"
            >
              {offices[0].email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/terms"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden md:inline text-slate-600">·</span>
            <span>Engineered for performance. Built for the GCC.</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
