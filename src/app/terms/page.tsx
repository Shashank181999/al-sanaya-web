import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/content";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Al Sanaya Technical Equipment LLC's website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Al Sanaya Technical Equipment L.L.C ("Al Sanaya", "we", "us", "our") website, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of this website.`,
  },
  {
    title: "2. Use of the Website",
    body: `This website and its content are provided for general information about our products, services and projects. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, this website by any third party.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All content on this website — including text, graphics, logos, images, brand marks (Linkk, Megaduct) and software — is the property of Al Sanaya or its partners and licensors and is protected by applicable intellectual property laws. No content may be copied, reproduced, republished, or transmitted without our prior written consent.`,
  },
  {
    title: "4. Products & Services",
    body: `Product specifications, availability and project references shown on this site are indicative and may change without notice. Final supply, testing and commissioning terms are governed by the formal quotation, purchase order or contract issued by Al Sanaya for each project.`,
  },
  {
    title: "5. Limitation of Liability",
    body: `Information on this website is provided "as is" without warranties of any kind. To the maximum extent permitted by law, Al Sanaya shall not be liable for any direct, indirect, incidental or consequential damages arising from the use of, or inability to use, this website.`,
  },
  {
    title: "6. Third-Party Links",
    body: `This website may contain links to third-party websites. We are not responsible for the content, policies or practices of any linked third-party site.`,
  },
  {
    title: "7. Governing Law",
    body: `These Terms & Conditions are governed by the laws of the United Arab Emirates. Any dispute arising in connection with this website shall be subject to the exclusive jurisdiction of the courts of Abu Dhabi.`,
  },
  {
    title: "8. Changes to These Terms",
    body: `We may revise these Terms & Conditions at any time by updating this page. Your continued use of the website after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: "9. Contact",
    body: `For any questions regarding these Terms & Conditions, please contact us at ${company.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website or engaging our services."
      />

      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="text-sm text-slate-500 mb-10">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </Reveal>
          <div className="space-y-8 md:space-y-10">
            {sections.map((s) => (
              <Reveal key={s.title}>
                <h2 className="text-xl md:text-2xl font-bold text-navy-900">
                  {s.title}
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
