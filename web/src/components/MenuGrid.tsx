"use client";

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  image_url?: string;
};

type MenuGridProps = {
  items: MenuItem[];
  showOrderButton?: boolean;
};

const placeholderImage = "/images/menu-1.jpg";
const whatsappBase = "https://wa.me/5524988622222?text=";

export default function MenuGrid({ items, showOrderButton }: MenuGridProps) {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white">
        <p>Carregando cardapio...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((menuItem) => {
        const imageUrl =
          menuItem.image_url && !menuItem.image_url.includes("no-image.png")
            ? menuItem.image_url
            : placeholderImage;
        const message = encodeURIComponent(
          `Ola! Gostaria de pedir: ${menuItem.name}.`
        );

        return (
          <div
            key={`${menuItem.name}-${menuItem.price}`}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-[#E7C36B]/40 hover:bg-white/8"
          >
            <div className="relative h-64 w-full overflow-hidden bg-black/40">
              <img
                src={imageUrl}
                alt={menuItem.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.src = placeholderImage;
                }}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h3 className="text-base font-semibold text-white line-clamp-2">
                  {menuItem.name}
                </h3>
                {menuItem.description ? (
                  <p className="mt-2 text-xs text-stone-400 line-clamp-2">
                    {menuItem.description}
                  </p>
                ) : null}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-[#E7C36B]">
                  {menuItem.price}
                </span>
                {showOrderButton ? (
                  <a
                    href={`${whatsappBase}${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#E7C36B]/60 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#E7C36B] transition hover:border-[#E7C36B] hover:bg-[#E7C36B]/10"
                  >
                    Pedir
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
