import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  locale = "en",
  children,
}: {
  title: string;
  updated: string;
  locale?: "es" | "en";
  children: React.ReactNode;
}) {
  const updatedLabel =
    locale === "es" ? "Última actualización" : "Last updated";

  return (
    <>
      <Header />
      <main className="bg-abyss">
        <section className="section-pad">
          <div className="container-content max-w-3xl">
            <h1 className="text-3xl font-thin text-bone md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-mutedgray">
              {updatedLabel}: {updated}
            </p>
            <div className="prose-legal mt-12 space-y-8 text-base leading-relaxed text-coolgray">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
