import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
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
              Last updated: {updated}
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
