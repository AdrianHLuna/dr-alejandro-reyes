import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialty} en ${doctor.city}`,
  description: doctor.bio.substring(0, 150) + "...",
  keywords: [
    `Especialista en ${doctor.specialty} en ${doctor.city}`,
    `Biología de la reproducción`,
    `Embarazo de alto riesgo Santa Fe`,
    `Endometriosis`,
    `Miomas uterinos`
  ],
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialty}`,
    description: doctor.bio.substring(0, 150) + "...",
    url: "http://localhost:3005",
    siteName: `${doctor.title} ${doctor.name}`,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-background">
        <GoogleAnalytics />
        <Header />
        
        {/* pt-32 offset container for the floating pill nav bar at the top */}
        <div className="flex-grow flex flex-col pt-32">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        <FloatingButtons />
      </body>
    </html>
  );
}
