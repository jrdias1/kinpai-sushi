"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaGoogle, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }

      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black/95 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="font-display text-[#E7C36B] text-lg tracking-widest mb-4">
              Sobre
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Kinpai Sushi: Tradição, qualidade e luxo em cada prato.
            </p>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-display text-[#E7C36B] text-lg tracking-widest mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kinpaisushi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded border border-[#E7C36B] text-[#E7C36B] hover:bg-[#E7C36B] hover:text-black transition"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/kinpai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded border border-[#E7C36B] text-[#E7C36B] hover:bg-[#E7C36B] hover:text-black transition"
                title="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.google.com/search?q=kinpai+sushi+petr%C3%B3polis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded border border-[#E7C36B] text-[#E7C36B] hover:bg-[#E7C36B] hover:text-black transition"
                title="Google"
              >
                <FaGoogle size={20} />
              </a>
              <a
                href="https://www.tripadvisor.com.br/Restaurant_Review-g317158-d12345678-Kinpai_Sushi-Petropolis_State_of_Rio_de_Janeiro.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded border border-[#E7C36B] text-[#E7C36B] hover:bg-[#E7C36B] hover:text-black transition"
                title="TripAdvisor"
              >
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>

          {/* Informações */}
          <div>
            <h3 className="font-display text-[#E7C36B] text-lg tracking-widest mb-4">
              Informações
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-white text-sm">CNPJ:</p>
                <p className="text-stone-300 text-sm">08.273.490/0001-01</p>
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Endereço:</p>
                <p className="text-stone-300 text-sm">
                  R. Gonçalves Dias, 423<br />
                  Valparaíso, Petrópolis - RJ<br />
                  25655-122
                </p>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-[#E7C36B] text-lg tracking-widest mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-white text-sm">Telefone:</p>
                <a
                  href="tel:+5524988622222"
                  className="text-stone-300 text-sm hover:text-[#E7C36B] transition"
                >
                  (24) 98862-2222
                </a>
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Email:</p>
                <a
                  href="mailto:contato@kinpai.com.br"
                  className="text-stone-300 text-sm hover:text-[#E7C36B] transition"
                >
                  contato@kinpai.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright */}
          <div className="text-center mb-6">
            <p className="text-stone-400 text-sm">
              © 2026 Kinpai Sushi. Todos os direitos reservados.
            </p>
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-stone-500 text-xs">
              Desenvolvido com ❤️ para Kinpai Sushi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
