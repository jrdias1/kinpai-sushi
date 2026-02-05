import { Button } from "@/components/ui/button";
import { ChevronLeft, Instagram, Facebook, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function History() {
  const [, navigate] = useLocation();

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
        <div className="container max-w-4xl">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="bg-[#2C1810] border border-[#5C4033] rounded-lg p-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Conheça Nossa <span className="text-[#D4AF37]">História</span>
              </h1>
              <p className="text-xl text-[#D4C5B9] font-light">
                Dois séculos de tradição, qualidade e paixão pela culinária japonesa
              </p>
            </div>
          </section>

          {/* Timeline/History */}
          <section className="space-y-12">
            {/* 2004 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <h3 className="text-2xl font-bold text-[#D4AF37]">2004</h3>
              </div>
              <div className="flex-grow border-l-2 border-[#D4AF37] pl-8 pb-8">
                <h4 className="text-xl font-bold mb-3">O Início</h4>
                <p className="text-[#D4C5B9] leading-relaxed">
                  Tudo começou com o sonho do Chef Nunes de trazer a autenticidade da culinária japonesa 
                  para Petrópolis. Com técnica refinada e seleção rigorosa de ingredientes frescos importados, 
                  o Kinpai Sushi abriu suas portas em Valparaíso como uma experiência gastronômica diferenciada.
                </p>
              </div>
            </div>

            {/* 2010 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <h3 className="text-2xl font-bold text-[#D4AF37]">2010</h3>
              </div>
              <div className="flex-grow border-l-2 border-[#D4AF37] pl-8 pb-8">
                <h4 className="text-xl font-bold mb-3">Consolidação da Marca</h4>
                <p className="text-[#D4C5B9] leading-relaxed">
                  Após seis anos de dedicação e inovação constante, Kinpai se consolidou como referência 
                  em sushi premium na região. A reputação cresceu através de clientes satisfeitos e prêmios 
                  de qualidade em diversos concursos gastronômicos.
                </p>
              </div>
            </div>

            {/* 2016 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <h3 className="text-2xl font-bold text-[#D4AF37]">2016</h3>
              </div>
              <div className="flex-grow border-l-2 border-[#D4AF37] pl-8 pb-8">
                <h4 className="text-xl font-bold mb-3">Expansão de Serviços</h4>
                <p className="text-[#D4C5B9] leading-relaxed">
                  Introduzimos serviços de rodízio especial, eventos corporativos e almoço executivo, 
                  expandindo nossa capacidade de servir diversos públicos mantendo sempre o padrão de 
                  qualidade premium que nos caracteriza.
                </p>
              </div>
            </div>

            {/* Hoje */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <h3 className="text-2xl font-bold text-[#D4AF37]">2026</h3>
              </div>
              <div className="flex-grow border-l-2 border-[#D4AF37] pl-8 pb-8">
                <h4 className="text-xl font-bold mb-3">Presente & Futuro</h4>
                <p className="text-[#D4C5B9] leading-relaxed">
                  Com mais de duas décadas de excelência, continuamos evoluindo e trazendo inovação. 
                  Agora também oferecemos delivery com embalagem premium e presença digital forte, 
                  mantendo nosso compromisso com tradição e qualidade em cada prato.
                </p>
              </div>
            </div>
          </section>

          {/* Filosofia */}
          <section className="mt-20 bg-[#2C1810] border border-[#5C4033] rounded-lg p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Nossa <span className="text-[#D4AF37]">Filosofia</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🇯🇵</div>
                <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Autenticidade</h3>
                <p className="text-[#D4C5B9]">
                  Respeitamos as técnicas tradicionais da culinária japonesa com rigor absoluto.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Qualidade</h3>
                <p className="text-[#D4C5B9]">
                  Selecionamos apenas ingredientes premium importados para nossas criações.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">Paixão</h3>
                <p className="text-[#D4C5B9]">
                  Cada prato é preparado com dedicação e amor pela gastronomia.
                </p>
              </div>
            </div>
          </section>

          {/* Chef Section */}
          <section className="mt-20 bg-gradient-to-r from-[#2C1810] to-[#1a1a1a] border border-[#5C4033] rounded-lg p-12">
            <h2 className="text-4xl font-bold mb-6">Chef <span className="text-[#D4AF37]">Nunes</span></h2>
            <p className="text-[#D4C5B9] text-lg leading-relaxed mb-6">
              Com mais de 25 anos de experiência na culinária japonesa, o Chef Nunes é o coração do Kinpai. 
              Formado em técnicas tradicionais no Japão, traz inovação mantendo o respeito à tradição. 
              Sua paixão por ingredientes frescos e técnicas precisas é evidente em cada prato que sai de sua cozinha.
            </p>
            <p className="text-[#D4C5B9] text-lg leading-relaxed">
              O Chef acredita que a gastronomia é uma forma de arte e comunicação, onde cada cliente 
              recebe uma experiência memorável, não apenas uma refeição.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center">
            <p className="text-xl text-[#D4C5B9] mb-8">
              Experiencie a tradição e qualidade que nos definem há mais de 20 anos
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#D4AF37] hover:bg-[#E5C158] text-[#1a1a1a] font-bold uppercase tracking-widest py-3 px-8 rounded transition"
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
                className="hover:opacity-80 transition"
                title="Essencial Comunicação"
              >
                <img
                  src="/images/logoessencial.png"
                  alt="Essencial Comunicação"
                  className="h-12 w-auto object-contain"
                />
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
