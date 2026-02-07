import Section from "./Section";
import HeroCarousel from "./HeroCarousel";
import Link from "next/link";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/about.jpg",
  "/images/menu-1.jpg",
];

export default function Gallery() {
  return (
    <Section id="galeria" className="bg-black/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#E7C36B]">
              Galeria
            </p>
            <h2 className="font-display text-3xl tracking-[0.12em] sm:text-4xl">
              Uma experiencia que vai alem do sabor
            </h2>
            <p className="text-base leading-relaxed text-stone-300">
              Atmosfera, apresentacao e cuidado. Cada visita se transforma em um
              ritual memoravel.
            </p>
            <Link
              href="/galeria"
              className="inline-block bg-[#E7C36B] text-black font-bold px-6 py-3 rounded hover:bg-[#f3d77f] transition"
            >
              Ver Galeria Completa
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <HeroCarousel images={galleryImages} autoPlayInterval={3000} />
          </div>
        </div>
      </div>
    </Section>
  );
}
