import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { offices } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Al Sanaya Technical Equipment — offices in Abu Dhabi, Dubai, Lebanon and Jordan.",
};

const quickInfo = [
  {
    title: "Response Time",
    value: "24 hrs",
    body: "We respond to every enquiry within one business day.",
  },
  {
    title: "Office Hours",
    value: "Mon – Sat",
    body: "Mon – Fri: 8:00 AM – 6:00 PM · Sat: 8:00 AM – 2:00 PM (GST)",
  },
  {
    title: "Coverage",
    value: "GCC Wide",
    body: "UAE, Lebanon, Jordan and across the Gulf.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay Connected"
        title="Say hi. We're here to help."
        description="We're here to answer any questions you might have. Reach out to the office nearest to you and our team will get back within one business day."
      />

      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-100">
        <StaggerGroup className="container-x grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {quickInfo.map((q, i) => (
            <StaggerItem
              key={q.title}
              direction={i === 0 ? "left" : i === 1 ? "up" : "right"}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-navy-900 hover:shadow-lg transition-[box-shadow,border-color] duration-300"
            >
              <p className="text-xs text-slate-500 uppercase tracking-[0.18em] font-semibold">
                {q.title}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-navy-900 mt-2">
                {q.value}
              </p>
              <p className="text-sm text-slate-600 mt-2">{q.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-10 md:mb-14">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Our Offices
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              Four locations, one team.
            </h2>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {offices.map((o, i) => (
              <StaggerItem
                key={o.name}
                direction={i % 2 === 0 ? "left" : "right"}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-navy-900 transition-[box-shadow,border-color] duration-300"
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-5 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                      <PinIcon />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900">
                      {o.name}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-slate-100 text-navy-900 font-semibold uppercase tracking-wider">
                    {o.country.split(",")[0]}
                  </span>
                </div>
                <dl className="space-y-3 text-sm">
                  {o.landmark && <Row label="Landmark" value={o.landmark} />}
                  {o.poBox && <Row label="P.O. Box" value={o.poBox} />}
                  <Row label="Country" value={o.country} />
                  {o.tel && (
                    <Row
                      label="Phone"
                      value={
                        <a
                          href={`tel:${o.tel.replace(/\s/g, "")}`}
                          className="text-navy-900 hover:opacity-80 font-medium"
                        >
                          {o.tel}
                        </a>
                      }
                    />
                  )}
                  {o.email && (
                    <Row
                      label="Email"
                      value={
                        <a
                          href={`mailto:${o.email}`}
                          className="text-navy-900 hover:opacity-80 font-medium"
                        >
                          {o.email}
                        </a>
                      }
                    />
                  )}
                </dl>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="container-x relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Send a Message
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900">
              Tell us about your project.
            </h2>
            <p className="mt-4 text-slate-600">
              Share your enquiry and our nearest office will respond within one
              business day.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="max-w-2xl mx-auto">
            <form
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-md grid gap-5"
              action={`mailto:${offices[0].email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                  placeholder="Tell us about your project, products of interest, and timeline."
                />
              </div>
              <button type="submit" className="btn-primary justify-center">
                Send enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </section>

    </>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] gap-3">
      <dt className="text-slate-500 uppercase text-[10px] sm:text-xs tracking-wider pt-0.5">
        {label}
      </dt>
      <dd className="text-slate-700 text-sm break-words">{value}</dd>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-navy-900"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
      />
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
