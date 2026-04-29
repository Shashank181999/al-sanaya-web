import { PageHero } from "@/components/PageHero";
import { MediaCard } from "@/components/MediaCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description:
    "Linkk and Megaduct busduct trunking systems delivered to UAE and other GCC countries — a selection of our prestigious project references.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Powering landmark developments across the GCC."
        description="Linkk and Megaduct busduct trunking systems have successfully been delivered to many projects across the UAE and the wider GCC region."
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <StaggerGroup
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
          <Stat value="GCC" label="Regional Footprint" />
          <Stat value="16+" label="Years of Service" />
        </Reveal>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {value}
      </p>
      <p className="mt-2 text-[11px] sm:text-sm text-slate-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
