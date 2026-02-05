import { ChevronLeft, ChevronRight, Instagram, Facebook, Star, MapPin, Phone, Clock } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function History() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  const carouselImages = [
    "/images/hero-sushi-premium.jpg",
    "/images/carousel-1-sushi-close.jpg",
    "/images/carousel-2-chef-hands.jpg",
    "/images/carousel-3-plating.jpg",
  ];

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#F5F1E8]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#1a1a1a]/95 backdrop-blur border-b border-[#5C4033]">
        <div className="container flex items-center justify-between h-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-[#F5F1E8] transition"
          >
            <ChevronLeft size={24} />
            Voltar
          </button>
          <h1 className="text-xl font-bold">Kinpai <span className="text-[#D4AF37]">Sushi</span></h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* ===== HERO SECTION COM CARROSSEL ===== */}
        <section className="relative w-full h-[500px] md:h-[600px] bg-[#1a1a1a]">
          <HeroCarousel images={carouselImages} />
          
          {/* Overlay com textos */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#F5F1E8]">
              A <span className="text-[#D4AF37]">História</span> do Kinpai
            </h1>
            <p className="text-lg md:text-xl text-[#D4C5B9] text-center max-w-2xl font-light">
              18 anos de tradição, autenticidade e excelência
            </p>
          </div>

          {/* Indicadores do carrossel */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-2 rounded-full transition ${
                  idx === activeTab ? "bg-[#D4AF37] w-8" : "bg-[#D4C5B9]/50 w-2"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ===== SEÇÃO HISTÓRIA ===== */}
        <section className="py-16 md:py-24 bg-[#1a1a1a]">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#D4AF37] text-[#1a1a1a] px-3 py-1 rounded-full text-xs font-bold mb-4">
                  18 ANOS DE TRADIÇÃO
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F5F1E8]">
                  Com 18 anos de dedicação
                </h2>
                <p className="text-[#D4C5B9] leading-relaxed mb-6">
                  O Kinpai é um restaurante que celebra a autenticidade da culinária japonesa, combinando sabores clássicos com um toque contemporâneo. Cada prato é uma verdadeira viagem ao Japão, preparado com ingredientes frescos e técnicas que valorizam a essência da gastronomia Oriental.
                </p>
                <p className="text-[#D4C5B9] leading-relaxed">
                  Desde sua fundação em Petrópolis, o Kinpai se consolidou como referência em sushi premium, conquistando clientes que buscam qualidade, autenticidade e uma experiência gastronômica memorável.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/hitoria/18 anos.png"
                  alt="18 Anos"
                  className="w-full h-auto rounded-lg border border-[#5C4033]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO AMBIENTE ===== */}
        <section className="py-16 md:py-24 bg-[#2C1810]">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="relative w-full aspect-video bg-[#1a1a1a] rounded-lg border border-[#5C4033] overflow-hidden">
                  <video
                    src="/images/hitoria/ambientes.mp4"
                    controls
                    className="w-full h-full object-cover"
                    poster="/images/hero-sushi-premium.jpg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F5F1E8]">
                  Sofisticação & <span className="text-[#D4AF37]">Elegância</span>
                </h2>
                <p className="text-[#D4C5B9] leading-relaxed mb-6">
                  Nossos ambientes são um convite ao refinamento e à excelência culinária. A cada detalhe, buscamos criar uma atmosfera de luxo contemporâneo onde a tradição japonesa encontra o conforto moderno.
                </p>
                <div className="bg-[#3d2415] rounded-lg p-6 border-l-4 border-[#D4AF37]">
                  <p className="text-[#D4AF37] italic font-light">
                    "Venha vivenciar uma experiência única de sabores, elegância e momentos inesquecíveis."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO CHEF ===== */}
        <section className="py-16 md:py-24 bg-[#1a1a1a]">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F5F1E8]">
                  <span className="text-[#D4AF37]">Arte</span> & Expertise
                </h2>
                <p className="text-[#D4C5B9] leading-relaxed mb-6">
                  Nosso chef traz técnicas refinadas e um profundo conhecimento da culinária japonesa. Com seleção rigorosa de ingredientes importados, cada prato é preparado com dedicação absoluta.
                </p>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">
                  Qualidade em Cada Detalhe
                </h3>
                <p className="text-[#D4C5B9] leading-relaxed">
                  A paixão pelo ofício reflete em cada movimento, em cada corte, em cada combinação de sabores que chega até sua mesa. Uma verdadeira experiência gastronômica.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/hitoria/chef.png"
                  alt="Chef"
                  className="w-full h-auto rounded-lg border border-[#5C4033]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO EQUIPE ===== */}
        <section className="py-16 md:py-24 bg-[#2C1810]">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F1E8]">
                O Time <span className="text-[#D4AF37]">Kinpai</span>
              </h2>
              <p className="text-[#D4C5B9] text-lg">
                Profissionais qualificados dedicados à excelência
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/hitoria/equipe.png"
                  alt="Equipe"
                  className="w-full h-auto rounded-lg border border-[#5C4033]"
                />
              </div>
              <div>
                <p className="text-[#D4C5B9] leading-relaxed mb-8">
                  Esse é o time Kinpai, responsável pelo alto padrão que faz a diferença. São profissionais qualificados e dedicados que garantem a excelência do nosso restaurante.
                </p>
                <div className="bg-[#3d2415] rounded-lg p-8 border-l-4 border-[#D4AF37]">
                  <p className="text-lg font-light text-[#D4AF37]">
                    Agradecemos a cada um pelo trabalho impecável que sustenta nossa reputação e conquista de nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO NEA ===== */}
        <section className="py-16 md:py-24 bg-[#1a1a1a]">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#F5F1E8]">
                  Nea - A <span className="text-[#D4AF37]">Visionária</span>
                </h2>
                <p className="text-xl font-semibold text-[#D4AF37] mb-6">
                  "Uma paraibana, bem petropolitana e quase japonesa!"
                </p>
                <p className="text-[#D4C5B9] leading-relaxed mb-6">
                  Morando em Petrópolis há 30 anos e com mais de 25 anos de experiência em restaurante japonês, Nea traz ao Kinpai sua paixão pela culinária com muita criatividade, alegria e administração de uma equipe premium.
                </p>
                <div className="bg-[#2C1810] rounded-lg p-8 border border-[#5C4033]">
                  <p className="text-[#D4AF37] italic font-light mb-4">
                    "São quase 18 anos se dedicando ao Kinpai e à satisfação dos seus clientes."
                  </p>
                  <p className="text-[#D4C5B9] font-semibold">
                    ✨ Conte uma história sua com a Nea!
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/hitoria/nea.png"
                  alt="Nea"
                  className="w-full h-auto rounded-lg border border-[#5C4033]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 20 ANOS ===== */}
        <section className="py-16 md:py-24 bg-[#2C1810]">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F1E8]">
                20 Anos de <span className="text-[#D4AF37]">Excelência</span>
              </h2>
              <p className="text-[#D4C5B9] text-lg">
                Celebrando duas décadas de tradição e qualidade
              </p>
            </div>
            <div className="mb-8">
              <img
                src="/images/hitoria/kinpai sushi 20 anos #######-02.jpg.jpeg"
                alt="20 Anos Kinpai Sushi"
                className="w-full h-auto rounded-lg border border-[#5C4033] shadow-2xl"
              />
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-8 border-l-4 border-[#D4AF37] text-center">
              <p className="text-lg md:text-xl font-light text-[#D4AF37] italic">
                "De uma pequena casa de sushi a uma referência gastronômica, o Kinpai cresceu com você. Cada ano representa um compromisso renovado com a excelência culinária e a satisfação dos nossos clientes."
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="py-16 md:py-20 bg-[#1a1a1a]">
          <div className="container max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#F5F1E8]">
              Faça Parte da Nossa História
            </h2>
            <p className="text-[#D4C5B9] text-lg mb-8">
              Experiencie a tradição, qualidade e paixão que definem o Kinpai há quase duas décadas
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#1a1a1a] font-bold uppercase tracking-widest py-4 px-10 rounded-lg transition transform hover:scale-105 inline-block"
            >
              Fazer um Pedido
            </button>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0f0f0f] border-t border-[#5C4033] py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Sobre */}
            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Sobre</h4>
              <p className="text-[#D4C5B9] text-sm">
                Kinpai Sushi: Tradição, qualidade e luxo em cada prato.
              </p>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/kinpaisushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5F1E8] transition"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/kinpai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5F1E8] transition"
                  title="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.tripadvisor.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5F1E8] transition"
                  title="TripAdvisor"
                >
                  <Star size={20} />
                </a>
              </div>
            </div>

            {/* Informações */}
            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Localização</h4>
              <div className="text-[#D4C5B9] text-sm space-y-2">
                <p><strong>Endereço:</strong></p>
                <p>R. Gonçalves Dias, 423</p>
                <p>Valparaíso, Petrópolis - RJ</p>
                <p>25655-122</p>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Contato</h4>
              <div className="text-[#D4C5B9] text-sm space-y-2">
                <p>
                  <strong>Telefone:</strong><br/>
                  <a href="tel:+5524988622" className="hover:text-[#D4AF37] transition">
                    (24) 98862-2222
                  </a>
                </p>
                <p>
                  <strong>Email:</strong><br/>
                  <a href="mailto:contato@kinpai.com.br" className="hover:text-[#D4AF37] transition">
                    contato@kinpai.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#5C4033] pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <p className="text-[#D4C5B9] text-sm">
                &copy; 2026 Kinpai Sushi. Todos os direitos reservados.
              </p>
              <a
                href="https://www.instagram.com/essencial_comunicacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition flex items-center gap-2"
                title="Essencial Comunicação"
              >
                <img
                  src="/images/logoessencial.jpg"
                  alt="Essencial Comunicação"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="sr-only">Essencial Comunicação</span>
              </a>
            </div>
            <div className="text-center text-[#D4C5B9] text-xs">
              <p>Desenvolvido por Essencial Comunicação</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
