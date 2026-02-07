"use client";

import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

const carouselImages = [
  "/images/hero-sushi-premium.jpg",
  "/images/carousel-1-sushi-close.jpg",
  "/images/carousel-2-chef-hands.jpg",
  "/images/carousel-3-plating.jpg",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <HeroCarousel images={carouselImages} autoPlayInterval={3000} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs uppercase tracking-[0.6em] text-[#E7C36B]"
        >
          Kinpai Sushi
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display mt-6 text-2xl tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl"
        >
          A arte da culinaria japonesa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base text-stone-200 sm:text-lg"
        >
          Um encontro entre tecnica, frescor e uma atmosfera que celebra cada
          detalhe.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#reserva"
            className="rounded-full bg-[#E7C36B] px-6 py-3 text-xs uppercase tracking-[0.3em] text-black transition hover:bg-[#f3d77f]"
          >
            Reservar mesa
          </a>
          <a
            href="/pedinosite"
            className="rounded-full border border-white/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white"
          >
            Ver cardapio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
