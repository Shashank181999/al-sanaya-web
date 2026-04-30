import { Hero3D } from "@/components/Hero3D";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-navy-900 text-white pt-20 sm:pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 45%, rgba(255,255,255,0.06), transparent 50%)",
        }}
      />

      <Hero3D
        variant="interior"
        className="absolute inset-y-0 right-0 hidden md:block md:w-[55%] lg:w-[50%] pointer-events-none opacity-70"
      />

      <div
        className="absolute inset-y-0 right-0 hidden md:block md:w-[55%] lg:w-[50%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgb(33,63,126) 0%, rgba(33,63,126,0.7) 30%, rgba(33,63,126,0) 60%, rgba(33,63,126,0) 100%)",
        }}
      />

      <div className="container-x relative">
        {eyebrow && (
          <p className="text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 md:mt-6 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
