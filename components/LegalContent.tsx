export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalContentProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalContent({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: LegalContentProps) {
  return (
    <section className="relative bg-abyss section-pad">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-3xl font-thin leading-tight text-bone md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-sm text-mutedgray">Last updated: {updated}</p>
          <p className="mt-8 text-base leading-relaxed text-coolgray">
            {intro}
          </p>
        </div>

        <div className="mt-16 max-w-3xl divide-y divide-white/[0.08] border-t border-white/[0.08]">
          {sections.map((section) => (
            <div key={section.heading} className="py-10 first:pt-0">
              <h2 className="text-lg font-semibold text-bone md:text-xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-coolgray md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
