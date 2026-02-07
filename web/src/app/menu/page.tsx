import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuGrid from "@/components/MenuGrid";
import Section from "@/components/Section";
import menuData from "@/data/menu.json";
import CTA from "@/components/CTA";

export default function MenuPage() {
  return (
    <div className="bg-[#070707] text-stone-100">
      <Header />
      <main className="relative">
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-white">
            <p className="text-xs uppercase tracking-[0.6em] text-[#E7C36B]">
              Cardapio
            </p>
            <h1 className="font-display mt-6 text-4xl tracking-[0.16em] sm:text-5xl">
              Nosso cardapio
            </h1>
            <p className="mt-6 max-w-2xl text-base text-stone-300">
              Explore nossa selecao premium de pratos japoneses autenticos e faca
              seu pedido direto pelo WhatsApp.
            </p>
          </div>
        </section>

        <Section id="cardapio">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#E7C36B]">
                  Menu completo
                </p>
                <h2 className="font-display mt-3 text-3xl tracking-[0.12em]">
                  Todos os pratos
                </h2>
              </div>
            </div>
            <MenuGrid items={menuData} showOrderButton />
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
