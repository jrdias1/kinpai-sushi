import { ChevronLeft, Instagram, Facebook, Star, Award, Users, Home, Smile } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function History() {
  const [, navigate] = useLocation();
  const [activeSection, setActiveSection] = useState<string>("historia");

  const sections = [
    { id: "historia", label: "História", icon: "📖" },
    { id: "ambiente", label: "Ambiente", icon: "🏮" },
    { id: "chef", label: "Chef", icon: "👨‍🍳" },
    { id: "equipe", label: "Equipe", icon: "👥" },
    { id: "nea", label: "Nea", icon: "👩" },
    { id: "kinpai", label: "20 Anos", icon: "🎉" },
  ];

  const historiContent = {
    anos: "18 Anos de Tradição",
    titulo: "Com 18 anos de dedicação, o Kinpai é um restaurante que celebra a autenticidade da culinária japonesa",
    descricao: "Combinando sabores clássicos com um toque contemporâneo, cada prato é uma verdadeira viagem ao Japão. Preparado com ingredientes frescos e técnicas que valorizam a essência da gastronomia Oriental, o Kinpai se consolidou como referência em sushi premium em Petrópolis."
  };

  const ambienteContent = {
    titulo: "Sofisticação e Prazer Gastronômico",
    descricao: "Nossos ambientes são um convite ao refinamento e à excelência culinária. A cada detalhe, buscamos criar uma atmosfera de luxo contemporâneo onde a tradição japonesa encontra o conforto moderno.",
    subDescricao: "Venha vivenciar uma experiência única de sabores, elegância e momentos inesquecíveis."
  };

  const chefContent = {
    titulo: "Arte e Expertise",
    descricao: "Nosso chef traz técnicas refinadas e um profundo conhecimento da culinária japonesa. Com seleção rigorosa de ingredientes importados, cada prato é preparado com dedicação absoluta para proporcionar uma experiência gastronômica extraordinária.",
    subTitulo: "Qualidade em Cada Detalhe",
    subDescricao: "A paixão pelo ofício reflete em cada movimento, em cada corte, em cada combinação de sabores que chega até sua mesa."
  };

  const equipContent = {
    titulo: "O Time Kinpai",
    descricao: "Esse é o time Kinpai, responsável pelo alto padrão que faz a diferença. São profissionais qualificados e dedicados que garantem a excelência do nosso restaurante.",
    destaque: "Agradecemos a cada um pelo trabalho impecável que sustenta nossa reputação."
  };

  const neaContent = {
    titulo: "Nea - A Visionária",
    subtitulo: "Uma paraibana, bem petropolitana e quase japonesa!",
    descricao: "Morando em Petrópolis há 30 anos e com mais de 25 anos de experiência em restaurante japonês, Nea traz ao Kinpai sua paixão pela culinária com muita criatividade, alegria e a administração de uma equipe premium com atendimento personalizado.",
    destaque: "São quase 18 anos se dedicando ao Kinpai e à satisfação dos seus clientes.",
    cta: "Conte uma história sua com a Nea!"
  };

  const kinpaiContent = {
    titulo: "20 Anos de Excelência",
    descricao: "Celebramos duas décadas de tradição, qualidade e dedicação. Cada ano representa um compromisso renovado com a excelência culinária e a satisfação dos nossos clientes.",
    mensagem: "De uma pequena casa de sushi a uma referência gastronômica, o Kinpai cresceu com você."
  };

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
          <h1 className="text-2xl font-bold">Kinpai <span className="text-[#D4AF37]">Sushi</span></h1>
          <div></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Conheça Nossa <span className="text-[#D4AF37]">História</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
              <p className="text-lg text-[#D4C5B9] font-light">
                Tradição, paixão e excelência em cada prato
              </p>
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`py-3 px-2 text-center rounded-lg transition font-semibold text-sm md:text-base ${
                    activeSection === section.id
                      ? "bg-[#D4AF37] text-[#1a1a1a]"
                      : "bg-[#2C1810] text-[#D4AF37] hover:bg-[#3d2415] border border-[#5C4033]"
                  }`}
                >
                  <div className="text-lg mb-1">{section.icon}</div>
                  {section.label}
                </button>
              ))}
            </div>
          </section>

          {/* Content Sections */}
          <section className="space-y-8">
            {/* HISTÓRIA */}
            {activeSection === "historia" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12">
                  <div className="mb-6">
                    <span className="inline-block bg-[#D4AF37] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-bold">
                      {historiContent.anos}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F1E8]">
                    {historiContent.titulo}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
                  <p className="text-lg text-[#D4C5B9] leading-relaxed mb-6">
                    {historiContent.descricao}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#5C4033]">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">18+</div>
                      <p className="text-sm text-[#D4C5B9]">Anos de Excelência</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">100%</div>
                      <p className="text-sm text-[#D4C5B9]">Ingredientes Frescos</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">♾️</div>
                      <p className="text-sm text-[#D4C5B9]">Tradição Contínua</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AMBIENTE */}
            {activeSection === "ambiente" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">🏮</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F5F1E8]">
                      {ambienteContent.titulo}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
                  <p className="text-lg text-[#D4C5B9] leading-relaxed mb-6">
                    {ambienteContent.descricao}
                  </p>
                  <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#5C4033]">
                    <p className="text-xl text-[#D4AF37] italic font-light">
                      "{ambienteContent.subDescricao}"
                    </p>
                  </div>
                  {/* Ambiente Video/Image */}
                  <div className="mt-8">
                    <div className="relative w-full aspect-video bg-[#1a1a1a] rounded-lg border border-[#5C4033] overflow-hidden">
                      <video
                        src="/images/hitoria/ambientes.mp4"
                        controls
                        className="w-full h-full object-cover"
                        poster="/images/hero-sushi-premium.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CHEF */}
            {activeSection === "chef" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">👨‍🍳</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F5F1E8]">
                      {chefContent.titulo}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
                  <p className="text-lg text-[#D4C5B9] leading-relaxed mb-8">
                    {chefContent.descricao}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                        {chefContent.subTitulo}
                      </h3>
                      <p className="text-[#D4C5B9] leading-relaxed">
                        {chefContent.subDescricao}
                      </p>
                    </div>
                    <div className="relative">
                      <img
                        src="/images/hitoria/chef.png"
                        alt="Chef"
                        className="w-full h-full object-cover rounded-lg border border-[#5C4033]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* EQUIPE */}
            {activeSection === "equipe" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">👥</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F5F1E8]">
                      {equipContent.titulo}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
                  <p className="text-lg text-[#D4C5B9] leading-relaxed mb-6">
                    {equipContent.descricao}
                  </p>
                  <div className="bg-[#1a1a1a] rounded-lg p-8 border-l-4 border-[#D4AF37]">
                    <p className="text-xl font-light text-[#D4AF37]">
                      {equipContent.destaque}
                    </p>
                  </div>
                  <div className="mt-8">
                    <img
                      src="/images/hitoria/equipe.png"
                      alt="Equipe"
                      className="w-full h-auto rounded-lg border border-[#5C4033]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* NEA */}
            {activeSection === "nea" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">👩</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F5F1E8]">
                      {neaContent.titulo}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
                  <p className="text-2xl font-bold text-[#D4AF37] mb-6">
                    {neaContent.subtitulo}
                  </p>
                  <p className="text-lg text-[#D4C5B9] leading-relaxed mb-8">
                    {neaContent.descricao}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#5C4033]">
                      <p className="text-lg font-light text-[#D4AF37] italic mb-6">
                        "{neaContent.destaque}"
                      </p>
                      <p className="text-lg font-semibold text-[#D4C5B9]">
                        {neaContent.cta}
                      </p>
                    </div>
                    <div className="relative">
                      <img
                        src="/images/hitoria/nea.png"
                        alt="Nea"
                        className="w-full h-full object-cover rounded-lg border border-[#5C4033]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 20 ANOS */}
            {activeSection === "kinpai" && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-[#2C1810] to-[#3d2415] border border-[#5C4033] rounded-xl p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-4xl">🎉</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F5F1E8]">
                      {kinpaiContent.titulo}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
                  <p className="text-lg text-[#D4C5B9] leading-relaxed mb-8">
                    {kinpaiContent.descricao}
                  </p>
                  <div className="relative w-full">
                    <img
                      src="/images/hitoria/kinpai sushi 20 anos #######-02.jpg.jpeg"
                      alt="20 Anos Kinpai Sushi"
                      className="w-full h-auto rounded-lg border border-[#5C4033] shadow-2xl"
                    />
                  </div>
                  <div className="mt-8 bg-[#1a1a1a] rounded-lg p-8 border-l-4 border-[#D4AF37]">
                    <p className="text-xl font-light text-[#D4AF37] italic">
                      {kinpaiContent.mensagem}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* CTA Final */}
          <section className="mt-16 text-center">
            <p className="text-xl text-[#D4C5B9] mb-8">
              Faça parte de nossa história de tradição e excelência
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#1a1a1a] font-bold uppercase tracking-widest py-4 px-10 rounded-lg transition transform hover:scale-105"
            >
              Fazer um Pedido
            </button>
          </section>
        </div>
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
                  href="https://www.tripadvisor.com.br/Restaurant_Review-g303504-d6007492-Reviews-Kinpai_SushiBar-Petropolis_State_of_Rio_de_Janeiro.html"
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
              <h4 className="font-bold mb-4 text-[#D4AF37]">Informações</h4>
              <div className="text-[#D4C5B9] text-sm space-y-2">
                <p><strong>CNPJ:</strong> XX.XXX.XXX/0001-XX</p>
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

      {/* Animações CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
