"use client";

import Link from "next/link";

export default function TwentyYears() {
  const items = [
    { title: "Rodízio", description: "Experiência completa" },
    { title: "Eventos", description: "Celebrações especiais" },
    { title: "Delivery", description: "Entrega rápida" },
    { title: "Almoço Executivo", description: "Menu especial" },
    { title: "À La Carte", description: "Seleção premium" },
    { title: "Dose Dupla", description: "Promoção especial" },
  ];

  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-black to-black/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Video */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden border border-[#E7C36B]/30 shadow-2xl">
              <video
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043401180/CsXssxZRxBcpsFaM.mp4"
                controls
                className="w-full h-auto bg-black"
                poster="/images/menu-1.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E7C36B] opacity-5 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest mb-6">
              20 Anos de <span className="text-[#E7C36B]">História</span>
            </h2>
            <p className="text-stone-300 mb-4 leading-relaxed">
              Nossa história continua. Desde o início, o Kinpai se dedica a trazer a autenticidade e qualidade da culinária japonesa para Petrópolis e Valparaíso.
            </p>
            <p className="text-stone-300 mb-8 leading-relaxed">
              Ao longo de duas décadas, consolidamos nossa reputação através de experiências memoráveis e um compromisso inabalável com a excelência.
            </p>

            {/* Service Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 p-4 rounded-lg hover:border-[#E7C36B]/50 transition"
                >
                  <h3 className="text-[#E7C36B] font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-xs">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/historia"
              className="inline-block bg-[#E7C36B] text-black font-bold px-8 py-3 rounded hover:bg-[#f3d77f] transition"
            >
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
