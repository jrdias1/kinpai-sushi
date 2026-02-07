import Section from "./Section";

export default function Location() {
  return (
    <Section id="localizacao">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#E7C36B]">
            Localizacao
          </p>
          <h2 className="font-display mt-4 text-3xl tracking-[0.12em] sm:text-4xl">
            Visite o Kinpai
          </h2>
          <div className="mt-6 text-sm text-stone-300">
            <p>R. Goncalves Dias, 423</p>
            <p>Valparaiso, Petropolis - RJ</p>
            <p>25655-122</p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#E7C36B]">
            Horario
          </p>
          <div className="mt-4 space-y-2 text-sm text-stone-300">
            <p>Ter a Qui: 18h - 23h</p>
            <p>Sex e Sab: 18h - 00h</p>
            <p>Dom: 18h - 22h</p>
          </div>
          <a
            href="https://maps.google.com/?q=R.%20Goncalves%20Dias%2C%20423%20Petropolis%20RJ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E7C36B] transition hover:text-[#f3d77f]"
          >
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </Section>
  );
}
