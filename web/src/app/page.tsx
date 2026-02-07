import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Location from "@/components/Location";
import Menu from "@/components/Menu";
import TwentyYears from "@/components/TwentyYears";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kinpai Sushi - Melhor Restaurante Japonês em Petrópolis RJ",
  description: "Kinpai Sushi: 20 anos de tradição em culinária autêntica japonesa. Confira nosso cardápio premium, reserva online e galeria de fotos. 4.9★ com 1.078 avaliações.",
  keywords: "sushi Petrópolis, restaurante japonês, rodízio sushi, culinária japonesa premium, Kinpai Sushi, Petrópolis RJ, comida oriental",
  openGraph: {
    title: "Kinpai Sushi - Restaurante Japonês Premium em Petrópolis",
    description: "Experimente a verdadeira culinária japonesa. 20 anos de excelência, ambiente sofisticado e pratos autênticos.",
    url: "https://kinpai-sushiv2.vercel.app/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="bg-[#070707] text-stone-100">
      <Loader />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Menu />
        <TwentyYears />
        <Testimonials />
        <Gallery />
        <CTA />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
