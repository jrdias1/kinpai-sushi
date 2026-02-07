import Section from "./Section";
import MenuGrid from "./MenuGrid";
import menuData from "@/data/menu.json";

const menuItems = menuData.slice(0, 6);

export default function Menu() {
  return (
    <Section id="cardapio">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#E7C36B]">
              Cardapio
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-[0.12em] sm:text-4xl">
              Destaques da casa
            </h2>
          </div>
          <a
            href="/pedinosite"
            className="text-xs uppercase tracking-[0.3em] text-[#E7C36B] transition hover:text-[#f3d77f]"
          >
            Fazer pedido
          </a>
        </div>
        <div className="mt-12">
          <MenuGrid items={menuItems} />
        </div>
      </div>
    </Section>
  );
}
