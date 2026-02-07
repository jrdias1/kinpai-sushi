import Section from "./Section";

export default function CTA() {
  return (
    <Section id="reserva" className="bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#E7C36B]">
            Reserva
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-[0.12em] sm:text-4xl">
            Reserve sua experiencia
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/5524988622222"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#E7C36B] px-6 py-3 text-xs uppercase tracking-[0.3em] text-black transition hover:bg-[#f3d77f]"
          >
            WhatsApp
          </a>
          <a
            href="tel:+5524988622222"
            className="rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:border-white"
          >
            Telefone
          </a>
        </div>
      </div>
    </Section>
  );
}
