import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa História - 20 Anos de Tradição | Kinpai Sushi",
  description: "Conheça os 20 anos de história do Kinpai Sushi. De 2004 até hoje, tradição, qualidade e inovação em pratos e ambiente sofisticado.",
  keywords: "história Kinpai Sushi, 20 anos, tradição sushi, culinária japonesa, chef especializado, expertise, trajetória restaurante",
  openGraph: {
    title: "Nossa História - 20 Anos de Kinpai Sushi",
    description: "Uma jornada de paixão pela culinária autêntica japonesa. 20 anos conectando sabor, tradição e sofisticação.",
  },
};

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/about.jpg",
  "/images/menu-1.jpg",
];

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />

      {/* Hero with Carousel */}
      <section className="relative w-full h-[500px] mt-20">
        <HeroCarousel images={galleryImages} autoPlayInterval={3000} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40">
          <h1 className="font-display text-5xl tracking-widest text-center">
            20 Anos de <span className="text-[#E7C36B]">História</span>
          </h1>
          <p className="mt-4 text-lg text-stone-300">
            Dois décadas de tradição, autenticidade e excelência
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-20">
        {/* Intro Section */}
        <section className="mb-20">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12">
            <p className="text-lg text-[#E7C36B] italic leading-relaxed">
              "De uma pequena casa de sushi a uma referência gastronômica, o Kinpai cresceu com você. 
              Cada ano representa um compromisso renovado com a excelência culinária e a satisfação 
              dos nossos clientes."
            </p>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden border border-white/10 shadow-2xl mb-12">
            <video
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663043401180/CsXssxZRxBcpsFaM.mp4"
              controls
              className="w-full h-full bg-black"
              poster="/images/menu-1.jpg"
            />
          </div>
        </section>

        {/* History Section */}
        <section className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block bg-[#E7C36B] text-black px-3 py-1 rounded-full text-xs font-bold mb-4">
                NOSSA JORNADA
              </span>
              <h2 className="font-display text-4xl tracking-widest mb-6">
                A Trajetória do Kinpai
              </h2>
              <p className="text-stone-300 leading-relaxed mb-4">
                O Kinpai é um restaurante que celebra a autenticidade da culinária japonesa, 
                combinando sabores clássicos com um toque contemporâneo. Cada prato é uma verdadeira 
                viagem ao Japão, preparado com ingredientes frescos e técnicas que valorizam a 
                essência da gastronomia Oriental.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Desde sua fundação em Petrópolis, o Kinpai se consolidou como referência em sushi 
                premium, conquistando clientes que buscam qualidade, autenticidade e uma experiência 
                gastronômica memorável.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10">
              <img
                src="/images/about.jpg"
                alt="Kinpai ao longo dos anos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="font-display text-4xl tracking-widest mb-12 text-center">
            Serviços & <span className="text-[#E7C36B]">Experiências</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Rodízio", description: "Experiência completa com sushi premium selecionado" },
              { title: "Eventos", description: "Celebrações especiais e confraternizações" },
              { title: "Delivery", description: "Entrega rápida e segura em Petrópolis" },
              { title: "Almoço Executivo", description: "Menu especial para profissionais" },
              { title: "À La Carte", description: "Seleção premium de pratos variados" },
              { title: "Dose Dupla", description: "Promoção especial imperdível" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-[#E7C36B]/50 transition"
              >
                <h3 className="font-display text-xl text-[#E7C36B] mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ambience Section */}
        <section className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10 lg:order-2">
              <img
                src="/images/gallery-2.jpg"
                alt="Ambiente sofisticado"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="font-display text-4xl tracking-widest mb-6">
                Sofisticação & <span className="text-[#E7C36B]">Elegância</span>
              </h2>
              <p className="text-stone-300 leading-relaxed mb-6">
                Nossos ambientes são um convite ao refinamento e à excelência culinária. A cada 
                detalhe, buscamos criar uma atmosfera de luxo contemporâneo onde a tradição japonesa 
                encontra o conforto moderno.
              </p>
              <div className="bg-white/5 border-l-4 border-[#E7C36B] p-6 rounded">
                <p className="text-[#E7C36B] italic">
                  "Venha vivenciar uma experiência única de sabores, elegância e momentos inesquecíveis."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Arte & Expertise */}
        <section className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-4xl tracking-widest mb-6">
                Arte & <span className="text-[#E7C36B]">Expertise</span>
              </h2>
              <p className="text-stone-300 leading-relaxed mb-6">
                Nosso chef traz técnicas refinadas e um profundo conhecimento da culinária 
                japonesa. Com seleção rigorosa de ingredientes importados, cada prato é preparado 
                com dedicação absoluta.
              </p>
              <h3 className="font-display text-2xl tracking-wide mb-4 text-[#E7C36B]">
                Qualidade em Cada Detalhe
              </h3>
              <p className="text-stone-300 leading-relaxed">
                A paixão pelo ofício reflete em cada movimento, em cada corte, em cada 
                combinação de sabores que chega até sua mesa. Uma verdadeira experiência gastronômica.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10">
              <img
                src="/images/hitoria/chef.png"
                alt="Chef Kinpai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* O Time Kinpai */}
        <section className="mb-20 bg-white/5 rounded-lg p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10 lg:order-2">
              <img
                src="/images/hitoria/equipe.png"
                alt="Equipe Kinpai"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="font-display text-4xl tracking-widest mb-4">
                O Time <span className="text-[#E7C36B]">Kinpai</span>
              </h2>
              <p className="text-[#E7C36B] text-lg mb-6">
                Profissionais qualificados dedicados à excelência
              </p>
              <p className="text-stone-300 leading-relaxed mb-4">
                Esse é o time Kinpai, responsável pelo alto padrão que faz a diferença. São 
                profissionais qualificados e dedicados que garantem a excelência do nosso 
                restaurante.
              </p>
              <p className="text-stone-300 leading-relaxed">
                Agradecemos a cada um pelo trabalho impecável que sustenta nossa reputação e 
                conquista de nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Nea - A Visionária */}
        <section className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-4xl tracking-widest mb-4">
                Nea - <span className="text-[#E7C36B]">A Visionária</span>
              </h2>
              <p className="text-[#E7C36B] text-lg italic mb-6">
                "Uma paraibana, bem petropolitana e quase japonesa!"
              </p>
              <p className="text-stone-300 leading-relaxed mb-4">
                Morando em Petrópolis há 30 anos e com mais de 25 anos de experiência em 
                restaurante japonês, Nea traz ao Kinpai sua paixão pela culinária com muita 
                criatividade, alegria e administração de uma equipe premium.
              </p>
              <div className="bg-white/5 border-l-4 border-[#E7C36B] p-6 rounded mb-4">
                <p className="text-[#E7C36B] italic">
                  "São quase 20 anos se dedicando ao Kinpai e à satisfação dos seus clientes."
                </p>
              </div>
              <p className="text-stone-300 leading-relaxed">
                ✨ Conte uma história sua com a Nea!
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10">
              <img
                src="/images/hitoria/nea.png"
                alt="Nea - Visionária do Kinpai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="font-display text-4xl tracking-widest mb-12 text-center">
            Nossa <span className="text-[#E7C36B]">Trajetória</span>
          </h2>
          <div className="space-y-8">
            {[
              { year: "2004", title: "Fundação", description: "Nasce o Kinpai em Petrópolis com um sonho de trazer autenticidade à culinária japonesa" },
              { year: "2010", title: "Expansão", description: "Abrimos nossa segunda unidade em Valparaíso, expandindo nossa presença regional" },
              { year: "2015", title: "Reconhecimento", description: "Atingimos o reconhecimento como melhor sushi bar da região" },
              { year: "2020", title: "Inovação", description: "Implementamos tecnologia avançada e expandimos nossos serviços de delivery" },
              { year: "2024", title: "Celebração", description: "Completamos 20 anos de excelência e continuamos inovando" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#E7C36B] rounded-full"></div>
                  <div className={`w-1 h-20 bg-[#E7C36B]/30 ${idx === 4 ? "hidden" : ""}`}></div>
                </div>
                <div className="pb-8">
                  <span className="text-[#E7C36B] font-bold text-lg">{item.year}</span>
                  <h3 className="font-display text-2xl tracking-wide mb-2">{item.title}</h3>
                  <p className="text-stone-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#E7C36B]/10 to-transparent border border-[#E7C36B]/30 rounded-lg p-12 text-center">
          <h2 className="font-display text-3xl tracking-widest mb-4">
            Venha Fazer Parte de Nossa História
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Cada cliente que escolhe o Kinpai faz parte dessa trajetória de excelência. 
            Venha vivenciar a qualidade, autenticidade e elegância que nos definem.
          </p>
          <a
            href="/pedinosite"
            className="inline-block bg-[#E7C36B] text-black font-bold px-8 py-3 rounded hover:bg-[#f3d77f] transition"
          >
            Fazer um Pedido
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
