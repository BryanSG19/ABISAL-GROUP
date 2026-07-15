import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABISAL GROUP — La inteligencia detrás del crecimiento del mañana",
  description:
    "ABISAL GROUP diseña marcos de trabajo a la medida que convierten la inteligencia artificial y las nuevas formas de trabajar en decisiones más confiables, operaciones más inteligentes y un desempeño empresarial medible.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
