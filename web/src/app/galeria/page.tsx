"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

const galleryImages = [
  { src: "/images/hero-sushi-premium.jpg", title: "Sushi Premium", category: "Pratos" },
  { src: "/images/carousel-1-sushi-close.jpg", title: "Sushi de Perto", category: "Pratos" },
  { src: "/images/carousel-3-plating.jpg", title: "Arte no Prato", category: "Pratos" },
  { src: "/images/hero.jpg", title: "Composição Especial", category: "Pratos" },
  { src: "/images/menu-1.jpg", title: "Especialidades", category: "Pratos" },
  { src: "/images/menu-2.jpg", title: "Menu Selecionado", category: "Pratos" },
  { src: "/images/menu-3.jpg", title: "Delícias Japonesas", category: "Pratos" },
  { src: "/images/carousel-2-chef-hands.jpg", title: "Mãos do Chef", category: "Equipe" },
  { src: "/images/chef-authority.jpg", title: "Chef em Ação", category: "Equipe" },
  { src: "/images/chef/chef (1).jpeg", title: "Nosso Chef", category: "Equipe" },
  { src: "/images/chef/chef (2).jpeg", title: "Preparo Artesanal", category: "Equipe" },
  { src: "/images/chef/chef (3).jpeg", title: "Técnica Japonesa", category: "Equipe" },
  { src: "/images/gallery-1.jpg", title: "Nossa Equipe", category: "Equipe" },
  { src: "/images/gallery-2.jpg", title: "Trabalho em Equipe", category: "Equipe" },
  { src: "/images/about.jpg", title: "Ambiente Sofisticado", category: "Ambiente" },
];

const carouselImages = [
  "/images/hero-sushi-premium.jpg",
  "/images/carousel-1-sushi-close.jpg",
  "/images/carousel-2-chef-hands.jpg",
  "/images/carousel-3-plating.jpg",
  "/images/gallery-1.jpg",
  "/images/about.jpg",
];

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const categories = ["Todos", "Pratos", "Equipe", "Ambiente"];

  const filteredImages =
    filter === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[400px] mt-20">
        <HeroCarousel images={carouselImages} autoPlayInterval={3000} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40">
          <h1 className="font-display text-5xl tracking-widest text-center">
            Nossa <span className="text-[#E7C36B]">Galeria</span>
          </h1>
          <p className="mt-4 text-lg text-stone-300">
            Momentos e sabores que contam nossa história
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-black/50 py-8 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition ${
                  filter === cat
                    ? "bg-[#E7C36B] text-black"
                    : "bg-white/5 text-stone-300 border border-white/10 hover:border-[#E7C36B]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {filteredImages.length === 0 ? (
            <div className="flex min-h-96 items-center justify-center">
              <p className="text-stone-400 text-lg">
                Nenhuma imagem encontrada nesta categoria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(image.src)}
                  className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 cursor-pointer hover:border-[#E7C36B]/50 transition"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[#E7C36B] text-xs uppercase tracking-wider mb-1">
                        {image.category}
                      </p>
                      <h3 className="font-display text-xl tracking-wide">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-[#E7C36B] transition"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#E7C36B]/10 to-transparent border-t border-[#E7C36B]/30 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl tracking-widest mb-4">
            Faça Parte da Nossa História
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Venha viver momentos inesquecíveis e criar suas próprias memórias conosco.
          </p>
          <a
            href="/pedinosite"
            className="inline-block bg-[#E7C36B] text-black font-bold px-8 py-3 rounded hover:bg-[#f3d77f] transition"
          >
            Fazer um Pedido
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
