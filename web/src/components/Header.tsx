"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Pedido", href: "/pedinosite" },
  { label: "Galeria", href: "/galeria" },
  { label: "História", href: "/historia" },
  { label: "Reserva", href: "#reserva" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se for link de páginas internas, deixar navegar normalmente
    if (href === "/pedinosite" || href === "/galeria" || href === "/historia") {
      return;
    }

    // Se for Home (/), rolar para o topo
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Se for âncora (#)
    if (href.startsWith("#")) {
      // Se não estiver na home, redirecionar para home com âncora
      if (pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }

      // Se já estiver na home, fazer scroll suave
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-4 hover:opacity-80 transition">
          <div className="relative w-16 h-16 bg-white rounded-md overflow-hidden border-2 border-[#E7C36B] shadow-lg">
            <Image
              src="/images/logo.jpg"
              alt="Kinpai Sushi"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl tracking-[0.3em] text-[#E7C36B] leading-tight">
              KINPAI
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#E7C36B] font-semibold">
              20 Anos
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-stone-200 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="transition hover:text-[#E7C36B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#reserva"
          onClick={(e) => handleNavClick(e, "#reserva")}
          className="rounded-full border border-[#E7C36B]/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#E7C36B] transition hover:border-[#E7C36B] hover:bg-[#E7C36B]/10"
        >
          Reservar
        </a>
      </div>
    </motion.header>
  );
}
