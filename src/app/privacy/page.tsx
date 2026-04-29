import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/content";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Al Sanaya Technical Equipment LLC collects, uses and protects your personal information.",
};

const sections = [
  {
    title: "1. Introduction",
    body: `Al Sanaya Technical Equipment L.L.C ("Al Sanaya", "we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect when you use our website or engage with us, how we use it, and the choices you have.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect information you provide directly — such as your name, company, email address, phone number and project enquiry details — when you contact us, request a quotation, or submit a form on this website. We may also collect basic technical information automatically (such as IP address, browser type, pages visited and referring URL) to operate and improve the website.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use your information to respond to enquiries, prepare quotations, supply equipment and services, manage ongoing projects, send relevant business communications, comply with legal obligations, and improve the security and performance of our website.`,
  },
  {
    title: "4. Sharing of Information",
    body: `We do not sell your personal information. We may share it only with trusted partners and suppliers (such as our authorised principals Linkk and Megaduct) where required to fulfil a project, with service providers acting on our behalf under appropriate confidentiality obligations, or where required by law.`,
  },
  {
    title: "5. Cookies & Analytics",
    body: `Our website may use cookies and similar technologies to remember preferences and to understand how visitors use the site. You can disable cookies in your browser settings; some parts of the site may not function as intended without them.`,
  },
  {
    title: "6. Data Security",
    body: `We implement reasonable technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is fully secure.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting or contractual reporting requirements.`,
  },
  {
    title: "8. Your Rights",
    body: `Subject to applicable law, you may request access to, correction of, or deletion of the personal information we hold about you, and you may object to or restrict certain processing. To exercise these rights, please contact us using the details below.`,
  },
  {
    title: "9. Third-Party Links",
    body: `Our website may link to other websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. The latest version will always be posted on this page with the updated date.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have any questions about this Privacy Policy or how we handle your information, please contact us at ${company.email} or ${company.primaryPhone}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect the personal information you share with us."
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
