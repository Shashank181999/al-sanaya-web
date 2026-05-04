import { PageHero } from "@/components/PageHero";
import { MediaCard } from "@/components/MediaCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description:
    "Electrical and mechanical equipment supply, testing & commissioning across the GCC and MENA region — including Linkk & Megaduct busduct delivered to landmark towers, hotels, hospitals and power plants.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Powering landmark developments across the GCC and MENA region."
        description="Towers, hotels, hospitals, power plants and oil & gas installations — supplied, tested and commissioned by Al Sanaya, with Linkk & Megaduct busduct featured on many of these projects."
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <StaggerGroup
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            staggerChildren={0.06}
          >
            {projects.map((p, i) => {
              const directions = ["left", "up", "right"] as const;
              const direction = directions[i % 3];
              return (
                <StaggerItem key={p.name} direction={direction}>
                  <MediaCard
                    image={p.image}
                    title={p.name}
                    subtitle={p.location}
                    variant="project"
                    projectStyle="below"
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <Reveal className="container-x grid grid-cols-3 gap-6 md:gap-8 text-center">
          <Stat value={`${projects.length}+`} label="Landmark Projects" />
          <Stat value="GCC · MENA" label="Regional Footprint" />
          <Stat value="20+" label="Years of Service" />
        </Reveal>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  const isLong = value.length > 4;
  return (
    <div>
      <p
        className={`font-bold text-white whitespace-nowrap tracking-tight ${
          isLong
            ? "text-xl sm:text-2xl md:text-3xl"
            : "text-3xl sm:text-4xl md:text-5xl"
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-[11px] sm:text-sm text-slate-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
