import Image from "next/image";
import Section from "./Section";

export default function About() {
  return (
    <Section id="sobre" className="bg-black/80">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#E7C36B]">
            Sobre o Kinpai
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-[0.12em] sm:text-4xl">
            Tradicao e modernidade em cada prato
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            No Kinpai Sushi, tradicao e modernidade se encontram. Cada prato e
            preparado com ingredientes frescos, tecnica apurada e respeito a
            cultura japonesa.
          </p>
          <p className="mt-4 text-sm text-stone-400">
            Ambientes intimistas, atendimento elegante e um cardapio que valoriza
            os sabores essenciais.
          </p>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/about.jpg"
            alt="Ambiente do Kinpai Sushi"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
