"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    comment: "Melhor sushi de Petrópolis! 🍣 A qualidade é incomparável, ingredientes fresquíssimos e o atendimento impecável.",
    rating: 5,
    avatar: "A",
    postLink: "https://www.instagram.com/kinpaisushi/",
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    comment: "Ambiente sofisticado demais! 💎 Pratos incríveis, cada um é uma obra de arte. Vira-se cliente de primeira vez!",
    rating: 5,
    avatar: "R",
    postLink: "https://www.instagram.com/kinpaisushi/",
  },
  {
    id: 3,
    name: "Juliana Costa",
    comment: "Experiência gastronômica de outro nível! 🤯 A autenticidade da culinária japonesa em cada mordida. Recomendo muito!",
    rating: 5,
    avatar: "J",
    postLink: "https://www.instagram.com/kinpaisushi/",
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    comment: "20 anos de excelência! 👑 O rodízio é completo, delivery rápido e qualidade sempre top. Parabéns ao Kinpai!",
    rating: 5,
    avatar: "C",
    postLink: "https://www.instagram.com/kinpaisushi/",
  },
  {
    id: 5,
    name: "Marina Oliveira",
    comment: "A Nea e toda equipe são incríveis! 💕 Sempre me sinto bem-vinda. Pratos fresquíssimos e ambiente acolhedor demais.",
    rating: 5,
    avatar: "M",
    postLink: "https://www.instagram.com/kinpaisushi/",
  },
  {
    id: 6,
    name: "Felipe Augusto",
    comment: "Melhor combinado de sushi da região! 🌟 Apresentação impecável e sabor que surpreende. Voltarei com certeza!",
    rating: 5,
    avatar: "F",
    postLink: "https://www.instagram.com/kinpaisushi/",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section className="bg-gradient-to-b from-black via-black/95 to-black/90">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#E7C36B]">
            O que nossos clientes dizem
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-[0.12em] sm:text-4xl">
            Depoimentos <span className="text-[#E7C36B]">Reais</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#E7C36B]"></div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {testimonials.map((testimonial) => (
            <motion.a
              key={testimonial.id}
              href={testimonial.postLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-xl border border-[#E7C36B]/30 bg-white/5 p-6 backdrop-blur transition hover:border-[#E7C36B]/60 hover:bg-white/10"
            >
              {/* Quote Icon */}
              <div className="mb-4 text-3xl font-serif text-[#E7C36B]">"</div>

              {/* Comment */}
              <p className="mb-6 text-sm leading-relaxed text-stone-200 line-clamp-4">
                {testimonial.comment}
              </p>

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#E7C36B]">
                    ★
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E7C36B] bg-[#E7C36B]/10 font-display text-sm text-[#E7C36B]">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <span className="text-[#E7C36B] group-hover:translate-x-1 transition">
                  →
                </span>
              </div>

              {/* Instagram Badge */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  📍 Instagram
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Google Rating Badge */}
        <div className="flex flex-col items-center gap-2 text-center bg-white/5 rounded-xl p-8 border border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-[#E7C36B]">4.9</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#E7C36B] text-2xl">
                  ★
                </span>
              ))}
            </div>
          </div>
          <p className="text-stone-400">
            Baseado em mais de 1.078 avaliações no Google
          </p>
          <a
            href="https://www.instagram.com/kinpaisushi/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[#E7C36B] hover:text-[#f3d77f] transition font-semibold"
          >
            🔗 Visite nosso Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}

