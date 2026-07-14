import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

type LegalPageProps = {
  titleEn: string;
  titleEs: string;
  lastUpdated: string;
  introEn: string;
  introEs: string;
  sectionsEn: LegalSection[];
  sectionsEs: LegalSection[];
};

function LegalBlock({
  eyebrow,
  title,
  updatedLabel,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold text-bone md:text-5xl">{title}</h1>
      <p className="mt-4 text-xs text-mutedgray md:text-sm">
        {updatedLabel}: {lastUpdated}
      </p>
      <p className="mt-8 text-sm leading-relaxed text-coolgray md:text-base">
        {intro}
      </p>
      {sections.map((section) => (
        <div key={section.heading} className="mt-10">
          <h2 className="text-lg font-semibold text-bone md:text-xl">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph, i) => (
            <p
              key={i}
              className="mt-3 text-sm leading-relaxed text-coolgray md:text-base"
            >
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-coolgray md:text-base">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LegalPage({
  titleEn,
  titleEs,
  lastUpdated,
  introEn,
  introEs,
  sectionsEn,
  sectionsEs,
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="bg-abyss pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="container-content max-w-3xl">
          <LegalBlock
            eyebrow="Legal"
            title={titleEn}
            updatedLabel="Last updated"
            lastUpdated={lastUpdated}
            intro={introEn}
            sections={sectionsEn}
          />

          <div className="my-20 border-t border-white/[0.08]" />

          <LegalBlock
            eyebrow="Legal"
            title={titleEs}
            updatedLabel="Última actualización"
            lastUpdated={lastUpdated}
            intro={introEs}
            sections={sectionsEs}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
